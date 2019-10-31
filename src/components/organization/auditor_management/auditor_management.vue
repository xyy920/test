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
          <div
            class="shousuo"
            @click="show()"
          >
            <div class="sanjiao"></div>
          </div>
          <div class="table_info">
            <div class="table_header_info">
              <div class="header_info_tag">
                <p>审计人员管理</p>
              </div>
              <div class="header_info_btn">
                <input
                  type="button"
                  value="查询" id="search"
                />
                <input
                  type="button"
                  value="新增"
                />
                <input
                  type="button"
                  value="导出"
                />
              </div>
            </div>
            <div class="table_main_info">
              <div class="table_content1">
                <form
                  class="layui-form"
                  action
                >
                  <table
                    border="0"
                    cellspacing="0"
                  >
                    <tbody>
                      <tr>
                        <th>
                          <input
                            type="checkbox"
                          id="choose"
                          @click="choosed"
                          />序号
                        </th>
                        <th>审计人员类别</th>
                        <th>审计人员属性</th>
                        <th>工作单位</th>
                        <th>姓名</th>
                        <th>技术职称</th>
                        <th>工作年限 </th>
                        <th>审计年限</th>
                        <th>联系方式</th>
                        <th>操作</th>
                      </tr>
                      <tr>
                        <td>
                          <input type="checkbox" />1
                        </td>
                        <td>内部人员</td>
                        <td>专职</td>
                        <td>中铁一局集团有限公司</td>
                        <td>李浩</td>
                        <td>--</td>
                        <td>5</td>
                        <td>2</td>
                        <td>138359954156</td>
                        <td>
                            <img src="../../../images/tb_12.png" alt />
                            <img
                              class="delete"
                              src="../../../images/tb_14.png"
                              alt=""
                            >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input type="checkbox" />2
                        </td>
                        <td>外部人员</td>
                        <td>兼职</td>
                        <td>中铁一局集团有限公司</td>
                        <td>李浩</td>
                        <td>--</td>
                        <td>5</td>
                        <td>2</td>
                        <td>138359954156</td>
                        <td>
                            <img src="../../../images/tb_12.png" alt />
                            <img
                              class="delete"
                              src="../../../images/tb_14.png"
                              alt=""
                            >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input type="checkbox" />3
                        </td>
                        <td>内部人员</td>
                        <td>专职</td>
                        <td>中铁一局集团有限公司</td>
                        <td>李浩</td>
                        <td>--</td>
                        <td>5</td>
                        <td>2</td>
                        <td>138359954156</td>
                        <td>
                            <img src="../../../images/tb_12.png" alt />
                            <img
                              class="delete"
                              src="../../../images/tb_14.png"
                              alt=""
                            >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input type="checkbox" />4
                        </td>
                        <td>外部人员</td>
                        <td>兼职</td>
                        <td>中铁一局集团有限公司</td>
                        <td>李浩</td>
                        <td>--</td>
                        <td>5</td>
                        <td>2</td>
                        <td>138359954156</td>
                        <td>
                            <img src="../../../images/tb_12.png" alt />
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
            <Page></Page>
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
  </div>
</template>

<script>
import '../../../css/index.css';
import Header from '../../publi/header';
import Page from '../../publi/page';
import Slider from '../sorganization';
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
    $('.delete').click(function () { $(this).closest("tr").remove() })
  }
}

</script>

<style scoped>
.main .header_info_btn {
  justify-content: flex-end;
}
.main .container3 .info{
  background: #fff;
}
</style>