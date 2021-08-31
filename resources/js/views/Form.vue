<template>
        <div class="my-container">
            <div class="create-post">
                <h1>{{ formTitle }}</h1>
                <form>
                    <div class="form-group" >
                        <label for="">Title</label>
                        <input type="text">
                    </div>
                    <div class="form-group">
                        {{displayedBooks}}
                        <label for="">Content</label>
                        <textarea name="" id="" rows="5"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="">Author</label>
                        <select name="" id="" >
                            <option value="" v-for="user in userData" :key="user.id">{{ user.name }}</option>
                        </select>
                    </div>
                </form>
            </div>
        </div>
</template>

<script>
    export default {
        data() {
            return {
                formTitle: "Now create your post",
                userData: {}
            }
        },
        created() {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(json => this.userData = json);
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
</style>