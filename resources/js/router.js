import vueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(vueRouter);

import Index from "./views/Index";
import Product from "./views/Product";
import ToDo from "./views/ToDo";
import Form from "./views/Form";
import Blog from "./views/Blog";

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
        path: '/form', 
        component: Form, 
    },
    { 
        path: '/blog', 
        component: Blog, 
    }
];

export default new vueRouter({
    mode: "history",
    routes    
})