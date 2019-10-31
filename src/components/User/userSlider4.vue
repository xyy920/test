<template>
  <div class="slider">
    <div class="slider-nav">
      <el-menu
        @open="handleOpen"
        @close="handleClose"
        :default-openeds='openeds'
        :default-active="defaultActive"
      >

        <el-menu-item index="1">审计方案</el-menu-item>
        <el-menu-item index="2">审计通知书</el-menu-item>
        <el-menu-item index="3">审计底稿（审前调查）</el-menu-item>
        <el-menu-item index="4">审计底稿（审计进点会）</el-menu-item>
        <el-menu-item index="5">审计底稿（公司基本情况）</el-menu-item>
        <el-menu-item index="6">审计底稿（指标完成情况）</el-menu-item>
        <el-menu-item index="7">审计底稿（资产变动情况）</el-menu-item>
        <el-menu-item index="8">审计报告初稿</el-menu-item>
        <el-menu-item index="9">审计报告征求稿
        </el-menu-item>
        <el-menu-item index="10">审计报告终稿</el-menu-item>

      </el-menu>
    </div>
  </div>
</template>
<style scoped>
.el-submenu .el-menu-item {
  min-width: 180px;
}
.el-menu {
  border-right: solid 0px #e6e6e6;
  padding-left: 9px;
}
.slider {
  /* flex: 1; */
  width: 190px;
  height: auto;
  display: block;
  position: relative;
}
.el-menu-item-group__title {
  padding: 0px 0px 0px 20px;
}
.el-menu-item {
  height: 36px;
  line-height: 36px;
  padding-left: 20px !important;
  color: #585858;
  border-bottom: 0px dashed #e6e6e6;
}
.el-menu-item.is-active {
  color: #4b88fb;
}
.el-submenu.is-opened > .el-submenu__title .el-submenu__icon-arrow {
  -webkit-transform: rotateZ(-90deg);
  transform: rotateZ(-90deg) !important;
}
.el-submenu__icon-arrow {
  -webkit-transform: rotateZ(-90deg);
  transform: rotateZ(-90deg) !important;
}
.el-submenu__title span {
  /* border-left: 5px solid #4b88fb !important; */
  color: #4b88fb;
  position: relative;
}
</style>
<script>
import '../../js/index.js'
import "../../css/index.css"
export default {
  data() {
    return {
      openeds: ['0'],
      defaultActive: '',
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
};
</script>
