<template>
    <header>
        <nav class="container navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/"><img src="images/logo.svg" alt=""></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item" v-for="link in links">
                        <router-link class="nav-link" :to="link.href">{{ link.title }}</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>
<script>
    export default {
        data() {
            return {
                menu: 'Navbar',
                links: [
                    {
                        title: "Product",
                        href: "/product"
                    },
                    {
                        title: "To Do list",
                        href: "/todo"
                    },
                    {
                        title: "Create Post",
                        href: "/CreatePost"
                    },
                    {
                        title: "Blog",
                        href: "/blog"
                    },
                    {
                        title: "Gallery",
                        href: "/gallery"
                    },
                    {
                        title: "To do new",
                        href: "/todo-new"
                    }
                ]
            }
        }
    }

</script>


<style lang="scss" scoped>
  .navbar-brand {
      width: 50px;
      img {
          max-width: 100%;
      }
  }
</style>
