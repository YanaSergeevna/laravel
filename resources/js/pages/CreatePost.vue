<template>
        <div class="my-container">
            <div class="o-create-post">
                <h1 class="a-form-title">{{ formTitle }}</h1>
                <form v-on:submit.prevent="submitForm">

                    <div class="m-form-group">
                        <label for="">Title</label>
                        <a-form-input 
                          @change-title="titleChanged" />
                    </div>
                    <div class="m-form-group">
                        <label for="">Content</label>
                        <a-form-textarea 
                          @change-body="bodyChanged"/>
                    </div>
                    <div class="m-form-group">
                        <label for="">Author</label>
                        <a-form-select
                          @change-author="authorChanged"/>
                    </div>

                    <a-form-error v-if="error" />
                    
                    <div class="form-group">
                        <a-form-button 
                            v-on:store="store"/>
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
    import FormError from "../atoms/form/form-error.vue";
    import FormButton from "../atoms/form/form-button.vue";


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
            console.log(this.post)
            
        },
        methods:{
            store() {
                let error = this.checkForm();
                if(error) {
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
                } else {
                    this.error = true
                }
            },
            authorChanged(author) {
                this.post.author = author;
            },
            titleChanged(title) {
                this.post.title = title;
            },
            bodyChanged(body) {
                this.post.body = body;
            },
            checkForm: function () {
                console.log(this.post.title)
                console.log(this.post.body)
                if (this.post.title == "" || this.post.body == "" || this.post.author == "" ) {
                 return false 
                } else {
                 return true;
                }
            }
        },
        components: {
            "a-spin": Spin ,
            "a-form-select": FormSelect,
            "a-form-input": FormInput,
            "a-form-textarea": FormTextarea,
            "a-form-error": FormError,
            "a-form-button": FormButton,
        }
        
    }
</script>


<style scoped>
    .o-create-post {
        color: #ffffff;
        width: max-content;
        margin: 0 auto;
        padding: 50px;
        text-align: center;
        width: 600px;
        max-width: 100%;
    }
    .o-create-post 
        label {
            text-align: left;
        }
    .o-create-post 
        input,textarea, select {
            width: 100%;
        }
    .btn-primary {
        position: relative;
    }
</style>