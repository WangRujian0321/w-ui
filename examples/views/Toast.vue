<template>
  <div>
    <h1>Toast信息框</h1>
    <p>一种弹出的信息框</p>
    <div>
      <w_button
          type="normal"
          @click="showToast"
      >点击出现Toast</w_button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showToast() {
      this.$toast({
        message: "hello world!",
        duration: 3000,
        onClose: () => {
          alert("关闭了");
        }
      });

      // setTimeout(() => {
      //   this.$toast({
      //     message: "hello world!",
      //     duration: 3000,
      //     onClose: () => {
      //       alert("关闭了");
      //     }
      //   });
      // }, 1000);
    }
  }
};
</script>

<style scoped>

</style>
