<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "w_radio-group",
  props: {
    value: {
      type: [String, Number],
    }
  },
  provide(){
    return {
      RadioGroup: this
    }
  }
}
</script>

<style scoped>

</style>
