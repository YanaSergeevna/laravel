<template lang="">
    <div class="my-container">
       <a-spin v-if="loading" />
       <div v-else-if="!loading && !not_found">
            <h1>{{post.title}}</h1>
            <p>{{post.body}}</p>
            <comments></comments>
       </div>
       <div v-if="not_found">Post not found</div>
    </div>
</template>
<script>
import spin from "../atoms/spin.vue";
import comments from "../molecules/comments.vue";
import axios from 'axios';
export default {
    name: 'post',
    data: () => ({
        loading: true,
        post: [],
        not_found:  false
    }),
    components: {
       "a-spin": spin ,
       "a-comments": comments
    },
    mounted() {
        this.loadPost(this.$route.params.id)
    },
    methods: {
        loadPost(id) {
            axios.get('https://jsonplaceholder.typicode.com/posts/'+id).
            then( result => { 
                this.post = result.data;
                setTimeout(() => {
                    this.loading = false;
                }, 500)
            })
            .catch (err => {
                this.not_found = true
                setTimeout(() => {
                    this.loading = false;
                }, 500)
            })
        }
    },
}
</script>
<style lang="">
    
</style>