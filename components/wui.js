import Button from "./lib/button";
import Icon from "./lib/icon";
import Checkbox from "./lib/checkbox";
import CheckboxGroup from "./lib/checkbox-group";
import Message from "./lib/message";
import Input from "./lib/input";
import InputNumber from "./lib/input-number";
import MessageBox from "./lib/message-box";

const componentsList = [
    Button,
    Icon,
    Checkbox,
    CheckboxGroup,
    Message,
    MessageBox,
    Input,
    InputNumber,
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
}
