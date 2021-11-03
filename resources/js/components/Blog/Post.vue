<template lang="">
    <div>
        <div class="edit-post title">
            <h2>{{title}}</h2>
        </div>
        <div class="edit-post body">
            <p>{{body}}</p>
        </div>
        <div class="post-navigation">
            <router-link :to="'/post/' + id">Read more</router-link>
            <div class="delate"  @click="removePost(index, id)"><img src="images/dustbin.svg"></div>
            <div class="edit" @click="editPost()"><img src="images/pencil.svg"></div>
        </div>
        <edit-post 
            v-if="edit" 
            :title="title"
            :body="body"
            v-on:closePopup="edit = false"
            @update-title="updateTitle"
            @update-body="updateBody"
        ></edit-post>
    </div>
</template>
<script>
import editPost from "./EditPost.vue";
export default {
    name: 'post',
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
        editPost
    }
}
</script>
<style scoped>
    
</style>