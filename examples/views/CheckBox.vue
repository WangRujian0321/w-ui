<template>
  <div>
    <h1>CheckBox多选框</h1>
    <p>简单使用，可以选择多种情况的单选框</p>
    <div style="height: 8px"/>
    <div>
      <w_checkbox_group v-model="hobby">
        <w_checkbox label="篮球">篮球</w_checkbox>
        <w_checkbox label="足球">足球</w_checkbox>
        <w_checkbox label="乒乓球">乒乓球</w_checkbox>
      </w_checkbox_group>
      <p>{{hobby}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckBox",
  data() {
    return {
      hobby: ["足球"],
      checked: true
    }
  }
}
</script>

<style scoped>

</style>
