<template>
        <div class="my-container">
            <spin v-if="loading"></spin>
            <div v-else class="create-post">
                <div class="posts-grid">
                    <post class="posts-item"  v-for="(post, index) in posts" 
                        :key="post.id"
                        :title="post.title"
                        :body="post.body"
                        :id="post.id"
                        :removePost ="removePost"
                        :index="index" />
                </div>
            </div>
        </div>
</template>

<script>
    import spin from "../components/Spin.vue";
    import post from "../components/Blog/Post.vue";
    import axios from 'axios';
    export default {
        name: 'blog',    
        data: () => ({
            loading: true,
            posts: []
        }),
        mounted () {
            this.loadPosts();
        },
        methods:{
            loadPosts() {
                axios.get('https://jsonplaceholder.typicode.com/posts').
                    then( result => { 
                    this.posts = result.data;
                    setTimeout(() => {
                        this.loading = false;
                    }, 500)
                })
            },
            removePost(index, id) {
                this.loading = true;
                this.posts.splice(index, 1);
                axios.delete('https://jsonplaceholder.typicode.com/posts/'+id);
                setTimeout(() => {
                    this.loading = false;
                }, 500)
            }
        },
        components: {
            spin,
            post
        }
    }
</script>


<style scoped>
    .create-post {
        color: #ffffff;
        width: max-content;
        margin: 0 auto;
        text-align: center;
        max-width: 100%;
    }
    .create-post 
        label {
            text-align: left;
        }
    .create-post h1 {
        margin-bottom: 40px;
    }
    .posts-grid {
        display: flex;
        flex-wrap: wrap;

    }

</style>