<template lang="">
    <div class="comments-block">
        <h2>Комментарии</h2>
        <div v-if="not_found">Комментарии не найдены</div>
        <ul v-if="!not_found" class="comments-list">
            <li v-for="comment in comments">
                <div class="name">{{comment.email}}</div>
                <div class="title">{{comment.name}}</div>
                <p class="body">{{comment.body}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'comments',
    data: () => ({
        comments: [],
        not_found: false
    }),
    props: {
    },
    mounted () {
        this.$emit("update-loading", true);
        this.loadComments(this.$route.params.id)
    },
    methods:{
        loadComments(id) {
            axios.get('https://jsonplaceholder.typicode.com/posts/'+id+'/comments').
            then( result => { 
                this.comments = result.data;
                console.log(this.comments)
                this.$emit("update-loading", true);
            })
            .catch (err => {
                this.not_found = true
            })
        }
    },
    components: {
    }
}
</script>
<style scoped>
    
</style>