<template>
        <div class="errors">
                <p>{{ error }}</p>
        </div>
</template>

<script>
    export default {
        name: "form-error",
        data() {
            return {
                error: "Сheck if the fields are entered correctly"
            }
        },
        props: {
        },
        mounted () {
        }

    }
</script>


<style scoped>
</style>