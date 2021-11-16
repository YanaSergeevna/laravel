<template>
    <li class="a-todo-elem" >
            <label :class="[
                    'a-todo-elem__circle', 
                    checkedItem ? 'active' : ''
                    ]" 
                    @click="checkItem"></label>
            <textarea 
                class="form-field field" 
                rows="1" 
                v-model="task"
                @blur="$emit('changeTask', task, index)"
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
        },
        index: {
            typeof: Number
        }
    },
    data: () => ({
        issueContent: '',
        filledField: false,
        checkedItem: false,
        elemShow: true,
        resolved: []
    }),
    mounted:function(){
        setResizeListeners(this.$el, ".form-field");
    },
    methods: {
        checkItem() {
            this.checkedItem = true
            this.$emit("v-show", false);
        },
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
