<template>
  <div>
    我是一个modal 内容
    <w_button
        type="normal"
        @click="closeMe"
    >关闭</w_button>
    <h1>哈哈哈</h1>
    <h2>我是传递过来的参数: {{params.name}}</h2>
  </div>
</template>

<script>
export default {
  name: "Hello",
  props: {
    params: Object
  },
  methods: {
    closeMe() {
      this.$emit("close");
      this.$emit("success", {
        status: "success"
      });
      // this.$emit("fail", {
      //   status: "fail"
      // });
    }
  }
}
</script>

<style scoped>

</style>
