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
            <div class="right_info">
              <div class="picture1">
                <img
                  src="../../../images/tb_21.png"
                  alt=""
                >
                <p>归档</p>
              </div>
              <div class="right_1 info_style">
                <p class="large">66</p>
                <p class="small">归档阶段</p>
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
                  <p>项目列表</p>
                </div>
                <div class="header_info_btn">
                  <input
                    style="background-color: #1a91b3"
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
                          <th><input
                              type="checkbox"
                          id="choose"
                          @click="choosed"
                            >序号
                          </th>
                          <th>状态</th>
                          <th>项目名称</th>
                          <th>档案名称</th>
                          <th>项目类别</th>
                          <th>被审计单位</th>
                          <th>开始时间</th>
                          <th>结束时间</th>
                          <th>操作</th>
                        </tr>
                        <tr>
                          <td><input type="checkbox" />1</td>
                          <td>2019NSJH01</td>
                          <td>2019审计部年度计划</td>
                          <td>中铁一局集团有限公司2019年度经济责任审计</td>
                          <td>2019</td>
                          <td>中铁一局集团有限公司</td>
                          <td>2019-05-20</td>
                          <td>2019-08-20</td>
                          <td>
                            <!-- <router-link to="/homework/homework_item_archive_details" > -->
                            <img
                              src="../../../images/tb_12.png"
                              alt=""
                            ><img
                              src="../../../images/do.png"
                              alt=""
                            >
                            <!-- </router-link> -->
                          </td>
                        </tr>
                        <tr>
                          <td><input type="checkbox" />2</td>
                          <td>2019NSJH01</td>
                          <td>2019审计部年度计划</td>
                          <td>3</td>
                          <td>2019</td>
                          <td>审计部</td>
                          <td>2019-05-20</td>
                          <td>2019-08-20</td>
                          <td>
                            <!-- <router-link to="/homework/homework_item_archive_details" > -->
                           <img
                              src="../../../images/tb_12.png"
                              alt=""
                            ><img
                              src="../../../images/do.png"
                              alt=""
                            >
                            <!-- </router-link> -->
                          </td>
                        </tr>
                        <tr>
                          <td><input type="checkbox" />3</td>
                          <td>2019NSJH01</td>
                          <td>2019审计部年度计划</td>
                          <td>3</td>
                          <td>2019</td>
                          <td>审计部</td>
                          <td>2019-05-20</td>
                          <td>2019-08-20</td>
                          <td>
                           <img
                              src="../../../images/tb_12.png"
                              alt=""
                            ><img
                              src="../../../images/do.png"
                              alt=""
                            >
                          </td>
                        </tr>
                        <tr>
                          <td><input type="checkbox" />4</td>
                          <td>2019NSJH01</td>
                          <td>2019审计部年度计划</td>
                          <td>3</td>
                          <td>2019</td>
                          <td>审计部</td>
                          <td>2019-05-20</td>
                          <td>2019-08-20</td>
                          <td>
                           <img
                              src="../../../images/tb_12.png"
                              alt=""
                            ><img
                              src="../../../images/do.png"
                              alt=""
                            >
                          </td>
                        </tr>
                        <tr>
                          <td><input type="checkbox" />4</td>
                          <td>2019NSJH01</td>
                          <td>2019审计部年度计划</td>
                          <td>3</td>
                          <td>2019</td>
                          <td>审计部</td>
                          <td>2019-05-20</td>
                          <td>2019-08-20</td>
                          <td>
                            <img
                              src="../../../images/tb_12.png"
                              alt=""
                            ><img
                              src="../../../images/do.png"
                              alt=""
                            >
                          </td>
                        </tr>
                        <tr>
                          <td><input type="checkbox" />5</td>
                          <td>2019NSJH01</td>
                          <td>2019审计部年度计划</td>
                          <td>3</td>
                          <td>2019</td>
                          <td>审计部</td>
                          <td>2019-05-20</td>
                          <td>2019-08-20</td>
                          <td>
                           <img
                              src="../../../images/tb_12.png"
                              alt=""
                            ><img
                              src="../../../images/do.png"
                              alt=""
                            >
                          </td>
                        </tr>
                        <tr>
                          <td><input type="checkbox" />6</td>
                          <td>2019NSJH01</td>
                          <td>2019审计部年度计划</td>
                          <td>3</td>
                          <td>2019</td>
                          <td>审计部</td>
                          <td>2019-05-20</td>
                          <td>2019-08-20</td>
                          <td>
                           <img
                              src="../../../images/tb_12.png"
                              alt=""
                            ><img
                              src="../../../images/do.png"
                              alt=""
                            >
                          </td>
                        </tr>
                        <tr>
                          <td><input type="checkbox" />7</td>
                          <td>2019NSJH01</td>
                          <td>2019审计部年度计划</td>
                          <td>3</td>
                          <td>2019</td>
                          <td>审计部</td>
                          <td>2019-05-20</td>
                          <td>2019-08-20</td>
                          <td>
                            <img
                              src="../../../images/tb_12.png"
                              alt=""
                            ><img
                              src="../../../images/do.png"
                              alt=""
                            >
                          </td>
                        </tr>
                        <tr>
                          <td><input type="checkbox" />1</td>
                          <td>2019NSJH01</td>
                          <td>2019审计部年度计划</td>
                          <td>3</td>
                          <td>2019</td>
                          <td>审计部</td>
                          <td>2019-05-20</td>
                          <td>2019-08-20</td>
                          <td>
                           <img
                              src="../../../images/tb_12.png"
                              alt=""
                            ><img
                              src="../../../images/do.png"
                              alt=""
                            >
                          </td>
                        </tr>
                        <tr>
                          <td><input type="checkbox" />8</td>
                          <td>2019NSJH01</td>
                          <td>2019审计部年度计划</td>
                          <td>3</td>
                          <td>2019</td>
                          <td>审计部</td>
                          <td>2019-05-20</td>
                          <td>2019-08-20</td>
                          <td>
                           <img
                              src="../../../images/tb_12.png"
                              alt=""
                            ><img
                              src="../../../images/do.png"
                              alt=""
                            >
                          </td>
                        </tr>
                        <tr>
                          <td><input type="checkbox" />9</td>
                          <td>2019NSJH01</td>
                          <td>2019审计部年度计划</td>
                          <td>3</td>
                          <td>2019</td>
                          <td>审计部</td>
                          <td>2019-05-20</td>
                          <td>2019-08-20</td>
                          <td>
                            <img
                              src="../../../images/tb_12.png"
                              alt=""
                            ><img
                              src="../../../images/do.png"
                              alt=""
                            >
                          </td>
                        </tr>
                        <tr>
                          <td><input type="checkbox" />10</td>
                          <td>2019NSJH01</td>
                          <td>2019审计部年度计划</td>
                          <td>3</td>
                          <td>2019</td>
                          <td>审计部</td>
                          <td>2019-05-20</td>
                          <td>2019-08-20</td>
                          <td>
                            <img
                              src="../../../images/tb_12.png"
                              alt=""
                            ><img
                              src="../../../images/do.png"
                              alt=""
                            >
                          </td>
                        </tr>
                        <tr>
                          <td><input type="checkbox" />11</td>
                          <td>2019NSJH01</td>
                          <td>2019审计部年度计划</td>
                          <td>3</td>
                          <td>2019</td>
                          <td>审计部</td>
                          <td>2019-05-20</td>
                          <td>2019-08-20</td>
                          <td>
                           <img
                              src="../../../images/tb_12.png"
                              alt=""
                            ><img
                              src="../../../images/do.png"
                              alt=""
                            >
                          </td>
                        </tr>
                        <tr>
                          <td><input type="checkbox" />12</td>
                          <td>2019NSJH01</td>
                          <td>2019审计部年度计划</td>
                          <td>3</td>
                          <td>2019</td>
                          <td>审计部</td>
                          <td>2019-05-20</td>
                          <td>2019-08-20</td>
                          <td>
                            <img
                              src="../../../images/tb_12.png"
                              alt=""
                            ><img
                              src="../../../images/do.png"
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
  </div>
</template>

<script>
import '../../../css/index.css';
import Slider from '../shomework.vue'
import Page from '../../publi/page';
export default {
  components: { Slider, Page },
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
    },
  },
  mounted() {
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
.main .info_style {
  border-left: 1px solid #b6c2d2 !important;
}

.main .container .info .header_info .right_info{
  margin-left: 25px;
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
.picture1 {
  border: 1px solid #6c85a5 !important;
  color: #6c85a5 !important;
}

.c {
  background-color: #32accb !important;
}

.info_style {
  border-left: 1px solid #99d6e5 !important;
}

.header_info_btn {
  flex-direction: row-reverse;
}
.right_info {
  background-color: #6c85a5 !important;
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
</style>