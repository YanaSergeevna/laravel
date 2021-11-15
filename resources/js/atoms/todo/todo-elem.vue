<template>
  <li class="a-todo-elem">
        <label :class="[
                'a-todo-elem__circle', 
                checkedItem ? 'active' : ''
                ]" 
                @click="checkItem"></label>
        <textarea 
            class="form-field field" 
            rows="1" 
            v-model="task"
            v-on:keydown.enter.prevent.exact='saveItem'
            @keydown.prevent.ctrl.enter="newLine"
        ></textarea>
      <div class="a-todo-elem__settings"></div>
  </li>
</template>
<script>
  import { setResizeListeners } from "../../helpers/auto-resize.js";
  export default {
    name: 'todo-elem',
    props: {
        task: {
            typeof: String
        }
    },
    data: () => ({
        issueContent: '',
        filledField: false,
        checkedItem: false
    }),
    mounted:function(){
        setResizeListeners(this.$el, ".form-field");
    },
    methods: {
        newLine(e) {
            let caret = e.target.selectionStart;
            e.target.setRangeText("\n", caret, caret, "end");
            this.text = e.target.value;
        },
        saveItem(e) {
            e.target.blur()
        },
        checkItem(e) {
            this.checkedItem = true
        }
    }
  }
</script>
<style scoped lang="scss">
    .a-todo-elem {
        list-style-type: none;
        display: flex;
        justify-content: flex-start;
    }
    .a-todo-elem__circle {
        position: relative;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        flex-shrink: 0;
        border: 2px solid #cecece;
        margin: 5px 10px 0 0;
        cursor: pointer;
        &.active {
            border-color: green;
            &:after {
                content: "";
                position: absolute;
                top: 2px;
                left: 2px;
                width: 12px;
                height: 12px;
                border-radius: 50%;
                background: green;
            }
        }
    }
    textarea {
        border: none;
        padding: 0;
        height: auto;
        width: 100%;
        font-size: 14px;
        resize: none;
        overflow: hidden;
        padding: 5px 0;
        border-bottom: 1px solid #F4BC9F;
        &:focus {
            outline: none;
        }
    }
    .filled-field {
        border-bottom: 1px solid #F4BC9F;
    }
    .a-todo-elem:last-child {
        position: relative;
        &:before {
            content: "";
            position: absolute;
            top: calc(100% + 10px);
            left: 50%;
            width: 20px;
            height: 20px;
            background: url("/images/plus.svg") center/cover;
            z-index: -1;
        }
    }
        
</style>
