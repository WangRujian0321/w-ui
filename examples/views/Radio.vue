<template>
  <div>
    <h1>Radio单选框</h1>
    <p>简单使用，只能选择一种情况的单选框</p>
    <div style="height: 8px"/>
    <div>
      <w_radio-group v-model="group_sex">
        <w_radio label="男人">男人</w_radio>
        <w_radio label="女人">女人</w_radio>
        <w_radio label="人妖">人妖</w_radio>
      </w_radio-group>
      <p>{{group_sex}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      group_sex: "男人"
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
