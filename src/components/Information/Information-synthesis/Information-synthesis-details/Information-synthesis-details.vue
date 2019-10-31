<template>
  <div class="main">
    <div class="content container">
      <div class="container3">
        <div class="info">
          <div class="add_header">
            <p>报表上报</p>
            <router-link to="/information/Information_synthesis">
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
              <p class="retract1" >收起 -</p>
            </div>
            <div class="add_main_1 add_main_0">
              <table border="0">
                <tr>
                  <td><span style="margin-right: 26px;">项目类别：</span><select
                      name=""
                      id=""
                    >
                      <option value="财务收支审计">财务收支审计</option>
                    </select></td>
                  <td><span>计划实施审计项目：</span><select
                      name=""
                      style="margin-right: 30px;"
                    >
                      <option value="境内">境内</option>
                    </select>
                  </td>
                  <td><span>实际实施审计项目：</span><select
                      name=""
                      id=""
                    >
                      <option value="境内">境内</option>
                    </select></td>
                </tr>
                <tr>
                  <td><span style="margin-left: 26px;">覆盖资产：</span><input type="text" placeholder="请输入">
                  </td>
                  <td>
                    <span style="padding-left: 42px;">覆盖子企业：</span><input type="text" placeholder="请输入" style="margin-right: 30px;">
                    
                  </td>
                  <td>
                    <span>其中境外子企业数：</span><input type="text" placeholder="请输入">
                    
                  </td>
                </tr>
              </table>
            </div>
            <div class="add_main_header">
              <div>
                <p class="sep"></p>
                <p style="display: inline-block;">发现问题个数及金额</p>
              </div>
              <p class="retract2" >收起 -</p>
            </div>
            <div class="add_main_2 add_main_1">
              <table border="0">
                <tr>
                  <td><span>发现问题个数：</span><input type="text" placeholder="请输入"></td>
                  <td><span>已整改问题个数：</span><input type="text" placeholder="请输入">
                  </td>
                  <td><span>违规违纪金额：</span><input type="text" placeholder="请输入"></td>
                </tr>
                <tr>
                  <td><span>损失浪费金额：</span><input type="text" placeholder="请输入">
                  </td>
                  <td><span style="padding-left: 14px;">不良资产金额：</span><input type="text" placeholder="请输入">
                  </td>
                  <td><span>其他各项的问题金额：</span><input type="text" placeholder="请输入">
                  </td>
                </tr>
                <tr><td><span style="padding-left: 28px;">合计金额：</span><input type="text" placeholder="请输入"></td></tr>
              </table>
            </div>
            <div class="add_main_header">
              <div>
                <p class="sep"></p>
                <p style="display: inline-block;">已纠正违规金额金额</p>
              </div>
              <p class="retract3" >收起 -</p>
            </div>
            <div class="add_main_3 add_main_1">
              <table border="0">
                <tr>
                  <td><span>挽回经济损失：</span><input type="text" placeholder="请输入"></td>
                  <td><span>消退个人不当得利：</span><input type="text" placeholder="请输入">
                  </td>
                  <td><span>补缴各项税款的金额：</span><input type="text" placeholder="请输入"></td>
                </tr>
                <tr>
                  <td><span>节约各项开支：</span><input type="text" placeholder="请输入">
                  </td>
                  <td><span style="padding-left: 55px;">合计金额：</span><input type="text" placeholder="请输入">
                  </td>
                </tr>
              </table>
            </div>
            <div class="add_main_header">
              <div>
                <p class="sep"></p>
                <p style="display: inline-block;">整改建议及制度完善</p>
              </div>
              <p class="retract4" >收起 -</p>
            </div>
            <div class="add_main_4 add_main_1">
              <table border="0">
                <tr>
                  <td><span>提出整改建议：</span><div style="display: inline-block;position: relative;"><input type="text" placeholder="请输入"><i style="right: 5px;">条</i></div></td>
                  <td><span>采纳整改建议：</span><div style="display: inline-block;position: relative;"><input type="text" placeholder="请输入" style="margin-right: 91px;"><i style="right: 95px;">条</i></div>
                  </td>
                  <td><span>制度修订：</span><div style="display: inline-block;position: relative;"><input type="text" placeholder="请输入"><i>项</i></div></td>
                </tr>
                <tr>
                  <td><span style="margin-left: 14px;">制度新制定：</span><div style="display: inline-block;position: relative;"><input type="text" placeholder="请输入"><i style="right: 5px;">项</i></div></td>
                  <td><span>发现大案要案线索：</span><div style="display: inline-block;position: relative;"><input type="text" placeholder="请输入" style="    margin-right: 116px;"><i style="right: 120px;">条</i></div></td>
                </tr>
              </table>
            </div>
            <div class="add_main_header">
              <div>
                <p class="sep"></p>
                <p style="display: inline-block;">问责处理</p>
              </div>
              <p class="retract5" >收起 -</p>
            </div>
            <div class="add_main_5 add_main_1">
              <table border="0">
                <tr>
                  <td><span>给予经济处罚：</span><div style="display: inline-block;position: relative;"><input type="text" placeholder="请输入"><i style="right: 5px;">人次</i></div></td>
                  <td><span>建议给予政绩处分：</span><div style="display: inline-block;position: relative;"><input type="text" placeholder="请输入" style="margin-right: 20px;"><i style="right: 25px;">人次</i></div>
                  </td>
                  <td><span>移送司法机关处理：</span><div style="display: inline-block;position: relative;"><input type="text" placeholder="请输入"><i style="right: 5px;">人次</i></div></td>
                </tr>
              </table>
            </div>
            <div class="table_footer_info">
              <input data-v-89c2fc7e="" type="button" value="确定" style="color: #fff;margin-left: 10px; margin-right: 10px;">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../../../../css/index.css';
