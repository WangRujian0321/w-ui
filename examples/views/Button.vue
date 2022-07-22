<template>
  <div>
    <div>
      <h1>Button按钮</h1>
      <p>常用的操作按钮</p>
    </div>
    <div>
      <w_button>默认按钮</w_button>
      <w_button type="normal">普通按钮</w_button>
      <w_button type="success">成功按钮</w_button>
      <w_button type="warning">警告按钮</w_button>
      <w_button type="info">信息按钮</w_button>
      <w_button type="danger">危险按钮</w_button>
    </div>
    <div style="height: 8px"/>
    <div>
      <w_button round>默认按钮</w_button>
      <w_button round type="normal">普通按钮</w_button>
      <w_button round type="success">成功按钮</w_button>
      <w_button round type="warning">警告按钮</w_button>
      <w_button round type="info">信息按钮</w_button>
      <w_button round type="danger">危险按钮</w_button>
    </div>
    <div style="height: 8px"/>
    <div>
      <w_button disabled>默认按钮</w_button>
      <w_button disabled type="normal">普通按钮</w_button>
      <w_button disabled type="success">成功按钮</w_button>
      <w_button disabled type="warning">警告按钮</w_button>
      <w_button disabled type="info">信息按钮</w_button>
      <w_button disabled type="danger">危险按钮</w_button>
    </div>
  </div>

</template>

<script>
export default {
  name: "Button"
}
</script>

<style scoped>

</style>
