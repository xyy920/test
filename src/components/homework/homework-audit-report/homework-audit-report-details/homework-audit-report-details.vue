<template>
  <div class="main">
    <div class="content container">
      <div class="container3">
        <div class="info">
          <div class="add_header">
            <p>项目详情</p>
              <router-link to="/homework/homework_audit_report">
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
                  <div class="tab-content tabchoose">报告初稿</div>
                  <div class="tab-content">征求意见稿</div>
                  <div class="tab-content">处理意见</div>
                  <div class="tab-content">报告修订版</div>
                  <div class="tab-content">报告定稿</div>
                </div>
                <div class="add_main_2_header">
                  <input style="margin-left: 10px; background-color: #1a91b3; margin-right: 10px;" type="button" value="报告生成" id="add">
                </div>
                <div class="add_main_2_table_content">
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
                          <img src="../../../../images/tb_13.png" alt="">
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
                        <th>文件类型</th>
                        <th>文件名</th>
                        <th>创建时间</th>
                        <th>创建人</th>
                        <th>最后编辑时间</th>
                        <th>最后编排人</th>
                        <th>操作</th>
                      </tr>
                      <tr>
                        <td>审计报告初稿</td>
                        <td>财务收支审计报告.doc</td>
                        <td>2019-08-26</td>
                        <td>张小磊</td>
                        <td>2019-08-26</td>
                        <td>张小磊</td>
                        <td>
                          <img src="../../../../images/tb_13.png" alt="">
                        </td>
                      </tr>
                      <tr>
                        <td>整体</td>
                        <td>整体</td>
                        <td>审计整体小组</td>
                        <td>项目主审</td>
                        <td>张小磊</td>
                        <td>中铁一局集团有限公司</td>
                        <td>
                          <img src="../../../../images/tb_13.png" alt="">
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
                          <img src="../../../../images/tb_12.png" alt="">
                          <img class="delete" src="../../../../images/tb_14.png" alt="">
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
                          <router-link to="#" ><img
                              src="../../../../images/tb_12.png"
                              alt=""
                            ></router-link>
                          <img class="delete" src="../../../../images/tb_14.png" alt="">
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
                          <img src="../../../../images/tb_12.png" alt="">
                          <img class="delete" src="../../../../images/tb_14.png" alt="">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div> <div
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
                          <img src="../../../../images/tb_12.png" alt="">
                          <img class="delete" src="../../../../images/tb_14.png" alt="">
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
                          <img src="../../../../images/tb_12.png" alt="">
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
                          <img src="../../../../images/tb_12.png" alt="">
                          <img class="delete" src="../../../../images/tb_14.png" alt="">
                        </td>
                      </tr>
                      <tr>
                        <td><input type="checkbox">整体</td>
                        <td>整体</td>
                        <td>审计整体小组</td>
                        <td>项目主审</td>
                        <td>张鑫</td>
                        <td>中铁一局集团有限公司</td>
                        <td>
                          <img src="../../../../images/tb_12.png" alt="">
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
      <!-- <div class="right_add">
        <div class="right_add_header">
            <p>新建审计项目计划</p>
            <img src="../../../../images/x.png" alt="" id="close">
        </div>
        <div class="right_add_main">
            <table border="0">
                <tr>
                    <td><span>被审计单位名称：</span><select name="" id="">
                            <option value="请选择或输入关键字搜索">请选择或输入关键字搜索</option>
                        </select>
                    </td>
                    <td><span>上次审计年度：</span><select name="" id="">
                            <option value="请选择">请选择</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td><span>项目类别：</span><select name="" id="">
                            <option value="请选择">请选择</option>
                        </select>
                    </td>
                    <td><span>本次审计年度：</span><select name="" id="">
                            <option value="请选择">请选择</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td><span>计划月度：</span><select name="" id="">
                            <option value="请选择">请选择</option>
                        </select>
                    </td>
                    <td><span>预选项目名称 ：<input type="text" placeholder="请输入"></span>
                    </td>
                </tr>
                <tr>
                    <td colspan="2"><span>年度审计工作目标：</span><textarea></textarea></td>
                </tr>
                <tr>
                    <td><span>项目组组长：</span><select name="" id="">
                            <option value="请选择">请选择</option>
                        </select>
                    </td>
                    <td><span>项目主审 ：</span><select name="" id="">
                                <option value="请选择">请选择</option>
                            </select>
                    </td>
                </tr>
                <tr>
                    <td colspan="2"><span>立项依据：</span><textarea></textarea></td>
                </tr>
                <tr>
                    <td><span>附件：</span><input type="button" value="上传附件">
                    </td>
                </tr>
            </table>
        </div>
      </div> -->
      <div class="bj"></div>
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
    $(".tab-content").click(function () {
      $('.add_main_2_table_content').css('display', 'none').eq($(this).index()).css('display', 'block')
      $('.tab').children().removeClass('tabchoose').eq($(this).index()).addClass('tabchoose');
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