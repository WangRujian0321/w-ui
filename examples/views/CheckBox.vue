<template>
  <div>
    <w_checkbox_group v-model="hobby">
      <w_checkbox label="篮球">篮球</w_checkbox>
      <w_checkbox label="足球">足球</w_checkbox>
      <w_checkbox label="乒乓球">乒乓球</w_checkbox>
    </w_checkbox_group>
    <p>{{hobby}}</p>
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
