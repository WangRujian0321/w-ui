import 'animate.css';
import './css/reset.scss';
import Button from "./lib/button";
import Icon from "./lib/icon";
import Checkbox from "./lib/checkbox";
import CheckboxGroup from "./lib/checkbox-group";
import Message from "./lib/message";
import Input from "./lib/input";
import InputNumber from "./lib/input-number";
import MessageBox from "./lib/message-box";
import Radio from "./lib/radio";
import RadioGroup from "./lib/radio-group";
import Modal from "./lib/modal";
import Form from "./lib/form";
import FormItem from "./lib/form-item";
import Toast from "./lib/toast";

const componentsList = [
    Button,
    Icon,
    Checkbox,
    CheckboxGroup,
    Message,
    MessageBox,
    Input,
    InputNumber,
    Radio,
    RadioGroup,
    Modal,
    Form,
    FormItem,
    Toast
]

const install = function(Vue) {
    // 判断是否安装过
    if (install.installed) return

    // 注册所有组件
    componentsList.map((component) => {
        Vue.use(component)
    })
}

export default {
    install,
    Button,
    Icon,
    Checkbox,
    CheckboxGroup,
    Message,
    MessageBox,
    Input,
    InputNumber,
    Radio,
    RadioGroup,
    Modal,
    Form,
    FormItem,
    Toast
}
