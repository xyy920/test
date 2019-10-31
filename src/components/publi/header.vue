<template>
  <div class="head">
    <div class="header">
      <div class="logo">
        <div class="h-logo">
          <img
            style="
    margin-top: 20px;
"
            src="../../images/logo.png"
            alt
          />
          <i></i>
        </div>
      </div>
      <div class="navgater">
        <el-menu
          router
          :default-active="activeIndex"
          class="el-menu-vertical-demo"
          mode="horizontal"
          @select="handleSelect"
          active-text-color="#409EFF"
        >
          <el-menu-item index="/Index">
            <i>
              <img
                v-show="leve1"
                src="../../images/tab_00.png"
                alt
              />
              <img
                v-show="leve2"
                src="../../images/tab_00_01.png"
                alt
              />
            </i>
            <span slot="title">综合门户</span>
          </el-menu-item>
          <el-menu-item index="/plan/plan_yearplan">
            <i><img
                v-show="leve3"
                src="../../images/tab_01_01.png"
                alt
              />
              <img
                v-show="leve4"
                src="../../images/tab_01.png"
                alt
              /></i>
            <span slot="title">审计项目计划管理</span>
          </el-menu-item>

          <el-menu-item index="/homework/homework_itemlist">
            <i><img
                v-show="leve5"
                src="../../images/tab_02_01.png"
                alt
              />
              <img
                v-show="leve6"
                src="../../images/tab_02.png"
                alt
              /></i>
            <span slot="title">审计项目作业管理</span>
          </el-menu-item>

          <el-menu-item index="/information/Information_synthesis">
            <i><img
                v-show="leve7"
                src="../../images/tab_03_01.png"
                alt
              />
              <img
                v-show="leve8"
                src="../../images/tab_03.png"
                alt
              /></i>
            <span slot="title">审计信息综合报表</span>
          </el-menu-item>
          <el-menu-item index="/knowledge/knowledge_synthesis">
            <i><img
                v-show="leve9"
                src="../../images/tab_04_01.png"
                alt
              />
              <img
                v-show="leve10"
                src="../../images/tab_04.png"
                alt
              /></i>
            <span slot="title">审计知识综合利用</span>
          </el-menu-item>
          <el-menu-item index="/case/shenjiiCase">
            <i><img
                v-show="leve11"
                src="../../images/tab_05_01.png"
                alt
              />
              <img
                v-show="leve12"
                src="../../images/tab_05.png"
                alt
              /></i>
            <span slot="title">审计案例</span>
          </el-menu-item>
          <el-menu-item index="/app/application">
            <i><img
                v-show="leve13"
                src="../../images/tab_06_01.png"
                alt
              />
              <img
                v-show="leve14"
                src="../../images/tab_06.png"
                alt
              /></i>
            <span slot="title">审计成果应用</span>
          </el-menu-item>
          <el-menu-item index="/organization/organization_management">
            <i><img
                v-show="leve15"
                src="../../images/tab_07_01.png"
                alt
              />
              <img
                v-show="leve16"
                src="../../images/tab_07.png"
                alt
              /></i>
            <span slot="title">审计资源综合管理</span>
          </el-menu-item>
        </el-menu>
        <!-- -------------------- -->

      </div>
      <div class="setting">
        <router-link
          class="set"
          to="/UserList2/user_management"
        >
          <img
            src="../../images/set_03.png"
            alt
          />
        </router-link>
        <router-link
          class="set"
          to="/"
        >
          <div class="user">
            <img
              src="../../images/user_05.png"
              alt
            />
          </div>
        </router-link>
        <p>张小磊</p>
        <div class="arroww"><img src="../../images/sanjiaoxing.png" alt=""></div>
      </div>
    </div>
  </div>
</template>

<script>
import "../../css/index.css";
// import Bus from '@/assets/js/bus'
// import '../js/index.js'
export default {
  props: ["leve1", "leve2", "leve3", "leve4", "leve5", "leve6", "leve7", "leve8", "leve9", "leve10", "leve11", "leve12", "leve13", "leve14", "leve15", "leve16"],
  data() {
    return {
      activeIndex: this.$route.path
    }
    // },
    //   mounted(){
    //     var self = this
    //     Bus.$on('activeIndex2',function(defaultActive) {
    //       self.defaultActive = defaultActive
    //     })
  },
  methods: {

    handleOpen(key, keyPath) {
      //  console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      //  console.log(key, keyPath);
    },

    handleSelect(key, keyPath) {
      // if (key == "/") {
      //   this.s1 = true;
      //   this.s2 = false;

      //   this.s3 = false;
      //   this.s4 = true;
      //   this.s5 = true;
      //   this.s6 = false;

      //   return;
      // } else {

      //   this.s1 = false;
      //   this.s2 = true;
      //   this.s3 = false;
      //   this.s4 = true;
      //   this.s5 = true;
      //   this.s6 = false;
      // }


      // if (key == "/plan_yearplan") {
      //   this.s3 = true;
      //   this.s4 = false;

      //   this.s5 = true;
      //   this.s6 = false;
      //   this.s1 = false;
      //   this.s2 = true;
      //   return;
      // } else {

      //   this.s3 = false;
      //   this.s4 = true;
      //   this.s5 = true;
      //   this.s6 = false;
      //   this.s1 = false;
      //   this.s2 = true;
      // }
      // if (key == "/homework_itemlist") {
      //   this.s6 = true;
      //   this.s5 = false;
      //   this.s1 = false;
      //   this.s2 = true;
      //   this.s3 = false;
      //   this.s4 = true;
      //   return;
      // } else {
      //   this.s6 = false;
      //   this.s5 = true;
      //   this.s1 = false;
      //   this.s2 = true;
      //   this.s3 = false;
      //   this.s4 = true;
      // }
      // console.log(key, keyPath);
    },
  },
};
// $(function () {
//   $(".navgater a").click(function () {
//     var pic = './images/tab_0' + $(this).index() + '_01.png';
//     $("a .nav .n-img img").eq($(this).index()).prop("src", pic);
//     console.log($(this).index());
//     console.log(pic)
//   });
// })
</script>

<style scoped>
.el-menu-item {
  float: left !important;
}
.el-menu-item[data-v-29e8c3c6] {
  float: left !important;
  position: relative;
}
.el-menu-item a {
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  left: 0;
  top: 0;
}
.el-menu--horizontal > .el-menu-item {
  float: left !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80px !important;
  line-height: normal;
  width: 12.5%;
}
.el-menu-item span {
  margin-top: 9px;
}
.el-menu-item.is-active{
  color: #0168b7 !important;
  border-bottom: 2px solid #0168b7 !important;
}
.el-menu-item:hover{
  color: #0168b7 !important;
  border-bottom: 2px solid #0168b7 !important;
}
</style>