<template lang="">
    <div class="edit-post-popup">
        <a-spin v-if="loading" class="black"></a-spin>
        <h2>Editing</h2>
        <div class="close" @click="$emit('closePopup')"></div>
        <form>
            <div class="edit-post title">
                <textarea v-model="newTitle" ></textarea>
            </div>
            <div class="edit-post body">
                <textarea v-model="newBody"></textarea>
            </div>
            <div class="errors" v-if="errors.length">
                <p v-for="error in errors">{{ error }}</p>
            </div>
            <div class="a-post-navigation">
                <button  @click.prevent="updateData" class="savePost">Save changes</button>
            </div>
        </form>
    </div>
</template>
<script>
import spin from "../../atoms/spin.vue";
export default {
    name: 'editPost',
    props: {
        title: {
            type: String,
            default: "Post title"
        },
        body: {
            type: String,
            default: "Post body"
        }
    },
    data: () => ({
        newTitle: "",
        newBody: "",
        errors: [],
        error: false,
        loading: false,
    }),
    mounted () {
        this.newTitle = this.title,
        this.newBody = this.body
    },
    methods:{
        updateData() {
            this.loading = true;
            let hasError = this.checkForm();
            if(!hasError) {
                this.$emit("update-title", this.newTitle);
                this.$emit("update-body", this.newBody);
                let form = {
                    title: this.newTitle,
                    body: this.newBody
                }
                axios.post('https://jsonplaceholder.typicode.com/posts', form, {
                    headers: {
                        "Content-type": "application/json"
                    }
                }).then( result => {
                    this.$emit('closePopup');
                    setTimeout(() => {
                        this.$emit('closePopup');
                        this.loading = false;
                    }, 500)
                })
            }
        },
        checkForm: function () {
            if (this.newTitle && this.newBody) {
                return false;
            }

            this.errors = [];

            if (!this.newTitle) {
                this.errors.push('Требуется указать заглавие.');
            }
            if (!this.newBody) {
                this.errors.push('Требуется указать текст.');
            }

            return true
        }
    },
    components: {
        "a-spin": spin,
    }
}
</script>
<style scoped>
</style>