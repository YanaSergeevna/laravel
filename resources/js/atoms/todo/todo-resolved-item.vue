<template>
<transition name="slide-fade">
    <div class="a-todo-elem"  v-if="show">
        <label class="a-todo-elem__circle active"
            @click="checkItem">
        </label>
        <textarea 
            class="form-field field" 
            rows="1"
            v-model="task"
            @blur="saveValue()"
        ></textarea>
    </div>
</transition>
</template>
<script>
    export default {
        name: 'todo-resolved-item',
        props: {
            task: {
                typeof: String
            },
            index: {
                typeof: Number
            }
        },
        data: () => ({
            show: true
        }),
        mounted:function(){
        },
        methods: {
            checkItem(e) {
                let elem = e.target;
                elem.classList.remove('active')
                this.show = false;
                this.$emit('removeItem', this.index, 'resolved')
            },
            saveValue() {
                if(this.task != "") {
                    this.$emit('changeTask', this.task, this.index, 'resolved')
                } else {
                    this.show = false
                }
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
        padding: 5px 0;
        border-bottom: 1px solid #F4BC9F;
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
        
</style>
