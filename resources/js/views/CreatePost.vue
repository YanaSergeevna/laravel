<template>
        <div class="my-container">
            <div class="create-post">
                <h1>{{ formTitle }}</h1>
                <form v-on:submit.prevent="submitForm">
                    <div class="form-group" >
                        <label for="">Title</label>
                        <input type="text" v-model="form.title">
                    </div>
                    <div class="form-group">
                        <label for="">Content</label>
                        <textarea name="" id="" rows="5" v-model="form.body"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="">Author</label>
                        <select name="" id="">
                            <option value="" v-for="user in userData" :key="user.id">{{ user.name }}</option>
                        </select>
                    </div>
                    <div v-if="error">Ошибка! Проверте заполнение полей</div>
                    <div class="form-group">
                        <button class="btn btn-primary" @click.prevent="store">
                             <spin v-if="loading"></spin>
                             <span v-else>Submit</span></button>
                    </div>
                </form>
            </div>
        </div>
</template>

<script>
    import spin from "../components/Spin.vue";
    import axios from 'axios';
    export default {
        name: "createPost",
        data() {
            return {
                loading: false,
                formTitle: "Now create your post",
                userData: {},
                form: {
                    title: "",
                    body: "",
                },
                error: false
            }
        },
        mounted () {
            this.getUsersName();
        },
        methods:{
            getUsersName() {
                axios.get('https://jsonplaceholder.typicode.com/users').
                    then( result => { 
                    this.userData = result.data;
                })
            },
            store() {
                this.loading = true;
                axios.post('https://jsonplaceholder.typicode.com/posts', this.form, {
                    headers: {
                        "Content-type": "application/json"
                    }
                }).then( result => {
                    this.$router.push('/post/' + result.data.id)
                }).catch(err => {
                    this.error = true
                    this.loading = false;
                })
            }
        },
        components: {
            spin
        }
        
    }
</script>


<style scoped>
    .create-post {
        color: #ffffff;
        width: max-content;
        margin: 0 auto;
        padding: 50px;
        text-align: center;
    }
    .create-post 
        label {
            text-align: left;
        }
    .create-post 
        input,textarea, select {
            width: 100%;
        }
    .btn-primary {
        position: relative;
    }
    .lds-spinner {
        width: 20px;
        height: 20px;
        left: 0;
        top: 0;
        transform: translate(0, -50%);
    }
</style>