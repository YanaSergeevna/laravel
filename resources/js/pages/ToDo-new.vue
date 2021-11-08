<template>
        <div class="o-todo-wrapper" style="background-image: url(./images/bg.png)">
            <div class="container">
                <o-todo-week />
                <h1 class="a-todo-title">Weekly planner</h1>
                
            </div>
        </div>
</template>

<script>
    import ToDoWeek from "../organisms/todo/todo-week.vue";
    export default {
        name: "todo-new",
        data() {
            return {
            }
        },
        methods: {
        },
        computed: {
        },
        components: {
            "o-todo-week": ToDoWeek
        }
    }
</script>


<style lang="scss"scoped>
    .o-todo-wrapper {
        width: 100%;
        min-height: 100vh;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: top;
        background-attachment: fixed;
        h1 {
            font-family: 'Courgette', cursive;
        }
    }
    .a-todo-title {
        text-align: center;
        font-size: 40px;
        margin-top: 40px;
    }
</style>
