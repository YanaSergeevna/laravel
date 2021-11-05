<template lang="">
    <div>
        <div class="a-post-title">
            <h2>{{title}}</h2>
        </div>
        <div class="a-post-body">
            <p>{{body}}</p>
        </div>
        <div class="a-post-navigation">
            <router-link :to="'/post/' + id">Read more</router-link>
            <div class="delate"  @click="removePost(index, id)"><img src="images/dustbin.svg"></div>
            <div class="edit" @click="editPost()"><img src="images/pencil.svg"></div>
        </div>
        <m-edit-post 
            v-if="edit" 
            :title="title"
            :body="body"
            v-on:closePopup="edit = false"
            @update-title="updateTitle"
            @update-body="updateBody"
        ></m-edit-post>
    </div>
</template>
<script>
import EditPost from "../../molecules/Blog/edit-post.vue";
export default {
    name: 'edit-post',
    data: () => ({
        edit: false
    }),
    props: {
        title: {
            type: String,
            default: "Post title "
        },
        body: {
            type: String,
            default: "Post body "
        },
        id: {
            type: Number,
            default: "1"
        },
        removePost: {
            type: Function,
            defalt: ""
        },
        index: {
            type: Number,
            default: ""
        }
    },
    mounted () {
    },
    methods:{
        editPost() {
            this.edit = true
        },
        updateTitle(title) {
            this.title = title;
        },
        updateBody(body) {
            this.body = body;
        }
    },
    components: {
        "m-edit-post": EditPost
    }
}
</script>
<style scoped>
    
</style>