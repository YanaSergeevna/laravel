<template>
        <button class="btn btn-primary" @click.prevent="$emit('store')">
            <span>{{buttonText}}</span>
        </button>
</template>

<script>
    export default {
        name: "form-button",
        data() {
            return {
                buttonText: "Submit"
            }
        }
    }
</script>


<style scoped>
    .btn-primary {
        width: 300px;
        background: orange;
        margin: 50px 0;
    }
</style>