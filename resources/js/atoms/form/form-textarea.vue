<template>
        <textarea name="" id="" rows="5" 
            @change="changeBody"
            v-model="body"></textarea>
</template>

<script>
    export default {
        name: "form-select",
        data() {
            return {
                body:''
            }
        },
        props: {
            model: String
        },
        mounted () {
        },
        methods:{
            changeBody() {
                this.$emit('change-body', this.body);
            }
        }
    }
</script>


<style scoped>
</style>