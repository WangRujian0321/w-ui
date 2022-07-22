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
const Modal = () => import('../examples/views/Modal.vue');
const Toast = () => import('../examples/views/Toast.vue');
const Form = () => import('../examples/views/Form.vue');
const Index = () => import('../examples/views/Index.vue');


const routes = [{
    path: '/',
    component: Index,
    children: [{
        path: '/home',
        redirect: '/',
    },{
        path: '/',
        name: 'home',
        // redirect: '/button',
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
    },{
        path: '/modal',
        name: 'modal',
        component: Modal,
    },{
        path: '/toast',
        name: 'toast',
        component: Toast,
    },{
        path: '/form',
        name: 'form',
        component: Form,
    }]
}]

export default new Router ({
    mode: 'history',
    routes,
    scrollBehavior (to, from, savedPosition) {
        return {x: 0, y: 0};
    },
});
