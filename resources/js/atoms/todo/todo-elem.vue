<template>
  <li class="a-todo-elem">
        <label class="a-todo-elem__circle"></label>
        <textarea 
            :class="[
                'field',
                'js-autoresize',
                filledField ? 'filled-field' : ''
            ]" 
            rows="1" 
            v-model="task" 
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
        filledField: false
    }),
    mounted:function(){
        setResizeListeners(this.$el, ".js-autoresize");
    },
    methods: {
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
        width: 20px;
        height: 20px;
        border-radius: 50%;
        flex-shrink: 0;
        border: 1px solid #cecece;
        margin: 5px 10px 0 0;
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
        &:focus {
            outline: none;
            border-bottom: 1px solid #F4BC9F;
        }
    }
    .filled-field {
        border-bottom: 1px solid #F4BC9F;
    }
        
</style>
