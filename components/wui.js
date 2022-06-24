import Button from "./lib/button";
import Icon from "./lib/icon";
import Checkbox from "./lib/checkbox";

const componentsList = [
    Button,
    Icon,
    Checkbox
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
