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
        <div
          class="info"
          style="
    position: relative;
"
        >
          <div class="add_header">
            <div style=" background: #6a84a4; ">
              <p>中铁一局集团有限公司2019年度经济责任审计</p>
            </div>
            <div class="add_main_1">
              <div style="display: flex;justify-content: space-between;color: #000;padding-right: 5px;">
                <p style=" text-align: left; ">年度：<select
                    name=""
                    id=""
                  >
                    <option value="">2019</option>
                  </select></p>
                <p>期间：<select
                    name=""
                    id=""
                  >
                    <option value="">截止到8月</option>
                  </select>
                </p>
                <p>对应模板：<select
                    name=""
                    id=""
                  >
                    <option value="">请选择</option>
                  </select></p>
                <p>金额单位：<select
                    name=""
                    id=""
                  >
                    <option value="">万元</option>
                  </select></p>
              </div>
              <div style="
                display: flex;
                justify-content: space-between;
                color: #000;padding-right: 5px;">
                <p style="display: flex; flex-direction: inherit;align-items: center;width: 250px;">单位类型：
                  <label for="1" style="display: flex; flex-direction: inherit;align-items: center;"><input
                    type="radio"
                    name="choosed"
                    id="1"
                    checked='cchecked'
                    style="width:14px;height:14px;background:#91ade2;border:#91ade2;"
                  > 创建单位</label> 
                  
                  <label for="2" style="display: flex; flex-direction: inherit;align-items: center;"><input
                    type="radio"
                    id="2"
                    name="choosed"
                    style="width:14px;height:14px;background:#91ade2;border:#91ade2;"
                  >被审单位</label> 
                  
                </p>
                <p>单位名称：<select
                    name=""
                    id=""
                  >
                    <option value="">请选择</option>
                  </select></p>
                <p>单位范围：<select
                    name=""
                    id=""
                  >
                    <option value="">本单位及所有下级</option>
                  </select></p>
                <p>报表名称：<input
                    type="text"
                    placeholder="请输入"
                  ></p>
              </div>
              <p
                colspan="4"
                style="text-align: center"
              ><button style="width: 66px; height: 26px; margin: 0 5px; border-radius: 3px;border: none;color: #fff;font-size: 12px;padding: 0 5px;background-color: #1c84c6;">生成报表</button></p>

            </div>
          </div>
          <div class="add_main">
            <div
              class="shousuo"
              @click="show()"
            >
              <div class="sanjiao"></div>
            </div>
            <div class="table_info">
              <div class="table_header_info">
                <div class="header_info_tag">
                  <p>综合报表</p>
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
                          <th>序号</th>
                          <th>报表名称</th>
                          <th>年度</th>
                          <th>期间 </th>
                          <th>对应模板</th>
                          <th>金额单位</th>
                          <th>单位类型</th>
                          <th>单位名称</th>
                          <th>单位范围</th>
                          <th width="10%">操作</th>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>2019年度审计项目完成情况表</td>
                          <td>2019</td>
                          <td>截止到8月</td>
                          <td>审计项目完成情况表</td>
                          <td>万元</td>
                          <td>创建单位</td>
                          <td>中铁一局集团有限公司</td>
                          <td>本单位及所有下级</td>
                          <td>
                            <router-link to="/information/Information_synthesis_details">
                              <img
                                src="../../../images/tb_12.png"
                                alt=""
                              ></router-link>
                            <img
                              src="../../../images/do.png"
                              alt=""
                            >
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>2019年度审计人员基本情况统计表</td>
                          <td>2019</td>
                          <td>截止到8月</td>
                          <td>审计人员基本情况统计表</td>
                          <td>百分比</td>
                          <td>创建单位</td>
                          <td>中铁一局集团有限公司</td>
                          <td>本单位及所有下级</td>
                          <td>
                            <router-link to="/information/Information_synthesis_details">
                              <img
                                src="../../../images/tb_12.png"
                                alt=""
                              ></router-link>
                            <img
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../../../css/index.css';
import Slider from '../sinformation';
export default {
  components: { Slider },
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
    $("tbody tr:even").addClass("even");
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
.main .add_header {
  /* background: #6a84a4; */
  border: none;
  color: #ffffff;
  /* padding: 0 10px; */
  flex-direction: column;
  height: auto;
}
.main .add_main_1 {
  height: auto;
}
.add_header .add_main_1 select,
.add_header .add_main_1 input {
  width: 225px;
  height: 25px;
  border: 1px solid #ddd;
  padding-left: 3px;
  color: #666;
}
.main .add_main {
  padding: 0;
}
</style>