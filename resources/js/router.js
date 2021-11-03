import vueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(vueRouter);

import Index from "./views/Index";
import Product from "./views/Product";
import ToDo from "./views/ToDo";
import createPost from "./views/CreatePost";
import Blog from "./views/Blog";
import Post from "./views/Post";
import Gallery from "./views/Gallery";

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
    }
];

export default new vueRouter({
    mode: "history",
    routes    
})