export default {
  data(){return{textarea: ''}},
  methods: {},
  mounted() {
    $(".retract1").click(function () {
      if ($(".add_main_0").css("display") == "none") {
        $(".add_main_0").slideDown("300");
      }else if ($(".add_main_0").css("display") == "block") {
          $(".add_main_0").slideUp("300");
      }
    });
    $(".retract2").click(function () {
      if ($(".add_main_2").css("display") == "none") {
        $(".add_main_2").slideDown("300");
      }else if ($(".add_main_2").css("display") == "block") {
          $(".add_main_2").slideUp("300");
      }
    });
    $(".retract3").click(function () {
      if ($(".add_main_3").css("display") == "none") {
        $(".add_main_3").slideDown("300");
      }else if ($(".add_main_3").css("display") == "block") {
          $(".add_main_3").slideUp("300");
      }
    });
    $(".retract4").click(function () {
      if ($(".add_main_4").css("display") == "none") {
        $(".add_main_4").slideDown("300");
      }else if ($(".add_main_4").css("display") == "block") {
          $(".add_main_4").slideUp("300");
      }
    });
    $(".retract5").click(function () {
      if ($(".add_main_5").css("display") == "none") {
        $(".add_main_5").slideDown("300");
      }else if ($(".add_main_5").css("display") == "block") {
          $(".add_main_5").slideUp("300");
      }
    });
  }
}
</script>

<style scoped>
.add_main_1 table textarea {
    width: 100%;
    height: 60px;
    border: 1px solid #ddd;
    outline: none;
    resize: none;
    padding-left: 5px;
    padding-top: 3px;
    color: #999;
}
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
.main .add_main_2{
  background: none;
}
.add_main_1,
.add_main_2,
.add_main_3,
.add_main_4,
.add_main_5 {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: #fff;
  font-size: 14px;
  padding-top: 10px;
}
/* .add_main_2 table, 
.add_main_3 table, 
.add_main_4 table, 
.add_main_5 table{
  width: 100%;
} */
.add_main_1 table td:nth-child(1) {
    text-align: left;
}

/* .add_main_1 table td,
.add_main_2 table td,
.add_main_3 table td,
.add_main_4 table td,
.add_main_5 table td {
  height: 35px;
  /* float: left; */
 /* text-align: center;
} */
table th, table td {
  font-size: 14px;
  font-weight: normal;
  text-align: left;
  color: #666666;
  border: none;
  /* border-top: 1px solid #dbdfe1; */
  padding-left: 8px;
}
.main .add_main_2 {
  width: 100%;
  flex: initial;
  height: auto;
}
.add_main_1 span{
  width: 140px;
}
.add_main_1 table td{
  position: relative;
}
.add_main_1 table i{
  position: absolute;
  font-style: normal;
  top: 3px;
  right: 5px;
}
.add_main{
  position: relative;
}
.main .table_footer_info {
    position: absolute;
    width: 100%;
    height: 50px;
    border-top: 1px solid #cad0da;
    line-height: 50px;
    text-align: right;
    background-color: #fff;
    bottom: 0;
    right: 0;
}
</style>