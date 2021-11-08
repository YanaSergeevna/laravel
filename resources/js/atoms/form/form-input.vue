<template>
        <input type="text" 
            @change="changeTitle"
            v-model="title">
</template>

<script>
    export default {
        name: "form-select",
        data() {
            return {
                title: ''
            }
        },
        mounted () {
        },
        methods:{
            changeTitle() {
                this.$emit('change-title', this.title);
            }
        }
        
    }
</script>


<style scoped>
</style>