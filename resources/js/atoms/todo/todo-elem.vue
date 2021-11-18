<template>
<transition name="slide-fade">
    <li :class="['a-todo-elem', priority ]" 
        v-show="show" >
        <label class="a-todo-elem__circle" :style="'border-color:'+priorityColor" 
            @click="checkItem">
        </label>
        <span v-if="priority" style="">{{priority}}</span>
        <TextareaAutosize
        :min-height="30"
        :max-height="350"
        class="form-field field" 
        rows="1" 
        v-model="task"
        @blur.native="saveValue()"
      />
      <div class="a-info-btn"
            @click="openPriorityPopup"
      ><svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path d="M 12 0 C 5.371094 0 0 5.371094 0 12 C 0 18.628906 5.371094 24 12 24 C 18.628906 24 24 18.628906 24 12 C 24 5.371094 18.628906 0 12 0 Z M 12 2 C 17.523438 2 22 6.476563 22 12 C 22 17.523438 17.523438 22 12 22 C 6.476563 22 2 17.523438 2 12 C 2 6.476563 6.476563 2 12 2 Z M 12 5.8125 C 11.816406 5.8125 11.664063 5.808594 11.5 5.84375 C 11.335938 5.878906 11.183594 5.96875 11.0625 6.0625 C 10.941406 6.15625 10.851563 6.285156 10.78125 6.4375 C 10.710938 6.589844 10.6875 6.769531 10.6875 7 C 10.6875 7.226563 10.710938 7.40625 10.78125 7.5625 C 10.851563 7.71875 10.941406 7.84375 11.0625 7.9375 C 11.183594 8.03125 11.335938 8.085938 11.5 8.125 C 11.664063 8.164063 11.816406 8.1875 12 8.1875 C 12.179688 8.1875 12.371094 8.164063 12.53125 8.125 C 12.691406 8.085938 12.816406 8.03125 12.9375 7.9375 C 13.058594 7.84375 13.148438 7.71875 13.21875 7.5625 C 13.289063 7.410156 13.34375 7.226563 13.34375 7 C 13.34375 6.769531 13.289063 6.589844 13.21875 6.4375 C 13.148438 6.285156 13.058594 6.15625 12.9375 6.0625 C 12.816406 5.96875 12.691406 5.878906 12.53125 5.84375 C 12.371094 5.808594 12.179688 5.8125 12 5.8125 Z M 10.78125 9.15625 L 10.78125 18.125 L 13.21875 18.125 L 13.21875 9.15625 Z"/></svg></div>
      <a-add-priority class="a-priority-popup"
       v-if="priorityShow"
       @choisePriority="addedPriority"
       />
    </li>
</transition>
</template>
<script>
    import AddPriority from "./todo-add-priority.vue";
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
            elemShow: true,
            resolved: [],
            show: true,
            priorityShow: false,
            priorityColor: '#cecece',
            priority: ''
        }),
        mounted:function(){
        },
        methods: {
            checkItem(e) {
                let elem = e.target;
                elem.classList.add('active')
                setTimeout(()=>{
                    this.show = false;
                },1000)
                this.$emit('removeItem', this.index, 'active')
            },
            saveValue() {
                if(this.task != "") {
                    this.$emit('changeTask', this.task, this.index, 'active')
                } else {
                    this.show = false
                }
                
            },
            openPriorityPopup() {
                this.priorityShow ? this.priorityShow = false : this.priorityShow = true
            },
            addedPriority(color, index) {
                console.log(index)
                this.priorityColor = color
                switch (index) {
                case 0:
                      this.priority = '!!!'
                    break;
                case 1:
                      this.priority = '!!'
                    break;
                case 2:
                    this.priority = '!'
                    break;
                default:
                    this.priority = ''
                    break;
                }
            
            }


        },
        components: {
            'a-add-priority': AddPriority
        }
     
    }
</script>
<style scoped lang="scss">
    .a-todo-elem {
        position: relative;
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
                top: 3px;
                left: 3px;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background: green;
            }
        }
    }
    .a-todo-elem__circle.active + .form-field {
        opacity: .5;
    }
    textarea {
        border: none;
        padding: 0;
        height: auto;
        width: 100%;
        font-size: 14px;
        resize: none;
        overflow: hidden;
        padding: 5px 20px 5px 0;
        border-bottom: 1px solid #F4BC9F;
        cursor: move;
        &:focus {
            outline: none;
        }
    }
    .filled-field {
        border-bottom: 1px solid #F4BC9F;
    }
    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to {
        transform: translateX(10px);
        opacity: 0;
    }
    .a-info-btn {
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;
        svg {
            width: 20px;
        }
    }
    .a-priority-popup {
        position: absolute;
        top: 100%;
        right: 0;
        width: 200px;
        background: #ffffff;
        padding: 10px;
        box-shadow: 0 0 10px rgb(0 0 0 / 50%);
    }
    .a-todo-elem.hight textarea {
        &:before {
            content: "!!!";
            color: #F6412D;

        }
    }
</style>
