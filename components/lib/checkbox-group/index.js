import CheckBoxGroup from "./src/checkbox-group.vue";
import './src/checkbox-group.scss'

CheckBoxGroup.install = function (Vue) {
    Vue.component(CheckBoxGroup.name, CheckBoxGroup);
}

export default CheckBoxGroup;
