<template>
        <div class="my-container">
            <div class="o-create-post">
                <h1 class="a-form-title">{{ formTitle }}</h1>
                <form v-on:submit.prevent="submitForm">

                    <div class="m-form-group">
                        <label for="">Title</label>
                        <a-form-input 
                          @model="post.title" />
                    </div>
                    <div class="m-form-group">
                        <label for="">Content</label>
                        <a-form-textarea 
                          @model="post.body" />
                    </div>
                    <div class="m-form-group">
                        <label for="">Author</label>
                        <a-form-select
                          @change-author="authorChanged"/>
                    </div>

                    <div v-if="error">Ошибка! Проверте заполнение полей</div>
                    <div class="form-group">
                        <button class="btn btn-primary" @click.prevent="store">
                             <a-spin v-if="loading"></a-spin>
                             <span v-else>Submit</span></button>
                    </div>
                </form>
            </div>
        </div>
</template>

<script>
    import Spin from "../atoms/spin.vue";
    import FormSelect from "../atoms/form/form-select.vue";
    import FormInput from "../atoms/form/form-input.vue";
    import FormTextarea from "../atoms/form/form-textarea.vue";

    import axios from 'axios';
    export default {
        name: "createPost",
        data() {
            return {
                loading: false,
                formTitle: "Create a new post",
                post: {
                    title: "",
                    body: "",
                    author: ""
                },
                error: false
            }
        },
        mounted () {
            
        },
        methods:{
            store() {
                this.loading = true;
                axios.post('https://jsonplaceholder.typicode.com/posts', this.post, {
                    headers: {
                        "Content-type": "application/json"
                    }
                }).then( result => {
                    this.$router.push('/post/' + result.data.id)
                }).catch(err => {
                    this.error = true
                    this.loading = false;
                })
            },
            authorChanged(author) {
                this.post.author = author;
                console.log("Month changed. Selected ID: ", author);
            }
        },
        components: {
            "a-spin": Spin ,
            "a-form-select": FormSelect,
            "a-form-input": FormInput,
            "a-form-textarea": FormTextarea,
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
    .lds-a-spinner {
        width: 20px;
        height: 20px;
        left: 0;
        top: 0;
        transform: translate(0, -50%);
    }
</style>