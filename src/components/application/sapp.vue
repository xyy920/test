<template>
  <div class="slider">
            <div class="slider-nav">
              <el-menu
                router
                @open="handleOpen"
                @close="handleClose"
                :default-openeds='openeds'
                :default-active="defaultActive"
              >
                <el-submenu index="1">
                  <template
                    slot="title"
                    style=""
                  >
                    <span style="color: #4b88fb;width: 100%;height:100%;">审计成果应用</span>
                  </template>
                  <el-menu-item index="/app/application"><img
                      src="../../images/xuxian.png"
                      alt=""
                    >问题台账</el-menu-item>
                  <el-menu-item index=""><img
                      src="../../images/xuxian.png"
                      alt=""
                    >风险管理</el-menu-item>
                  <el-menu-item index=""><img
                      src="../../images/xuxian.png"
                      alt=""
                    >问题梳理分析</el-menu-item>
                  <el-menu-item index=""><img
                      src="../../images/xuxian.png"
                      alt=""
                    >管理分析与提示</el-menu-item>
                </el-submenu>
              </el-menu>
            </div>
          </div>
</template>
<style scoped>
.el-submenu .el-menu-item {
  min-width: 180px;
}

.el-menu-item-group__title {
  padding: 0px 0px 0px 20px;
}
.el-menu-item {
  height: 36px !important;
  line-height: 36px !important;
  padding-left: 20px !important;
  color: #585858;
  border-bottom: 1px dashed #e6e6e6;
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
.el-submenu__title span::before {
  content: "";
  position: absolute;
  left: -20px;
  width: 5px;
  height: 56px;
  background: #4b88fb;
  opacity: 1;
  transition: all 0.3s;
}
</style>
<script>
import '../../js/index.js'
import "../../css/index.css"
import '../../fonts/iconfont.css'
import "../../../node_modules/element-ui/lib/theme-chalk/index.css";
export default {
  data() {
    return {
      openeds: ['1'],
      defaultActive: this.$route.path,
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
