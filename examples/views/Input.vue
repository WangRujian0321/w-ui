<template>
  <div>
    <w_input v-model="input_data"></w_input>
    <w_input-number v-model="input_data_number"></w_input-number>
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
