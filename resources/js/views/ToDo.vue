<template>
        <div class="my-container">
            <div class="todo-block">
                <h1>To do list</h1>
                <div>
                    <label for="">Enter your task</label>
                    <div v-if="error" class="error-line"><span>Error:</span> Please add the task name first!</div>
                    <div class="todo-block__form-group">
                        <input type="text" @keyup.enter="addToList(value)" v-model="value" @click="value=''">
                        <button class="btn"  @click="addToList(value)">
                            +
                        </button>
                    </div>
                    <div class="list">
                        <ul>
                            <transition-group name="flip-list" tag="ul">
                                <li class="list-item" v-for="(value, index) in valueArray" :key="'item' + index">
                                    <div class="custom-checkbox">
                                        <input type="checkbox" :id="'item' + index" @click="saveTasks(index);">
                                        <label :for="'item' + index"></label>
                                    </div>
                                    <p>{{ value }}</p>
                                    <button class="btn-remove" @click="removeTask(index)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                        </svg>
                                    </button>
                                </li>
                            </transition-group>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        data() {
            return {
                value: '',
                valueArray: [],
                error: false,
                doneArray:[]
            }
        },
        methods: {
           addToList (elem) {
                if( elem == '') {
                    this.error = true;
                    return
                }
                this.valueArray.push(elem);
                this.value='';
           },
           removeTask(index) {
               this.valueArray.splice(index, 1);
           },
           saveTasks(index) {
                var elem = this.valueArray.splice(index, 1);
                this.doneArray.push(elem[0]);
           }
        },
        computed: {
        }
    }
</script>


<style scoped>
</style>
