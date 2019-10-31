<template>
  <div class="main">
    <div class="content container">
      <div class="container3">
        <div class="info">
          <div class="add_header">
            <p>项目详情</p>
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
                  <div class="tab-content">成员信息</div>
                  <div class="tab-content">分组信息</div>
                  <div class="tab-content tabchoose">实施方案</div>
                  <div class="tab-content">补充性审计文书</div>
                  <div class="tab-content">被审计单位资料</div>
                  <div class="tab-content">审计成果组间授权</div>
                  <div class="tab-content">审计通知书</div>
                </div>
                <div class="add_main_2_table_content" style="display: none">
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
                <div class="add_main_2_table_content" style="display: none" >
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
                    </tbody>
                  </table>
                </div>
                <div class="add_main_2_table_content">
                  <div class="add_main_2_header">
                    <input style="margin-left: 10px; background-color: #1a91b3; margin-right: 10px;" type="button" value="导出方案" id="add">
                    <input type="button" value="创建方案" id="found">
                  </div>
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
                  <div class="table_footer_info">
                    <input data-v-89c2fc7e="" type="button" value="确定" id="add" style="color: #fff;margin-left: 10px; margin-right: 10px;">
                  </div>
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
                  <div class="add_main_2_header">
                    <input style="margin-left: 10px; background-color: #1a91b3; margin-right: 10px;" type="button" value="上传" id="add">
                  </div>
                  <table border="0" cellspacing="0">
                    <tbody>
                      <tr>
                        <th>文件名称 </th>
                        <th>编制日期 </th>
                        <th>操作</th>
                      </tr>
                      <tr>
                        <td>审计通知书</td>
                        <td>2019-06-28</td>
                        <td>
                          <img src="../../../../images/tb_12.png" alt="">
                          <img class="delete" src="../../../../images/tb_14.png" alt="">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="table_footer_info">
                    <input data-v-89c2fc7e="" type="button" value="确认下发" id="add" style="color: #fff;margin-left: 10px; margin-right: 10px;">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="black"></div>
      <div class="right_add">
        <div class="right_add_header">
            <p>创建方案</p>
            <img src="../../../../images/x.png" alt="" class="close">
        </div>
        <div class="right_add_title">
          <div class="right_add_title_cl">选择模板<div class="left_sanjiao"></div></div>
          <div class="right_add_title_cr">方案生成<div class="right_sanjiao"></div></div>
        </div>
        <div class="right_add_main">
            <table border="0">
                <tr style="background: #f1f6fb;">
                  <td><input type="text" style="width: 14px;height: 14px;margin-right: 5px;background: #f1f6fb;border: none;">方案名称</td>
                  <td>方案版本 </td>
                  <td>类别名称</td>
                  <td>子类别名称</td>
                  <td>编制人</td>
                  <td>编制日期</td>
                </tr>
                <tr>
                  <td><input type="radio" name="radio">财务收支审计方案2016</td>
                  <td>2016</td>
                  <td>财务收支审计</td>
                  <td></td>
                  <td>集团审计管理员</td>
                  <td>2016-12-31</td>
                </tr>
                <tr>
                  <td><input type="radio" name="radio">财务收支审计方案2016</td>
                  <td>2018</td>
                  <td>财务收支审计</td>
                  <td></td>
                  <td>集团审计管理员</td>
                  <td>2018-12-31</td>
                </tr>
            </table>
        </div>
        <div class="table_footer_info">
          <input data-v-89c2fc7e="" type="button" value="下一步" id="next" style="margin-left: 10px; margin-right: 10px;">
          <input data-v-89c2fc7e="" type="button" value="取消" style="margin-left: 10px;background-color: #fff; border: 1px solid #4591d8;color: #4591d8; margin-right: 10px;">
        </div>
      </div>
      <div class="right_addnext">
        <div class="right_add_header">
            <p>创建方案</p>
            <img src="../../../../images/x.png" alt="" class="close">
        </div>
        <div class="right_add_title">
          <div class="right_add_title_cl">选择模板<div class="left_sanjiao"></div></div>
          <div class="right_add_title_cr" style="background: #6a84a4;">方案生成<div class="right_sanjiao"></div></div>
        </div>
        <div class="right_add_main" style="height: calc(100% - 178px)">
          <div class="right_add_mainleft">
            <div class="right_add_mainleft_tit">
              <p style="margin-left: 10px;">审计方案</p>
              <div class="right_add_mainsleft_titright" style="text-align: right">
                <input data-v-89c2fc7e="" type="button" value="批量删除" id="next" style="margin-left: 10px; margin-right: 0px;background-color: #fc5f5f;">
                <input data-v-89c2fc7e="" type="button" value="添加" style="margin-left: 8px;background-color: #4ca0e3; border: 1px solid #4591d8;margin-right: 0px;">
              </div>
            </div>
            <div class="right_add_mainslider">
              <el-menu @open="handleOpen" @close="handleClose" :default-openeds='openeds' :default-active="defaultActive">
                <el-submenu index="1">
                  <template
                    slot="title"
                    style=""
                  >
                    <span style="color: #4b88fb;width: 100%;height:100%;"><img
                      src="../../../../images/tree_03.png"
                      alt=""
                    >总体方案</span>
                  </template>
                  <el-menu-item index="1"><img
                      src="../../../../images/tree_06.png"
                      alt=""
                    ><input type="checkbox" id="1"><label for="1">会计信息</label></el-menu-item>
                  <el-menu-item index="2"><img
                      src="../../../../images/tree_06.png"
                      alt=""
                    ><input type="checkbox" id="2"><label for="2">经营业绩和经济指标完成情况</label></el-menu-item>
                  <el-menu-item index="3"><img
                      src="../../../../images/tree_06.png"
                      alt=""
                    ><input type="checkbox" id="3"><label for="3">资产保值增值</label></el-menu-item>
                  <el-menu-item index="4"><img
                      src="../../../../images/tree_06.png"
                      alt=""
                    ><input type="checkbox" id="4"><label for="4">内部控制</label></el-menu-item>
                  <el-menu-item index="5"><img
                      src="../../../../images/tree_06.png"
                      alt=""
                    ><input type="checkbox" id="5"><label for="5">重大经济决策与投资</label></el-menu-item>
                  <el-menu-item index="6"><img
                      src="../../../../images/tree_06.png"
                      alt=""
                    ><input type="checkbox" id="6"><label for="6">审计整改及历史遗贸可题处理</label></el-menu-item>
                  <el-menu-item index="7"><img
                      src="../../../../images/tree_06.png"
                      alt=""
                    ><input type="checkbox" id="7"><label for="7">基建工程</label></el-menu-item>
                </el-submenu>
              </el-menu>
            </div>
          </div>
          <!-- 总体方案 -->
          <div class="right_add_mainright-show">
            <div class="add_main_header" style="background: #fff;border-bottom: 1px solid #cccccc;color: #0168b7;">
              <div>
                <p class="sep"></p>
                <p style="display: inline-block;">总体方案</p>
              </div>
            </div>
            <table border="0">
              <tr>
                  <td style="width: 374px;"><span>模板名称：</span><input type="text" placeholder="财务收支审计方案">
                  </td>
                  <td><span>审计方案名称：</span><input type="text" placeholder="财务收支审计方案2019">
                  </td>
              </tr>
              <tr>
                  <td style="width: 374px;"><span>类别名称：</span><input type="text" placeholder="财务收支审计">
                  </td>
                  <td><span>子类别名称：</span><input type="text" placeholder="">
                  </td>
              </tr>
              <tr>
                  <td style="width: 374px;"><span>编制日期：</span><input type="text" placeholder="2017-12-31">
                  </td>
                  <td><span>编制人：<input type="text" placeholder="张小磊"></span>
                  </td>
              </tr>
              <tr>
                  <td style="width: 374px;"><span>审计开始时间：</span><input type="text" class="test test1" placeholder="请选择">
                  </td>
                  <td><span>审计结束时间：</span><input type="text" class="test test2" placeholder="请选择">
                  </td>
              </tr>
              <tr>
                  <td><span>编制依据：</span><el-input
                  type="textarea"
                  :cols="3"
                  placeholder="请输入"
                  v-model="textarea1"
                  style="height: 60px;width: 881px"
                ></el-input>
                  </td>
              </tr>
              <tr>
                  <td><span>审计目标：</span><el-input
                  type="textarea"
                  :cols="3"
                  placeholder="请输入"
                  v-model="textarea2"
                  style="height: 60px;width: 881px"
                ></el-input></td>
              </tr>
              <tr>
                  <td style=""><span>被审计单位基本情况：</span><el-input
                  type="textarea"
                  :cols="3"
                  placeholder="请输入"
                  v-model="textarea3"
                  style="height: 60px;width: 881px"
                ></el-input>
                  </td>
              </tr>
              <tr>
                  <td style=""><span>审计范围的风险评估级重要性排序：</span><el-input
                  type="textarea"
                  :cols="3"
                  placeholder="请输入"
                  v-model="textarea4"
                  style="height: 60px;width: 881px"
                ></el-input>
                  </td>
              </tr>
            </table>
          </div>
          <!-- 会计信息 -->
          <div class="right_add_mainright" style="display: none">
            <div class="add_main_header" style="background: #fff;border-bottom: 1px solid #cccccc;color: #0168b7;">
              <div>
                <p class="sep"></p>
                <p style="display: inline-block;">会计信息</p>
              </div>
            </div>
            <table border="0">
              <tr>
                  <td style="width: 374px;"><span>模板名称：</span><input type="text" placeholder="财务收支审计方案">
                  </td>
                  <td><span>审计方案名称：</span><input type="text" placeholder="财务收支审计方案2019">
                  </td>
              </tr>
              <tr>
                  <td style="width: 374px;"><span>类别名称：</span><input type="text" placeholder="财务收支审计">
                  </td>
                  <td><span>子类别名称：</span><input type="text" placeholder="">
                  </td>
              </tr>
              <tr>
                  <td style="width: 374px;"><span>编制日期：</span><input type="text" placeholder="2017-12-31">
                  </td>
                  <td><span>编制人：<input type="text" placeholder="张小磊"></span>
                  </td>
              </tr>
              <tr>
                  <td style="width: 374px;"><span>审计开始时间：</span><input type="text" class="test test5" placeholder="请选择">
                  </td>
                  <td><span>审计结束时间：</span><input type="text" class="test test6" placeholder="请选择">
                  </td>
              </tr>
              <tr>
                  <td><span>编制依据：</span><el-input
                  type="textarea"
                  :cols="3"
                  placeholder="请输入"
                  v-model="textarea1"
                  style="height: 60px;width: 881px"
                ></el-input>
                  </td>
              </tr>
              <tr>
                  <td><span>审计目标：</span><el-input
                  type="textarea"
                  :cols="3"
                  placeholder="请输入"
                  v-model="textarea2"
                  style="height: 60px;width: 881px"
                ></el-input></td>
              </tr>
              <tr>
                  <td style=""><span>被审计单位基本情况：</span><el-input
                  type="textarea"
                  :cols="3"
                  placeholder="请输入"
                  v-model="textarea3"
                  style="height: 60px;width: 881px"
                ></el-input>
                  </td>
              </tr>
              <tr>
                  <td style=""><span>审计范围的风险评估级重要性排序：</span><el-input
                  type="textarea"
                  :cols="3"
                  placeholder="请输入"
                  v-model="textarea4"
                  style="height: 60px;width: 881px"
                ></el-input>
                  </td>
              </tr>
            </table>
          </div>
          <!-- 经营业绩和经济指标完成情况 -->
          <div class="right_add_mainright" style="display: none">
            <div class="add_main_header" style="background: #fff;border-bottom: 1px solid #cccccc;color: #0168b7;">
              <div>
                <p class="sep"></p>
                <p style="display: inline-block;">经营业绩和经济指标完成情况</p>
              </div>
            </div>
            <table border="0">
              <tr>
                  <td style="width: 374px;"><span>模板名称：</span><input type="text" placeholder="财务收支审计方案">
                  </td>
                  <td><span>审计方案名称：</span><input type="text" placeholder="财务收支审计方案2019">
                  </td>
              </tr>
              <tr>
                  <td style="width: 374px;"><span>类别名称：</span><input type="text" placeholder="财务收支审计">
                  </td>
                  <td><span>子类别名称：</span><input type="text" placeholder="">
                  </td>
              </tr>
              <tr>
                  <td style="width: 374px;"><span>编制日期：</span><input type="text" placeholder="2017-12-31">
                  </td>
                  <td><span>编制人：<input type="text" placeholder="张小磊"></span>
                  </td>
              </tr>
              <tr>
                  <td style="width: 374px;"><span>审计开始时间：</span><input type="text" class="test test3" placeholder="请选择">
                  </td>
                  <td><span>审计结束时间：</span><input type="text" class="test test4" placeholder="请选择">
                  </td>
              </tr>
              <tr>
                  <td><span>编制依据：</span><el-input
                  type="textarea"
                  :cols="3"
                  placeholder="请输入"
                  v-model="textarea5"
                  style="height: 60px;width: 881px"
                ></el-input>
                  </td>
              </tr>
              <tr>
                  <td><span>审计目标：</span><el-input
                  type="textarea"
                  :cols="3"
                  placeholder="请输入"
                  v-model="textarea6"
                  style="height: 60px;width: 881px"
                ></el-input></td>
              </tr>
              <tr>
                  <td style=""><span>被审计单位基本情况：</span><el-input
                  type="textarea"
                  :cols="3"
                  placeholder="请输入"
                  v-model="textarea7"
                  style="height: 60px;width: 881px"
                ></el-input>
                  </td>
              </tr>
              <tr>
                  <td style=""><span>审计范围的风险评估级重要性排序：</span><el-input
                  type="textarea"
                  :cols="3"
                  placeholder="请输入"
                  v-model="textarea8"
                  style="height: 60px;width: 881px"
                ></el-input>
                  </td>
              </tr>
            </table>
          </div>
          <!-- 资产保值增值 -->
          <div class="right_add_mainright" style="display: none">
            <div class="add_main_header" style="background: #fff;border-bottom: 1px solid #cccccc;color: #0168b7;">
              <div>
                <p class="sep"></p>
                <p style="display: inline-block;">审计事项</p>
              </div>
            </div>
            <table border="0">
              <tr>
                  <td style="width: 374px;"><span>事项名称：</span><input type="text" placeholder="资产保值增值">
                  </td>
                  <td><span>事项编码：</span><input type="text" placeholder="3">
                  </td>
              </tr>
              <tr>
                  <td style="width: 374px;"><span>事项序号：</span><input type="text" placeholder="3">
                  </td>
                  <td><span>执行人：</span><input type="text" placeholder="张晨">
                  </td>
              </tr>
            </table>
          </div>
        </div>
        <div class="table_footer_info">
          <input data-v-89c2fc7e="" type="button" value="确认生成" id="next" style="margin-left: 10px; margin-right: 10px;color: #fff;">
          <input data-v-89c2fc7e="" type="button" value="取消" style="margin-left: 10px;background-color: #fff; border: 1px solid #4591d8;color: #4591d8; margin-right: 10px;">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../../../../css/index.css'
