<template>
  <div class="main">
    <div class="content container">
      <div class="container3">
        <div class="info">
          <div class="add_header">
            <p>新增项目准备</p>
            <router-link to="/homework/homework_auditpreparation">
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
                  <td>计划编号：<input
                      type="text"
                      placeholder="2019NSJH091"
                    ></td>
                  <td>计划年度：<select
                      name=""
                      id=""
                    >
                      <option value="2019">2019</option>
                    </select>
                  </td>
                  <td>计划名称：<input
                      type="text"
                      placeholder="请输入"
                    ></td>
                </tr>
                <tr>
                  <td>审计单位：<select
                      name=""
                      id=""
                    >
                      <option value="请选择">请选择</option>
                    </select>
                  </td>
                  <td>
                    <div id="td_left">计划负责人：<select
                        name=""
                        id=""
                      >
                        <option value="请选择">请选择</option>
                      </select>
                    </div>
                  </td>

                </tr>
                <tr>
                  <td>年度审计工作目标</td>
                </tr>
                <tr>
                  <td colspan="3"><textarea>请输入</textarea></td>
                </tr>
              </table>

            </div>
            <div class="add_main_header">
              <div>
                <p class="sep"></p>
                <p style="display: inline-block;">审计项目计划明细</p>
              </div>
              <span
                id="retract2"
                @click="retract02"
              >收起 -</span>
            </div>
            <div class="add_main_2">
              <div class="add_main_2_header">
                <input
                  type="button"
                  value="新增"
                  id="add"
                >
              </div>
              <div class="add_main_2_table">
                <div class="add_main_2_table_content">
                  <table
                    border="0"
                    cellspacing="0"
                  >
                    <tbody>
                      <tr>
                        <th>序号</th>
                        <th width="20%">项目类别</th>
                        <th>计划项目名称</th>
                        <th>被审计机构名称 </th>
                        <th>计划开始时间 </th>
                        <th>计划结束时间</th>
                        <th width="10%">操作</th>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>财务收支审计</td>
                        <td>中铁一局集团有限公司2019年度财务收支审计</td>
                        <td>中铁一局集团有限公司</td>
                        <td>2019-01-01</td>
                        <td>2019-12-30</td>
                        <td>
                          <img
                            src="../../../../images/tb_12.png"
                            alt=""
                          >
                          <img
                            src="../../../../images/tb_13.png"
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
        </div>
      </div>
      <div class="bj"></div>
    </div>
  </div>
</template>

<script>
import '../../../../css/index.css';
// import Slider from '../shomework';
export default {
  // components: { Slider },
  data(){
    return{
      // activeIndex: '/homework/plan_yearplan',
    }
  },

  methods: {

    retract01() {
     
        if ($(".add_main_1").css("display") == "none") {
        $(".add_main_1").slideDown("300");
        }else if ($(".add_main_1").css("display") == "block") {
          $(".add_main_1").slideUp("300");
        }
     
    },
    retract02() {
      if ($(".add_main_2").css("display") == "none") {
        $(".add_main_2").slideDown("500");
        }else if ($(".add_main_2").css("display") == "block") {
          $(".add_main_2").slideUp("500");
        }
    },
  },
}
</script>

<style scoped>
.add_main_1 table tr:hover {
  background: none;
  /* border: 1px solid #dbdfe1;
    cursor: pointer; */
}
.el-menu-item[data-v-54ea5812] span{
  color: rgb(64, 158, 255);
}
.el-menu-item[data-v-54ea5812]{
  color: rgb(64, 158, 255);
  border-bottom-color: rgb(64, 158, 255);
}
.add_main_1, .add_main_2{
  display: block;
}
</style>