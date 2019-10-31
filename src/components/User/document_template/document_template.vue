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
            <p data-v-01f32082>文书模板维护</p>
          </div>
        </div>
        <div class="tab">
          <div class="tab-content tabchoose">文书类别</div>
          <div class="tab-content">文书制作</div>
          <div class="tab-content">文书维护</div>
        </div>
        <div class="main_info">
          <div
            class="shousuo"
            @click="show()"
          >
            <div class="sanjiao"></div>
          </div>
          <div class="user_main_left">
            <div class="zuzhi">流程节点</div>
            <userSlider4></userSlider4>
          </div>
          <div class="user_main_right">
            <div class="user_main_right_right">
              <div class="jigou">
                <div class="add_main_header " style="height: 45px">
                  <div>
                    <p class="sep"></p>
                    <p style="display: inline-block;">审计通知书字段维护</p>
                  </div>
                    <input
                      class="butt"
                      type="button"
                      value="添加字段"
                    >
                </div>
                <div class="add_main_1 bumen">
                  <table border="0">
                    <tr>
                      <th style="padding-left: 10px;">字段格式</th>
                      <th>字段代码</th>
                      <th>字段名称</th>
                      <th>字段序号</th>
                      <th>操作</th>
                    </tr>
                    <tr>
                      <td style="padding-left: 10px;">Edit</td>
                      <td>OFFICE_WORKER</td>
                      <td>被审计人员</td>
                      <td>1</td>
                      <td>
                        <img
                          src="../../../images/tb_13.png"
                          alt=""
                        >
                        <img
                          class="delete"
                          src="../../../images/tb_14.png"
                          style="margin-left: 20px"
                        ></td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="main_info" style="display: none;">
          <div
            class="shousuo"
            @click="show()"
          >
            <div class="sanjiao"></div>
          </div>
          <div class="user_main_right">
            <div class="user_main_right_right">
              <div class="jigou">
                <div class="add_main_header " style="height: 45px;justify-content: initial;">
                  <input
                      class="butt"
                      type="button"
                      value="查询"
                      style="background: #1c84c6;"
                    >
                    <input
                      class="butt"
                      type="button"
                      value="文书制作"
                    >
                </div>
                <div class="add_main_1 bumen">
                  <table border="0">
                    <tr>
                      <th style="padding-left: 10px;">文书名称</th>
                      <th>保存路径</th>
                      <th>文书描述</th>
                      <th>操作</th>
                    </tr>
                    <tr>
                      <td style="padding-left: 10px;">审计方案</td>
                      <td>d:\upload_cs\write\template\finished\审计方案.doc</td>
                      <td>审计方案</td>
                      <td><img
                          class="do"
                          src="../../../images/do.png"
                        />
                        <img
                          src="../../../images/tb_13.png"
                          style="margin-left: 20px"
                        >
                        <img
                          class="delete"
                          src="../../../images/tb_14.png"
                          style="margin-left: 20px"
                        ></td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="main_info" style="display: none;">
          <div
            class="shousuo"
            @click="show()"
          >
            <div class="sanjiao"></div>
          </div>
          <div class="user_main_left">
            <div class="zuzhi">流程节点</div>
            <userSlider3></userSlider3>
          </div>
          <div class="user_main_right">
            <div class="user_main_right_right">
              <div class="jigou">
                <div class="add_main_header " style="height: 45px">
                  <div>
                    <p class="sep"></p>
                    <p style="display: inline-block;">审计通知文书维护</p>
                  </div>
                    <input
                      class="butt"
                      type="button"
                      value="添加文书"
                    >
                </div>
                <div class="add_main_1 bumen">
                  <table border="0">
                    <tr>
                      <th style="padding-left: 10px;">流程节点</th>
                      <th>文书名称</th>
                      <th>生成次数</th>
                      <th>重要程度</th>
                      <th>操作</th>
                    </tr>
                    <tr>
                      <td style="padding-left: 10px;">审计通知</td>
                      <td>审计通知书</td>
                      <td>1</td>
                      <td>重要</td>
                      <td>
                        <img
                          src="../../../images/tb_13.png"
                          alt=""
                        >
                        <img
                          class="delete"
                          src="../../../images/tb_14.png"
                          style="margin-left: 20px"
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
.butt {
  width: 66px;
  height: 26px;
  margin: 0 5px;
  border-radius: 3px;
  border: none;
  color: #fff;
  font-size: 12px;
  padding: 0 5px;
  background-color: #1e9ca4;
}
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
import userSlider4 from '../../User/userSlider4'
export default {
  components: { userslider, userSlider3, userSlider4 },
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
    $(".tab-content").click(function () {
      $('.main_info').hide().eq($(this).index()).show()
      $('.tab').children().removeClass('tabchoose').eq($(this).index()).addClass('tabchoose');
    });
    $("tbody tr:even").addClass("even");
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