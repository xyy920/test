<template>
  <div class="content container">
    <div class="container3">
      <div
        class="slider-left"
        v-show="this.flag"
      >
        <userslider></userslider>
      </div>
      <div class="info">
        <div class="table_header_info">
          <div
            data-v-01f32082
            class="header_info_tag"
          >
            <p data-v-01f32082>流程审批配置</p>
          </div>
        </div>
        <div class="main_info">
          <div
            class="shousuo"
            @click="show()"
          >
            <div class="sanjiao"></div>
          </div>
          <div class="user_main_left">
            <div class="zuzhi">流程</div>
            <user-slider3></user-slider3>
          </div>
          <div class="user_main_right">
            <div class="user_main_right_right">
              <div class="jigou">
                <div class="add_main_header">
                  <div>
                    <p class="sep"></p>
                    <p style="display: inline-block;">基本信息</p>
                  </div>
                </div>
                <div class="add_main_1">
                  <table border="0">
                    <tr>
                      <td>
                        流程名称：
                        <input
                          type="text"
                          placeholder="审计通知"
                        />
                      </td>
                    </tr>
                  </table>
                </div>
                <div class="add_main_header ">
                  <div>
                    <p class="sep"></p>
                    <p style="display: inline-block;">流程审批</p>
                  </div>
                </div>
                <div class="add_main_1 bumen">
                  <table border="0">
                    <tr>
                      <th style="padding-left: 20px;">角色</th>
                      <th>批转顺序</th>
                      <th>批转别名</th>
                      <th>是否经办人</th>
                      <th>不同意则批转给谁</th>
                      <th>操作</th>
                    </tr>
                    <tr>
                      <td style="padding-left: 20px;"><select>
                          <option value="审计人员">审计人员</option>
                        </select></td>
                      <td><img
                          src="../../../images/top-bot_03.png"
                          alt=""
                        ></td>
                      <td><select>
                          <option value="审计通知">审计通知</option>
                        </select></td>
                      <td><select>
                          <option value="是">是</option>
                        </select></td>
                      <td><select>
                          <option value="请选择">请选择</option>
                        </select></td>
                      <td><img
                          src="../../../images/lsadd_03_03.png"
                          alt=""
                        ></td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<style scoped>
.jigou {
  /* border:1px solid red; */
  height: 100%;
}
.bumen select {
  width: 123px;
}
.add_main_header {
  /* border:1px solid red; */
  padding-top: 10px;
}
.add_main_1 {
  height: 70px;
}
.add_main_1 table {
  margin-top: 20px;
}
.bumen {
  height: 40px;
}
.main_info {
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 0;
  padding: 10px;
}
.user_main_right_left {
  width: 10px;
  height: 100%;
  float: left;
}
.user_main_left {
  width: 200px;
  height: 100%;
  float: left;
  border: 1px solid #e5e5e5;
  overflow-y: auto;
}
.user_main_right {
  box-sizing: border-box;
  flex: 1;
  height: 100%;
  float: left;
  position: relative;
  padding-left: 10px;
}
.user_main_right .shousuo1 {
  width: 10px;
  position: absolute;
  float: left;
  left: 0;
}
.picture1 {
  border: 1px solid #32accb !important;
  color: #32accb !important;
}
.right_info {
  background-color: #32accb !important;
}
.info_style {
  border-left: 1px solid #99d6e5 !important;
}
.sanjiao,
.sanjiao1 {
  width: 0;
  height: 0;
  overflow: hidden;
  border-width: 5px;
  border-color: transparent transparent #4591d8 transparent;
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg);
  border-style: dotted dotted solid dotted;
}
.user_main_right_right {
  width: calc(100% - 20px);
  float: left;
  flex: 1;
  height: 100%;
  overflow-y: auto;
}
.shousuo,
.shousuo1 {
  cursor: pointer;
}
.shousuo1 {
  background: #ecedf3;
}
.info {
  background: #fff;
}
.el-tree-node.is-active {
  color: #4b88fb;
}
.el-tree-node:focus,
.el-tree-node:hover {
  outline: 0;
  background-color: #ecf5ff;
}
.add_main_1 table th {
  background: #f1f6fb;
  text-align: left;
  height: 35px;
  color: #666;
  padding-left: 0;
}
.add_main_1 table td {
  text-align: left;
  padding-left: 0;
}
</style>
<script>
import "../../../css/index.css";
import userslider from '../../User/userSlider'
import userSlider3 from '../../User/userSlider3'
export default {
  components: { userslider, userSlider3 },
  data() {
    return {
      msg: "显示",
      flag: true,
    };
  },
  methods: {
    show() {
      this.flag = !this.flag;
      if (this.flag) {
        this.msg = "隐藏";
        $(".shousuo ").css("backgroundColor", "white");
        // $(".shousuo img").css("src","../../images/sanjiaoxing.png")

        $(".sanjiao").css("transform", "rotate(-90deg)");
        $(".sanjiao").css(
          "border-color",
          "transparent transparent #4591d8 transparent"
        );
      } else {
        this.msg = "显示";
        console.log("11111");
        $(".shousuo").css("backgroundColor", "#4591d8");
        $(".sanjiao").css(
          "border-color",
          "transparent transparent white transparent"
        );
        $(".sanjiao").css("transform", "rotate(90deg)");
      }
    },
  },
  mounted() {
    $(function () {
      $("#search").click(function () {
        $(".input_info").show();
        $(".black").show();
      });
      $("#close").click(function () {
        $(".input_info").hide();
        $(".black").hide();
      });
    });
  }
};
</script>