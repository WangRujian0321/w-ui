<template>
  <div class="m-card">
    <div class="m-card-img">
      <img src="" alt="">
    </div>
    <div class="m-card-summary">
      summary
    </div>
    <div class="footer">
      footer
    </div>
  </div>
</template>

<script>
export default {
  name: "w-card",
  props:{
    width: {
      // 宽度
      type: Number,
      default: 0,
    },
    src: {
      // 图片地址
      type: String,
      default: '',
    },
    imgHeight: {
      type: Number,
      default: 0,
    },
    summary: {
      type: String,
      default: '',
    }
  }
}
</script>

<style scoped>

</style>
