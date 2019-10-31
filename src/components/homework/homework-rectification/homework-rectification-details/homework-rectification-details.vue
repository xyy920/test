<template>
  <div class="main">
    <div class="content container">
      <div class="container3">
        <div class="info">
          <div class="add_header">
            <p>项目详情</p>
              <router-link to="/homework/homework_rectification">
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
                <p>北京分公司财务收支审计</p>
              </div>
              <span>进行中</span>
            </div>
            <div class="add_main_1">
              <div class="right_info">
                <div class="right_4 info_style">
                  <p class="large">项目编号</p>
                  <p class="small">2019NSJH01</p>
                </div>
                <div class="right_5 info_style">
                  <p class="large">项目类别</p>
                  <p class="small">经济效益审计</p>
                </div>
                <div class="right_5 info_style">
                  <p class="large">所属单位</p>
                  <p class="small">中铁一局集团有限公司</p>
                </div>
                <div class="right_2 info_style">
                  <p class="large">审计期间</p>
                  <p class="small">2019-05-20至2019-11-28 </p>
                </div>
              </div>
              
            </div>
            <div class="add_main_2">
              <div class="add_main_2_table">
                <div class="tab">
                  <div class="tab-content tabchoose">补充性审计文书</div>
                  <div class="tab-content">整改跟踪信息</div>
                </div>
                <div class="add_main_2_table_content">
                  <table border="0" cellspacing="0">
                    <tbody>
                      <tr>
                        <th>流程节点 </th>
                        <th>是否必做</th>
                        <th>对应模板 </th>
                        <th>阶段性文书 </th>
                        <th>操作</th>
                      </tr>
                      <tr>
                        <td>4.1整改阶段文档</td>
                        <td>是</td>
                        <td></td>
                        <td></td>
                        <td>
                          <img src="../../../../images/tb_23.png" alt="">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  class="add_main_2_table_content"
                  style="display: none"
                >
                  <table border="0" cellspacing="0">
                    <tbody>
                      <tr>
                        <th><input  id="choose" @click="choosed" type="checkbox">方案名称</th>
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
                          <img class="found" src="../../../../images/tb_12.png" alt="">
                          <img class="delete" src="../../../../images/tb_14.png" alt="">
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
                          <img class="found" src="../../../../images/tb_12.png" alt="">
                          <img class="delete" src="../../../../images/tb_14.png" alt="">
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
      <div class="black"></div>
      <div class="right_add">
        <div class="right_add_header">
            <p>整改跟踪</p>
            <img src="../../../../images/x.png" alt="" class="close">
        </div>
        <div class="right_add_main">
            <table border="0">
              <tr>
                  <td><span>被审计单位反馈的整改结果(最多200字) ：</span><el-input
                  type="textarea"
                  :cols="3"
                  :rows="5"
                  placeholder="请输入"
                  v-model="textarea1"
                  style="width: 790px"
                ></el-input>
                  </td>
              </tr>
              <tr>
                  <td style="width: 374px;"><span>是否追责：</span><input type="text" placeholder="请选择">
                  </td>
                  <td><span>追责方式：</span><input type="text" placeholder="请输入">
                  </td>
              </tr>
              <tr>
                  <td style="width: 374px;"><span>整改状态：</span><input type="text" placeholder="请选择">
                  </td>
                  <td><span>实际整改期限：</span><input class="test test1" type="text" placeholder="请选择" style="width: 100px;"> 至 <input class="test test2" type="text" placeholder="请选择" style="width: 100px;">
                  </td>
              </tr>
              <tr>
                  <td style="width: 374px;"><span>到期未整改原因：</span><input type="text" placeholder="请输入">
                  </td>
                  <td><span>实际检查人：<input type="text" placeholder="请输入"></span>
                  </td>
              </tr>
              <tr>
                  <td><span>被审计单位反馈的整改结果(最多200字) ：</span><el-input
                  type="textarea"
                  :cols="3"
                  :rows="5"
                  placeholder="请输入"
                  v-model="textarea2"
                  style="width: 790px"
                ></el-input>
                  </td>
              </tr>
              <tr>
                  <td><span>整改跟踪结论：</span><el-input
                  type="textarea"
                  :cols="3"
                  :rows="5"
                  placeholder="请输入"
                  v-model="textarea3"
                  style="width: 790px"
                ></el-input></td>
              </tr>
              <tr>
                  <td style="width: 225px;"><span>附件：</span><input type="button" value="上传附件" style="margin-left: 0px; margin-right: 10px;background-color: #fff; border: 1px solid #4ca0e3;color:#4ca0e3;"></td>
              </tr>
            </table>
        </div>
        <div class="table_footer_info">
          <input data-v-89c2fc7e="" type="button" value="保存" id="next" style="margin-left: 10px; margin-right: 10px;">
          <input data-v-89c2fc7e="" type="button" value="取消" style="margin-left: 10px;background-color: #fff; border: 1px solid #4591d8;color: #4591d8; margin-right: 10px;">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../../../../css/index.css';
import '../../../../fonts/iconfont.css'
import "../../../../../node_modules/element-ui/lib/theme-chalk/index.css";
export default {
  data() {
    return {
      msg: "显示",
      flag: true,
      textarea1: '',
      textarea2: '',
      textarea3: '',
    };
  },
  methods: {
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
            elem: '.test1'
        });
    })
    layui.use('laydate', function () {
        var laydate = layui.laydate;
        //常规用法
        laydate.render({
            elem: '.test2'
        });
    })
    $(".tab-content").click(function () {
      $('.add_main_2_table_content').css('display', 'none').eq($(this).index()).css('display', 'block')
      $('.tab').children().removeClass('tabchoose').eq($(this).index()).addClass('tabchoose');
    });
    $(".found").click(function () {
      $(".right_add").show();
      $(".black").show();
    });
    $(".close").click(function () {
      $(".right_add").hide();
      $(".black").hide();
    });
    $("table tr:even").addClass("even");
    $('.delete').click(function () { $(this).closest("tr").remove() })
  }
}
</script>

<style scoped>
.main .add_main_header {
  background: #6a84a4;
  border: none;
  color: #ffffff;
  padding: 0 10px;
}

.main .add_main_header span {
  margin-right: 10px;
}

.main .add_main {
  padding: 0;
  background: #ecedf3;
}

.main .add_main_1 {
  height: auto;
  border: 1px solid #6a84a4;
}

.main .add_main_2 {
  background: none;
  background-color: #fff;
  background: #fff;
  margin-top: 10px;
  border-top: 2px solid #6a84a4;
}
.main .right_add_main tr {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-bottom: 10px;
}
.right_add_main tr:nth-child(1) span,
.right_add_main tr:nth-child(5) span,  
.right_add_main tr:nth-child(6) span{
  width: 140px;
  display: inline-block;
  vertical-align: top;
} 
.right_add_main textarea {
  width: 792px !important;
}
.test{
  background-position: 80px 3px;
}
</style>