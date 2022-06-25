<template>
  <label class="w_radio">
    <span class="w_radio--outer">
      <span class="w_radio--inner" :class="{'is-checked': isChecked}"></span>
      <input class="w_radio-native" type="radio" :value="label" v-model="radioValue">
    </span>
    <span class="w_radio--label">
      {{ label }}
    </span>
  </label>
</template>

<script>
export default {
  name: "w_radio",
  inject: {
    RadioGroup: {
      default: ""
    }
  },
  props: {
    value: {
      type: [String, Number]
    },
    label: {
      type: [String, Number]
    }
  },
  computed: {
    isGroup() {
      return this.RadioGroup;
    },
    radioValue: {
      get() {
        return this.isGroup ? this.RadioGroup.value : this.value;
      },
      set(value) {
        if(this.isGroup) {
          this.RadioGroup.$emit("input", value);
        }else{
          this.$emit("input", value);
        }
      }
    },
    isChecked() {
      return this.radioValue === this.label;
    }
  }
}
</script>

<style scoped lang="scss">
@import 'radio.scss';
</style>
