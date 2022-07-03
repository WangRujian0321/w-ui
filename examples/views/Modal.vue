<template>
  <div>
    <w_button
        type="normal"
        @click="showModal"
    >点击我</w_button>
  </div>
</template>

<script>
import Hello from "../components/Hello";

export default {
  methods: {
    showModal() {
      this.$modal({
        template: Hello,
        params: {
          name: "我是外部传过来的数据"
        },
        success: data => {
          console.log("我是成功回调");
          console.log(data);
        },
        fail: data => {
          console.log("我是失败回调");
          console.log(data);
        }
      });
    }
  }
}
</script>

<style scoped>

</style>
