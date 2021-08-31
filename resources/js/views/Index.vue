<template>
        <div class="container">
            <h1>Это главная страница</h1>
            <p><strong>{{post.title}}</strong></p>
            <!-- <p>{{post.body}}</p>
            {{error.message}} -->
        </div>
</template>

<script>
import axios from 'axios';
    export default {
         data() {
            return {
            posts: [],
            errors: []
            }
        },
        async created() {
            try {
            const response = await axios.get(`https://api.thecatapi.com/v1/images/search`)
            this.posts = response.data
            } catch (e) {
            this.errors.push(e)
            }
        }
        
    }
</script>


<style scoped>
</style>
