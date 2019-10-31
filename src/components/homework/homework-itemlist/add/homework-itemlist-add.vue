<template>
  <div class="main">
    <div class="content container">
      <div class="container3">
        <div class="info">
          <div class="add_header">
            <p>新增项目</p>
            <router-link to="/homework/homework_itemlist">
              <div class="add_header_btn">
                <p>返回</p>
                <img
                  src="../../../../images/back.png"
                  alt=""
                >
              </div>
            </router-link>
          </div>
          <div class="add_main">
            <div class="add_main_header">
              <div>
                <p class="sep"></p>
                <p style="display: inline-block;">基本信息</p>
              </div>
              <span
                id="retract1"
                @click="retract01"
              >收起 -</span>
            </div>
            <div class="add_main_1">
              <table border="0">
                <tr>
                  <td>项目编号：<input
                      type="text"
                      placeholder="2019NSJH091"
                    ></td>
                  <td>项目类别：<select
                      name=""
                      id=""
                    >
                      <option value="请选择">请选择</option>
                    </select>
                  </td>
                  <td>项目名称：<input
                      type="text"
                      placeholder="请输入"
                    ></td>
                </tr>
                <tr>
                  <td>所属单位：<input
                      type="text"
                      placeholder="请输入"
                    >
                  </td>
                  <td>审计期间：<input
                      type="text"
                      class="test"
                      id="data"
                      placeholder="请输入"
                    ></td>

                </tr>
              </table>
            </div>
            <div class="add_main_header">
              <div>
                <p class="sep"></p>
                <p style="display: inline-block;">项目阶段信息</p>
              </div>
              <span
                id="retract2"
                @click="retract02"
              >收起 -</span>
            </div>
            <div class="add_main_2_div">
              <div class="add_main_2_div_top">
                <div class="add_main_2left">
                  <div class="add_main_2_header_1_contebt">
                    <div class="add_main_2_header_1_content_top"><img
                        src="../../../../images/tab_08.png"
                        alt=""
                      >准备阶段</div>
                  </div>
                  <div class="add_main_2_header_1_contebt choosing">
                    <div class="add_main_2_header_1_content_top"><img
                        src="../../../../images/tab_09.png"
                        alt=""
                      >实施阶段</div>
                  </div>
                  <div class="add_main_2_header_1_contebt">
                    <div class="add_main_2_header_1_content_top"><img
                        src="../../../../images/tab_10.png"
                        alt=""
                      >报告阶段</div>
                  </div>
                  <div class="add_main_2_header_1_contebt">
                    <div class="add_main_2_header_1_content_top"><img
                        src="../../../../images/tab_12.png"
                        alt=""
                      >整改阶段</div>
                  </div>
                  <div class="add_main_2_header_1_contebt">
                    <div class="add_main_2_header_1_content_top"><img
                        src="../../../../images/tab_11.png"
                        alt=""
                      >归档阶段</div>
                  </div>
                </div>
                <div class="add_main_2">
                  <div class="add_main_2_table">
                    <div class="tab">
                      <div class="tab-content tabchoose">成员信息</div>
                      <div class="tab-content">分组信息</div>
                      <div class="tab-content">实施方案</div>
                      <div class="tab-content">补充性审计文书</div>
                      <div class="tab-content">被审计单位资料</div>
                      <div class="tab-content">审计成果组间授权</div>
                    </div>
                    <div class="add_main_2_header">
                      <input
                        style="margin-left: 10px; background-color: #1a91b3;"
                        type="button"
                        value="导出方案"
                        id="add"
                      >
                      <input
                        style="margin-left: 10px; background-color: #1c84c6;width: 120px;"
                        type="button"
                        value="检索内部审计人员"
                        id="add"
                      >
                      <input
                        style="margin-left: 10px; background-color: #1ea489;width: 120px;"
                        type="button"
                        value="增加内部审计人员"
                        id="add"
                      >
                      <input
                        style="margin-left: 10px; background-color: #1e9ca4;width: 120px;"
                        type="button"
                        value="增加外部审计人员"
                        id="add"
                      >
                      <input
                        style="margin-left: 10px; background-color: #fc5f5f;"
                        type="button"
                        value="删除"
                        id="add"
                      >
                      <input
                        style="margin-left: 10px; background-color: #4ca0e3;"
                        type="button"
                        value="修改"
                        id="add"
                      >
                    </div>
                    <div class="add_main_2_table_content">
                      <table
                        border="0"
                        cellspacing="0"
                      >
                        <tbody>
                          <tr>
                            <th>分组类别 </th>
                            <th>分组名称</th>
                            <th>项目角色</th>
                            <th>项目角色 </th>
                            <th>所属单位 </th>
                            <th>查看</th>
                          </tr>
                          <tr>
                            <td>整体</td>
                            <td>审计整体小组</td>
                            <td>项目主审</td>
                            <td>张鑫</td>
                            <td>中铁一局集团有限公司</td>
                            <td><i style="font-style: normal;color: #4071cd;margin-right: 32px;">人员信息</i><i style="font-style: normal;color: #9ecde2">人员状态</i></td>
                          </tr>
                          <tr>
                            <td>整体</td>
                            <td>审计整体小组</td>
                            <td>项目组长</td>
                            <td>张鑫</td>
                            <td>中铁一局集团有限公司</td>
                            <td><i style="font-style: normal;color: #4071cd;margin-right: 32px;">人员信息</i><i style="font-style: normal;color: #9ecde2">人员状态</i></td>
                          </tr>
                          <tr>
                            <td>整体</td>
                            <td>审计整体小组</td>
                            <td>项目组员</td>
                            <td>张鑫</td>
                            <td>中铁一局集团有限公司</td>
                            <td><i style="font-style: normal;color: #4071cd;margin-right: 32px;">人员信息</i><i style="font-style: normal;color: #9ecde2">人员状态</i></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div
                      class="add_main_2_table_content"
                      style="display: none"
                    >
                      <table
                        border="0"
                        cellspacing="0"
                      >
                        <tbody>
                          <tr>
                            <th><input
                                id="choose"
                                @click="choosed"
                                type="checkbox"
                              >方案名称</th>
                            <th>方案版本</th>
                            <th>类别名称 </th>
                            <th>子类别名称 </th>
                            <th>编制人 </th>
                            <th>编制日期 </th>
                            <th>操作</th>
                          </tr>
                          <tr>
                            <td><input type="checkbox">整体</td>
                            <td>整体</td>
                            <td>审计整体小组</td>
                            <td>项目主审</td>
                            <td>张鑫</td>
                            <td>中铁一局集团有限公司</td>
                            <td>
                              <img
                                src="../../../../images/tb_12.png"
                                alt=""
                              >
                              <img
                                class="delete"
                                src="../../../../images/tb_14.png"
                                alt=""
                              >
                            </td>
                          </tr>
                          <tr>
                            <td><input type="checkbox">整体</td>
                            <td>整体</td>
                            <td>审计整体小组</td>
                            <td>项目主审</td>
                            <td>张小磊</td>
                            <td>中铁一局集团有限公司</td>
                            <td>
                              <img
                                src="../../../../images/tb_12.png"
                                alt=""
                              >
                              <img
                                class="delete"
                                src="../../../../images/tb_14.png"
                                alt=""
                              >
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div
                      class="add_main_2_table_content"
                      style="display: none"
                    >
                      <table
                        border="0"
                        cellspacing="0"
                      >
                        <tbody>
                          <tr>
                            <th><input
                                id="choose"
                                @click="choosed"
                                type="checkbox"
                              >方案名称</th>
                            <th>方案版本</th>
                            <th>类别名称 </th>
                            <th>子类别名称 </th>
                            <th>编制人 </th>
                            <th>编制日期 </th>
                            <th>操作</th>
                          </tr>
                          <tr>
                            <td><input type="checkbox">整体</td>
                            <td>整体</td>
                            <td>审计整体小组</td>
                            <td>项目主审</td>
                            <td>张鑫</td>
                            <td>中铁一局集团有限公司</td>
                            <td>
                              <img
                                src="../../../../images/tb_12.png"
                                alt=""
                              >
                              <img
                                class="delete"
                                src="../../../../images/tb_14.png"
                                alt=""
                              >
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div
                      class="add_main_2_table_content"
                      style="display: none"
                    >
                      <table
                        border="0"
                        cellspacing="0"
                      >
                        <tbody>
                          <tr>
                            <th><input
                                id="choose"
                                @click="choosed"
                                type="checkbox"
                              >流程节点</th>
                            <th>是否必做</th>
                            <th>对应模板 </th>
                            <th>阶段性文书</th>
                            <th>操作</th>
                          </tr>
                          <tr>
                            <td><input type="checkbox">审计通知书</td>
                            <td>是</td>
                            <td>审计通知书.doc</td>
                            <td></td>
                            <td>
                              <router-link to="#"><img
                                  src="../../../../images/tb_23.png"
                                  alt=""
                                ></router-link>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div
                      class="add_main_2_table_content"
                      style="display: none"
                    >
                      <table
                        border="0"
                        cellspacing="0"
                      >
                        <tbody>
                          <tr>
                            <th><input
                                id="choose"
                                @click="choosed"
                                type="checkbox"
                              >方案名称</th>
                            <th>方案版本</th>
                            <th>类别名称 </th>
                            <th>子类别名称 </th>
                            <th>编制人 </th>
                            <th>编制日期 </th>
                            <th>操作</th>
                          </tr>
                          <tr>
                            <td><input type="checkbox">整体</td>
                            <td>整体</td>
                            <td>审计整体小组</td>
                            <td>项目主审</td>
                            <td>张鑫</td>
                            <td>中铁一局集团有限公司</td>
                            <td>
                              <img
                                src="../../../../images/tb_12.png"
                                alt=""
                              >
                              <img
                                class="delete"
                                src="../../../../images/tb_14.png"
                                alt=""
                              >
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div
                      class="add_main_2_table_content"
                      style="display: none"
                    >
                      <table
                        border="0"
                        cellspacing="0"
                      >
                        <tbody>
                          <tr>
                            <th><input
                                id="choose"
                                @click="choosed"
                                type="checkbox"
                              >方案名称</th>
                            <th>方案版本</th>
                            <th>类别名称 </th>
                            <th>子类别名称 </th>
                            <th>编制人 </th>
                            <th>编制日期 </th>
                            <th>操作</th>
                          </tr>
                          <tr>
                            <td><input type="checkbox">整体</td>
                            <td>整体</td>
                            <td>审计整体小组</td>
                            <td>项目主审</td>
                            <td>张鑫</td>
                            <td>中铁一局集团有限公司</td>
                            <td>
                              <img
                                src="../../../../images/tb_12.png"
                                alt=""
                              >
                              <img
                                class="delete"
                                src="../../../../images/tb_14.png"
                                alt=""
                              >
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div class="table_footer_info">
                <input
                  data-v-89c2fc7e=""
                  type="button"
                  value="确定"
                  id="add"
                  style="color: #fff;margin-left: 10px; margin-right: 10px;"
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../../../../css/index.css';
import Header from '../../../publi/header';
export default {
  name: "plan-yearplan-add",
  components: { Header },
  data() {
    return {
      // activeIndex: '/plan_yearplan',
    }
  },
  methods: {
    retract01() {
      if ($(".add_main_1").css("display") == "none") {
        $(".add_main_1").slideDown("300");
      } else if ($(".add_main_1").css("display") == "block") {
        $(".add_main_1").slideUp("300");
      }
    },
    retract02() {
      // if ($(".add_main_2_div_top").css("display") == "none") {
      //   $(".add_main_2_div_top").slideDown("500");
      //   }else if ($(".add_main_2_div_top").css("display") == "block") {
      //     $(".add_main_2_div_top").slideUp("500");
      //   }
      $(".add_main_2_div_top").slideToggle("slow");
    },
    choosed() {
      var isCheck = $("#choose").is(':checked');  //获得全选复选框是否选中
      $("input[type='checkbox']").each(function () {
        this.checked = isCheck;       //循环赋值给每个复选框是否选中
      });
    }
  },
  mounted() {
    layui.use('laydate', function () {
      var laydate = layui.laydate;
      //常规用法
      laydate.render({
        elem: '#data'
      });
    })
    $(".tab-content").click(function () {
      $('.add_main_2_table_content').css('display', 'none').eq($(this).index()).css('display', 'block')
      $('.tab').children().removeClass('tabchoose').eq($(this).index()).addClass('tabchoose');
    });
    $(".add_main_2_header_1_contebt").click(function () {
      $('.add_main_2_header_1_contebt').removeClass('choosing').eq($(this).index()).addClass('choosing');
    });
    $("tbody tr:even").addClass("even");
    $('.delete').click(function () { $(this).closest("tr").remove() })
  }
}
</script>

