import MessageBox from "./src/message-box.vue";

let w_instance = {
    install (Vue) {
        function generateInstance (options) {
            const Ctor = Vue.extend(MessageBox);

            let instance = new Ctor({
                propsData: options
            }).$mount(document.createElement('div'));
            return instance;
        }
        Vue.prototype.$confirm = function (options) {
            generateInstance(options);
        }
        Vue.prototype.$alert = function (options) {
            generateInstance(
                Object.assign(options, {type: 'alert'})
            )
        }
    }
}

export default w_instance;
