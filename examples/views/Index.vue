<template>
  <div class="index-container">
    <el-container>
      <el-header class="el-header-class">w-ui 简单演示</el-header>
      <el-container style="height: 100%">
        <el-aside class="el-aside-class">
          <el-menu
              default-active="0" class="el-menu-vertical-demo"
              router
              @select="handleSelect"
              @open="handleOpen"
              @close="handleClose">
            <el-menu-item index="0" route="/home">
              <span slot="title">主页</span>
            </el-menu-item>
            <el-menu-item index="1" route="/button">
              <span slot="title">按钮</span>
            </el-menu-item>
            <el-menu-item index="2" route="/radio">
              <span slot="title">单选框</span>
            </el-menu-item>
            <el-menu-item index="3" route="/checkbox">
              <span slot="title">多选框</span>
            </el-menu-item>
            <el-menu-item index="4" route="/input">
              <span slot="title">输入框</span>
            </el-menu-item>
            <el-menu-item index="5" route="/message">
              <span slot="title">信息框</span>
            </el-menu-item>
            <el-menu-item index="6" route="/toast">
              <span slot="title">Toast信息框</span>
            </el-menu-item>
            <el-menu-item index="7" route="/modal">
              <span slot="title">Modal信息框</span>
            </el-menu-item>
            <el-menu-item index="8" route="/form">
              <span slot="title">校验表单</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      isCollapse: true
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(index, indexPath) {

    }
  }
}
</script>

<style scoped>
.index-container {
  height: 100%;
  width: 100%;
}
.el-header-class {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-aside-class {
  color: #333;
  background-color: white;
  overflow: hidden;
}
</style>
