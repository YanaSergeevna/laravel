<template>
        <select name=""
            @change="changeAuthor()"
            v-model="selectedAuthor">
            <option value="" 
                v-for="user in userData" 
                :key="user.id"
                
            >{{ user.name }}</option>
        </select>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "form-select",
        data() {
            return {
                userData: {},
                selectedAuthor: ""
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
            changeAuthor() {
                this.$emit('change-author', this.selectedAuthor);
            }
        }
        
    }
</script>


<style scoped>
</style>