export default {
  data() {
    return {
      openeds: ['1'],
      defaultActive: '',
      textarea1: '',
      textarea2: '',
      textarea3: '',
      textarea4: '',
      textarea5: '',
      textarea6: '',
      textarea7: '',
      textarea8: '',
    };
  },
  methods: {
    choosed() {
      var isCheck = $("#choose").is(':checked');  //获得全选复选框是否选中
      $("input[type='checkbox']").each(function () {
        this.checked = isCheck;       //循环赋值给每个复选框是否选中
      });
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  mounted() {
    $(".tab-content").click(function () {
      $('.add_main_2_table_content').hide().eq($(this).index()).show()
      $('.tab').children().removeClass('tabchoose').eq($(this).index()).addClass('tabchoose');
    });
    $(".el-menu-item").click(function () {
      $('.right_add_mainright').hide().eq($(this).index()).show();
      $('.right_add_mainright-show').hide()
    });
    $("table tr:even").addClass("even");
    $('.delete').click(function () { $(this).closest("tr").remove() })
    $("#found").click(function () {
      $(".right_add").show();
      $(".black").show();
    });
    $("#next").click(function () {
      $('.right_add_mainright-show').show()
      $(".right_addnext").show();
      $(".black").show();
    });
    $(".close").click(function () {
      $(".right_add").hide();
      $(".right_addnext").hide();
      $(".black").hide();
      $('.right_add_mainright').hide()
    });
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
    layui.use('laydate', function () {
        var laydate = layui.laydate;
        //常规用法
        laydate.render({
            elem: '.test3'
        });
    })
    layui.use('laydate', function () {
        var laydate = layui.laydate;
        //常规用法
        laydate.render({
            elem: '.test4'
        });
    })
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
.el-submenu__title {
  height: 38px;
  line-height: 38px;
  background: #d9e8fb;
}
.el-menu-item-group__title {
  padding: 0px 0px 0px 20px;
}
.el-menu {
    border-top: solid 1px #e6e6e6;
}
.el-menu-item {
  height: 29px;
  line-height: 27px;
  padding: 0px !important;
  color: #585858;
  border-bottom: 0px;
  margin-left: 36px;
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
  font-size: 14px !important;
}
.el-submenu__title span::before { 
  content: "";
  position: absolute;
  left: 16px;
  width: 253px;
  height: 50px;
  background: #d9e8fb !important;
  opacity: 0.6;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.right_add_mainslider {
  /* width: 20%; */
  border-bottom: solid 1px #e6e6e6;
}
.main .right_add{
  width: 50%;
}
.main .right_addnext{
  width: 70%;
}
.table_footer_info{
  position: absolute;
  left: 0;
  bottom: 0;
}
.right_add_title{
  width: 100%;
  height: 36px;
  padding: 0 10px;
  margin: 21px 0;
  display: flex;
  line-height: 36px;
  justify-content: space-between;
}
.right_add_title_cr, .right_add_title_cl{
  text-align: center;
  position: relative;
  width: calc(50% - 5px);
  color: #fff;

}
.right_add_title_cl{
  background: #6a84a4;
}
.left_sanjiao, .right_sanjiao {
  width: 25px;
  height: 7px;
  /* overflow: hidden; */
  border-width: 12px;
  border-bottom-width: 9px;
  border-top-width: 3px;
  border-left-width: 18px;
  border-right-width: 18px;
  border-color: transparent transparent #6a84a4 transparent;
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  border-style: dotted dotted solid dotted;
  position: absolute;
}
.left_sanjiao{
  right: -24px;
  top: 12px;
}
.right_add_title_cr{
  background: #abb5c4;
}
.right_sanjiao {
  border-color: transparent transparent #fff transparent;
  left: -12px;
  top: 11px;
}
.right_add th {
    font-weight: bold;
    background: #f1f6fb;
    text-align: left;
    padding-left: 20px;
}
.right_add td{
  text-align: left;
}
.right_add input[type="radio"] {
  width: 14px;
  height: 14px;
  margin-right: 5px;
  display: inline-block;
  vertical-align: middle;
}
.main .right_add_main {
  height: calc(100% - 168px);
  display: flex;
}
.right_add_mainslider input{
  width: 14px;
  height: 14px;
  background: #fff;
}
.right_add_mainleft {
    width: 22%;
    border: solid 1px #e6e6e6;
}
.right_add_mainleft_tit{
  background: #f5f5f5;
  height: 42px;
    display: flex;
    align-items: center;
}
.right_add_mainleft_titright{
  background: #f5f5f5;
      margin-left: 62px;
}
.right_add_mainsleft_titright input{
  width: 66px;
  height: 26px;
  color: #fff;
  border: none;
  border-radius: 3px;
}
.right_add_mainright,
.right_add_mainright-show
{
  width: 78%;
}
.right_add_mainright textarea {
  width: 884px !important;
}
.main .right_add_main table {
  width: 100%;   
}
.main .right_add_mainright tr,
.right_add_mainright-show tr {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-bottom: 10px;
}
/* .right_add_mainright tr td:nth-child(1) {
    width: 450px;
} */
.right_add_mainright tr:nth-child(5) span,  
.right_add_mainright tr:nth-child(6) span, 
.right_add_mainright tr:nth-child(7) span, 
.right_add_mainright tr:nth-child(8) span,
.right_add_mainright-show tr:nth-child(5) span,
.right_add_mainright-show tr:nth-child(6) span,
.right_add_mainright-show tr:nth-child(7) span,
.right_add_mainright-show tr:nth-child(8) span {
  width: 140px;
  display: inline-block;
  vertical-align: top;
} 
</style>