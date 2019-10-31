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
          <div class="header_info">
            <div class="left_info">
              <div class="picture1">
                <img
                  src="../../../images/tb_10.png"
                  alt=""
                >
                <p>计划</p>
              </div>
              <div class="left_1 info_style">
                <p class="large">4</p>
                <p class="small">当年计划总数</p>
              </div>
              <div class="left_2 info_style">
                <p class="large">5</p>
                <p class="small">变更计划总数</p>
              </div>
              <div class="left_3 info_style">
                <p class="large">12</p>
                <p class="small">实际计划总数</p>
              </div>
            </div>
            <div class="right_info">
              <div class="picture1">
                <img
                  src="../../../images/tb_11.png"
                  alt=""
                >
                <p>项目</p>
              </div>
              <div class="right_1 info_style">
                <p class="large">221</p>
                <p class="small">总项目数</p>
              </div>
              <div class="right_2 info_style">
                <p class="large">91%</p>
                <p class="small">计划完成率</p>
              </div>
              <div class="right_3 info_style">
                <p class="large">126</p>
                <p class="small">待执行</p>
              </div>
              <div class="right_4 info_style">
                <p class="large">90</p>
                <p class="small">正在执行</p>
              </div>
              <div class="right_5 info_style">
                <p class="large">36</p>
                <p class="small">执行完毕</p>
              </div>
            </div>
          </div>
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
                  <p>年度计划审批</p>
                </div>
                <div class="header_info_btn">
                  <input
                    type="button"
                    value="查询"
                    id="search"
                  />
                  <router-link :to="{path:'/plan/plan_yearplansp_add'}"><input
                      type="button"
                      value="新增"
                    /></router-link>
                  <input
                    type="button"
                    value="导出Excel"
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
                          <!-- onchange="selectAll()" -->
                          <th><input
                              id="choose"
                              @click="choosed"
                              type="checkbox"
                            >序号
                          </th>
                          <th>计划编号</th>
                          <th width="20%">计划名称</th>
                          <th>项目数量</th>
                          <th>计划年度</th>
                          <th>审计机构</th>
                          <th>计划状态</th>
                          <th>审计负责人</th>
                          <th width="10%">操作</th>
                        </tr>
                        <tr>
                          <td><input type="checkbox" />1</td>
                          <td>2019NSJH01</td>
                          <td>2019审计部年度计划</td>
                          <td>3</td>
                          <td>2019</td>
                          <td>总公司审计部</td>
                          <td>正在执行</td>
                          <td>郭东青</td>
                          <td>
                            <img
                              src="../../../images/tb_12.png"
                              alt=""
                            >
                            <img
                              src="../../../images/tb_13.png"
                              alt=""
                            >
                            <img
                              class="delete"
                              src="../../../images/tb_14.png"
                              alt=""
                            >
                          </td>
                        </tr>
                        <tr>
                          <td><input type="checkbox" />2</td>
                          <td>2019NSJH02</td>
                          <td>中铁一局2019审计工作计划</td>
                          <td>2</td>
                          <td>2019</td>
                          <td>中铁一局审计部</td>
                          <td>正在执行</td>
                          <td>李志</td>
                          <td>
                            <img
                              src="../../../images/tb_12.png"
                              alt=""
                            >
                            <img
                              src="../../../images/tb_13.png"
                              alt=""
                            >
                            <img
                              class="delete"
                              src="../../../images/tb_14.png"
                              alt=""
                            >
                          </td>
                        </tr>

                      </tbody>
                    </table>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="black"></div>
    <div class="input_info">
      <div class="input_info_header">
        <span>选择查询条件</span>
        <span id="close">关闭</span>
      </div>
      <div class="input_info_main">
        <table border="0">
          <tr>
            <td>计划编号：</td>
            <td><input
                type="text"
                placeholder="请输入"
              ></td>
            <td>计划名称：</td>
            <td><input
                type="text"
                placeholder="请输入"
              ></td>
          </tr>
          <tr>
            <td>计划年度：</td>
            <td><input
                type="text"
                placeholder="请输入"
              ></td>
            <td>审计单位：</td>
            <td><input
                type="text"
                placeholder="请输入"
              ></td>
          </tr>
          <tr>
            <td>计划状态：</td>
            <td><select
                name=""
                id=""
              >
                <option value="全部">全部</option>
              </select>
            </td>
            <td>计划负责人：</td>
            <td><input
                type="text"
                placeholder="请输入"
              ></td>
          </tr>
        </table>
      </div>
      <div class="input_info_footer">
        <div class="btn_right">
          <input
            type="button"
            value="重置"
          />
          <input
            type="button"
            value="确定"
          />
        </div>
      </div>
    </div>
    <router-view />
  </div>

</template>

<script>
import '../../../css/index.css';
import Slider from '../sliderplan';
import '../../../fonts/iconfont.css'
import "../../../../node_modules/element-ui/lib/theme-chalk/index.css";
export default {
  components: { Slider },
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
    $('.delete').click(function () { $(this).closest("tr").remove() })
  }
}

</script>

<style scoped>
.main .header_info_btn {
  justify-content: flex-end;
}
.sanjiao {
  width: 0;
  height: 0;
  overflow: hidden;
  border-width: 5px;
  border-color: transparent transparent #4591d8 transparent;
  transform: rotate(-90deg);
  border-style: dotted dotted solid dotted;
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
.header .el-menu-item.is-active {
  color: #0168b7 !important;
  border-bottom: 2px solid #0168b7 !important;
}
</style>