<style scoped>
.add_main_1 table tr:hover {
  background: none;
  /* border: 1px solid #dbdfe1;
    cursor: pointer; */
}
.el-menu-item[data-v-54ea5812] span {
  color: rgb(64, 158, 255);
}
.el-menu-item[data-v-54ea5812] {
  color: rgb(64, 158, 255);
  border-bottom-color: rgb(64, 158, 255);
}
.add_main_1,
.add_main_2 {
  display: block;
}
.main .add_main_2 {
  background: none;
  border: 1px solid #faa03d;
  /* margin-bottom: 10px; */
}
.main .add_main_2_header_1_contebt {
  background: #6a84a4;
  width: 97px;
  height: 33px;
  margin-bottom: 10px;
  position: relative;
}
.main .add_main_2_header_1_content_top {
  border-bottom: 0px;
  padding-bottom: 0px;
  display: inline-block;
}
.main .add_main_2_header_1_contebt:nth-child(3) {
  background: #6a84a4;
  -webkit-box-shadow: 0px 2px 3px 2px #c0c9d7;
  box-shadow: 0px 2px 3px 2px #c0c9d7;
}
.choosing {
  /* background: #fca13e !important; */
  -webkit-box-shadow: 0px 2px 3px 2px #f0d3b6 !important;
  box-shadow: 0px 2px 3px 2px #f0d3b6 !important;
  width: 117px !important;
  border-bottom-right-radius: 25px;
  border-top-right-radius: 25px;
  background-image: url("../../../../images/choosed-img.png") !important;
  background-color: #fff !important;
}
/* .cricle{
  width: 6px;
  height: 6px;
  position: absolute;
  right: 3px;
  top: 13px;
  background-color: #fff;
} */
.add_main_2_header_1_contebt:nth-child(5) {
  background: #6a84a4;
  -webkit-box-shadow: 0px 2px 3px 2px #c0c9d7;
  box-shadow: 0px 2px 3px 2px #c0c9d7;
}
</style>