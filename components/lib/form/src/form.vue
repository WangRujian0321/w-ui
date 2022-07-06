<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "w_form",
  provide() {
    return {
      Form: this,
    }
  },
  props: {
    model: {
      type: Object,
    },
    rules: {
      type: Object,
    },
    labelWidth: {
      type: String,
    }
  },
  methods: {
    validate(cb) {
      let promise = this.$children
          .filter(item=>item.prop)
          .map(child => child.startValidate());
      console.log(this.$children[0].prop)
      Promise.all(promise).then(data=>{
        cb(true);
      }).catch(err=>{
        cb(false);
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import "form.scss";
</style>
