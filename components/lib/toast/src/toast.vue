<template>
  <div class="mask">
    <transition name="fade">
      <div class="w_toast" v-if="visible">
        <span class="w_toast-content">{{message}}</span>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "w_toast",
  data() {
    return {
      visible: false
    };
  },
  props: {
    message: {
      type: String,
      default: ""
    },
    duration: {
      type: Number,
      default: 1500
    }
  },
  mounted() {
    this.visible = true;
    document.body.appendChild(this.$el);
    this.startTimer();
    console.log(this.$props)
  },
  methods: {
    startTimer() {
      let timer = setTimeout(() => {
        this.visible = false;
      }, this.duration);

      this.$once("hook:beforeDestroy", () => {
        clearTimeout(timer);
        timer = null;
      });
    },
    destroyElement() {
      this.$destroy();
    }
  },
  beforeDestroy() {
    this.$el.removeEventListener("transitionend", this.destroyElement);
    this.$el.parentNode.removeChild(this.$el);
  },
  destroy() {},
  watch: {
    visible(newValue) {
      if (!newValue) {
        this.$el.addEventListener("transitionend", this.destroyElement);
        this.$emit("onClose");
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "toast.scss";
</style>
