import vueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(vueRouter);

import Index from "./pages/Index";
import Product from "./pages/Product";
import ToDo from "./pages/ToDo";
import createPost from "./pages/CreatePost";
import Blog from "./pages/Blog";
import Post from "./pages/Post";
import Gallery from "./pages/Gallery";
import ToDoNew from "./pages/ToDo-new";

const routes = [
    { 
        path: '/', 
        component: Index
    },
    { 
        path: '/product', 
        component: Product, 
    },
    { 
        path: '/todo', 
        component: ToDo, 
    },
    { 
        path: '/CreatePost', 
        component: createPost
    },
    { 
        path: '/blog',
        component: Blog
    },
    { 
        path: '/post/:id',
        component: Post
    },
    { 
        path: '/gallery',
        component: Gallery
    },
    { 
        path: '/todo-new',
        component: ToDoNew
    }
];

export default new vueRouter({
    mode: "history",
    routes    
})