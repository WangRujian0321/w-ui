<template>
  <div>
    <h1>Input输入框</h1>
    <p>包含普通输入框和数字输入框</p>
    <div>
      <h1>普通输入框</h1>
      <div>
        单行输入框
        <div style="width: 30%">
          <w_input></w_input>
        </div>
      </div>
      <div>
        多行输入框
        <div style="width: 30%">
          <w_input type="textarea"></w_input>
        </div>
      </div>
    </div>
    <div>
      <div><h1>数字输入框</h1></div>
      <div>
        <div style="width: 30%">
          <w_input-number v-model="input_data_number"></w_input-number>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Input",
  data() {
    return {
      input_data: "",
      input_data_number: 0,
    }
  }
}
</script>

<style scoped>

</style>
