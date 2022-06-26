import Vue from 'vue';
import Router from 'vue-router';
import App from "./App";
Vue.use(Router);

const Home = () => import ('../examples/views/Home.vue');
const Button = () => import ('../examples/views/Button.vue');
const CheckBox = () => import('../examples/views/CheckBox.vue');
const Input = () => import('../examples/views/Input.vue');
const Radio = () => import('../examples/views/Radio.vue');
const Message = () => import('../examples/views/Message.vue');


const routes = [{
    path: '/',
    component: App,
    children: [{
        path: '/home',
        redirect: '/',
    },{
        path: '/',
        name: 'home',
        component: Home,
    },{
        path: '/button',
        name: 'button',
        component: Button,
    }, {
        path: '/input',
        name: 'input',
        component: Input,
    },{
        path: '/checkbox',
        name: 'checkbox',
        component: CheckBox,
    },{
        path: '/radio',
        name: 'radio',
        component: Radio,
    },{
        path: '/message',
        name: 'message',
        component: Message,
    }]
}]

export default new Router ({
    mode: 'history',
    routes,
    scrollBehavior (to, from, savedPosition) {
        return {x: 0, y: 0};
    },
});
