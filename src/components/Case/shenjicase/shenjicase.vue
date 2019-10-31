<template>
  <div class="main">
    <div class="content container">
      <div class="container3">
        <div
          class="slider-left"
          v-show="this.flag"
        >
          <Slider></Slider>
        </div>
        <div class="info">
          <div class="header_info"></div>
          <div class="main_info">
            <div
              class="shousuo"
              @click="show()"
            >
              <div class="sanjiao"></div>
            </div>
            <div class="table_info">
              <div class="table_header_info">
                <div class="header_info_tag">
                  <p>审计机构管理</p>
                </div>
                <div class="header_info_btn">
                  <input
                    type="button"
                    value="查询"
                    id="search"
                  />
                  <input
                    type="button"
                    value="新增"
                    onclick="javascrtpt:window.location.href='#javascript'"
                  />
                  <input
                    type="button"
                    value="导入"
                  />
                  <input
                    type="button"
                    value="发布"
                  /><input
                    type="button"
                    value="等级调整" style="
    background: #4ca0e3;
"
                  />
                </div>
              </div>
              <div class="table_main_info">
                <div class="table_content1">
                  <form
                    class="layui-form"
                    action=""
                  >
                    <table
                      border="0"
                      cellspacing="0"
                    >
                      <tbody>
                        <tr>
                          <th><input
                              type="checkbox"
                          id="choose"
                          @click="choosed"
                            >序号
                          </th>
                          <th>名称</th>
                          <th>创建时间</th>
                          <th>创建单位</th>
                          <th>案例编号</th>
                          <th>类别 </th>
                          <th>操作</th>
                        </tr>
                        <tr>
                          <td><input type="checkbox" />1</td>
                          <td>中铁一局集团有限公司2019年度经济责任审计</td>
                          <td>2018-09-26</td>
                          <td>中铁一局集团有限公司</td>
                          <td>2019NSJH01</td>
                          <td>经济效益审计</td>
                          <td>
                            <img
                              src="../../../images/tb_12.png"
                              alt=""
                            >
                          </td>
                        </tr>
                        <tr>
                          <td><input type="checkbox" />2</td>
                          <td>中铁一局集团有限公司2019年度经济责任审计</td>
                          <td>2018-09-26</td>
                          <td>中铁一局集团有限公司</td>
                          <td>2019NSJH01</td>
                          <td>经济效益审计</td>
                          <td>
                            <img
                              src="../../../images/tb_12.png"
                              alt=""
                            >
                          </td>
                        </tr>
                        <tr>
                          <td><input type="checkbox" />3</td>
                          <td>中铁一局集团有限公司2019年度经济责任审计</td>
                          <td>2018-09-26</td>
                          <td>中铁一局集团有限公司</td>
                          <td>2019NSJH01</td>
                          <td>经济效益审计</td>
                          <td>
                            <img
                              src="../../../images/tb_12.png"
                              alt=""
                            >
                          </td>
                        </tr>
                        <tr>
                          <td><input type="checkbox" />4</td>
                          <td>中铁一局集团有限公司2019年度经济责任审计</td>
                          <td>2018-09-26</td>
                          <td>中铁一局集团有限公司</td>
                          <td>2019NSJH01</td>
                          <td>经济效益审计</td>
                          <td>
                            <img
                              src="../../../images/tb_12.png"
                              alt=""
                            >
                          </td>
                        </tr>
                        <tr>
                          <td><input type="checkbox" />5</td>
                          <td>中铁一局集团有限公司2019年度经济责任审计</td>
                          <td>2018-09-26</td>
                          <td>中铁一局集团有限公司</td>
                          <td>2019NSJH01</td>
                          <td>经济效益审计</td>
                          <td>
                            <img
                              src="../../../images/tb_12.png"
                              alt=""
                            >
                          </td>
                        </tr>
                        <tr>
                          <td><input type="checkbox" />6</td>
                          <td>中铁一局集团有限公司2019年度经济责任审计</td>
                          <td>2018-09-26</td>
                          <td>中铁一局集团有限公司</td>
                          <td>2019NSJH01</td>
                          <td>经济效益审计</td>
                          <td>
                            <img
                              src="../../../images/tb_12.png"
                              alt=""
                            >
                          </td>
                        </tr>
                        <tr>
                          <td><input type="checkbox" />7</td><td>中铁一局集团有限公司2019年度经济责任审计</td>
                          <td>2018-09-26</td>
                          <td>中铁一局集团有限公司</td>
                          <td>2019NSJH01</td>
                          <td>经济效益审计</td>
                          <td>
                            <img
                              src="../../../images/tb_12.png"
                              alt=""
                            >
                          </td>
                        </tr>
                        <tr>
                          <td><input type="checkbox" />8</td>
                          <td>中铁一局集团有限公司2019年度经济责任审计</td>
                          <td>2018-09-26</td>
                          <td>中铁一局集团有限公司</td>
                          <td>2019NSJH01</td>
                          <td>经济效益审计</td>
                          <td>
                            <img
                              src="../../../images/tb_12.png"
                              alt=""
                            >
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
                </div>
              </div>
              <Page></Page>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 遮罩层 -->
    <div class="black"></div>

    <!-- 输入框 -->
    <div class="input_info">
            <div class="input_info_header">
                <span>选择查询条件</span>
                <span id="close">关闭</span>
            </div>
            <div class="input_info_main">
                <table border="0">
                    <tr>
                        <td>计划编号：</td>
                        <td><input type="text" placeholder="请输入"></td>
                        <td>计划名称：</td>
                        <td><input type="text" placeholder="请输入"></td>
                    </tr>
                    <tr>
                        <td>计划年度：</td>
                        <td><input type="text" placeholder="请输入"></td>
                        <td>审计单位：</td>
                        <td><input type="text" placeholder="请输入"></td>
                    </tr>
                    <tr>
                        <td>计划状态：</td>
                        <td><select name="" id="">
                                <option value="全部">全部</option>
                            </select>
                        </td>
                        <td>计划负责人：</td>
                        <td><input type="text" placeholder="请输入"></td>
                    </tr>
                </table>
            </div>
            <div class="input_info_footer">
                <div class="btn_right">
                    <input type="button" value="重置" />
                    <input type="button" value="确定" />
                </div>
            </div>

        </div>
  <router-view></router-view>
  </div>
</template>

<script>
import '../../../css/index.css';
import Slider from '../scase';
import Page from '../../publi/page';
export default {
  components: { Slider , Page },
  data() {
    return {
      msg: "显示",
      flag: true,
    };
  },
  methods: {

    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    show() {
      this.flag = !this.flag;
      if (this.flag) {
        this.msg = "隐藏";
        $(".shousuo").css("backgroundColor", "white");
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
    choosed() {
      var isCheck = $("#choose").is(':checked');  //获得全选复选框是否选中
      $("input[type='checkbox']").each(function () {
        this.checked = isCheck;       //循环赋值给每个复选框是否选中
      });
    }
  },
  mounted() {
    $("#search").click(function () {
        $(".input_info").show();
        $(".black").show();
      });
      $("#close").click(function () {
        $(".input_info").hide();
        $(".black").hide();
      });
    $("tbody tr:even").addClass("even");
  }
}
</script>

<style scoped>
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
.main .header_info_btn{
  width: 380px;
}
.el-submenu .el-menu-item {
  min-width: 180px;
}

.el-menu-item-group__title {
  padding: 0px 0px 0px 20px;
}
.el-menu-item {
  height: 36px;
  line-height: 36px;
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
.main .main_info {
  margin-top: 0;
}
</style>