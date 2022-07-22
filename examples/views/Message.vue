<template>
  <div>
    <div>
      <h1>Message信息框</h1>
      <p>一种简单弹出的信息框</p>
    </div>
    <div>
      <h1>选择类型</h1>
      <w_radio-group v-model="type">
        <w_radio label="success"></w_radio>
        <w_radio label="error"></w_radio>
        <w_radio label="info"></w_radio>
        <w_radio label="warning"></w_radio>
      </w_radio-group>
    </div>
    <div style="width:300px">
      <h1>选择提示内容</h1>
      <w_input v-model="message"></w_input>
    </div>
    <div style="height: 20px"/>
    <div>
      <w_button type="success" @click="showMessage">点击我</w_button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: "success",
      message: "我是一个message 消息提示",
    }
  },
  methods: {
    showMessage() {
      this.$message({
        message: this.message,
        duration: 3000,
        position: "right",
        type: this.type
      });
    },
    showMessage1() {
      this.$message({
        message: "我是一个message 消息提示",
        duration: 3000,
        position: "center",
        type: "success"
      });
    }
  }
};
</script>

<style scoped lang="scss">
.wrapper {
  width: 300px;
  margin: 100px auto;
}
</style>
