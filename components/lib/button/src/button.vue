<template>
  <button
      class="w_button"
      :disabled="disabled"
      :class="styleClass"
      @click="handleClick">
    <span v-if="icon">
      <w_icon :name="icon"></w_icon>
    </span>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "w_button",
  props: {
    type: {
      type: String,
      default: "",
      validator: (value)=>{
        return ["", "normal", "success", "warning", "danger"].includes(value);
      }
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    round: {
      type:Boolean,
      default: false,
    },
    icon: {
      type: String,
      default:""
    },
    size: {
      type: String,
      default: "",
      validator: (value)=>{
        return ["", "mini", "small", "medium"].includes(value);
      }
    }
  },
  computed: {
    styleClass() {
      return {
        [`w_button--${this.type}`]: this.type,
        [`w_button--${this.size}`]: this.size,
        ["is-round"]: this.round,
        "is-disabled": this.disabled,
      }
    }
  },
  methods: {
    handleClick(){
      this.$emit("click");
    }
  }
}
</script>

<style scoped>
@import "button.scss";
</style>
