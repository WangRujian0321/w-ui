<template>
  <div>
    <w_radio-group v-model="group_sex">
      <w_radio label="男人">男人</w_radio>
      <w_radio label="女人">女人</w_radio>
      <w_radio label="人妖">人妖</w_radio>
    </w_radio-group>
    <h1>{{group_sex}}</h1>
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
