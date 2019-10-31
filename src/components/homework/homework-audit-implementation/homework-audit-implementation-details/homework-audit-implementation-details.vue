<template>
  <div class="main">
    <div class="content container">
      <div class="container3">
        <div class="info">
          <div class="add_header">
            <p>项目详情</p>
            <router-link to="/homework/homework_audit_implementation">
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
                  <div class="tab-content tabchoose">成员信息</div>
                  <div class="tab-content">补充性审计文书</div>
                  <div class="tab-content">被审计单位资料</div>
                  <div class="tab-content">审计成果组间授权</div>
                  <div class="tab-content">组小结</div>
                  <div class="tab-content">审计实施</div>
                </div>
                <div class="add_main_2_table_content">
                  <div class="add_main_2_header">
                    <input
                      style="margin-left: 10px; background-color: #1a91b3; margin-right: 10px;"
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
                          <router-link to="#"><img
                              src="../../../../images/tb_12.png"
                              alt=""
                            ></router-link>
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
                  <div class="add_main_2_div">
                    <div class="add_main_2_div_top">
                      <div class="add_main_2left">
                        <div class="add_main_2_header_1_contebt choosing">
                          <div class="add_main_2_header_1_content_top"><img
                              src="../../../../images/tab_13.png"
                              alt=""
                            >审计分工</div>
                        </div>
                        <div class="add_main_2_header_1_contebt">
                          <div class="add_main_2_header_1_content_top"><img
                              src="../../../../images/tab_14.png"
                              alt=""
                            >我的事项</div>
                        </div>
                        <div class="add_main_2_header_1_contebt">
                          <div class="add_main_2_header_1_content_top"><img
                              src="../../../../images/tab_15.png"
                              alt=""
                            >审计疑点</div>
                        </div>
                        <div class="add_main_2_header_1_contebt">
                          <div class="add_main_2_header_1_content_top"><img
                              src="../../../../images/tab_16.png"
                              alt=""
                            >审计取证</div>
                        </div>
                        <div class="add_main_2_header_1_contebt">
                          <div class="add_main_2_header_1_content_top"><img
                              src="../../../../images/tab_08.png"
                              alt=""
                            >审计底稿</div>
                        </div>
                        <div class="add_main_2_header_1_contebt">
                          <div class="add_main_2_header_1_content_top"><img
                              src="../../../../images/tab_17.png"
                              alt=""
                            >审计问题</div>
                        </div>
                        <div class="add_main_2_header_1_contebt">
                          <div class="add_main_2_header_1_content_top"><img
                              src="../../../../images/tab_18.png"
                              alt=""
                            >审计日志</div>
                        </div>
                      </div>
                      <div class="add_main_2_1">
                        <div class="add_main_2_table">
                          <!-- 审计分工 -->
                          <div class="add_main_2_table_content_1">
                            <div class="add_main_2_header">
                              <input
                                style="margin-left: 10px; background-color: #1a91b3; margin-right: 10px;"
                                type="button"
                                value="审计分工"
                                class="add"
                              >
                              <input
                                style="margin-left: 0px; background-color: #1c84c6;"
                                type="button"
                                value="小组批量"
                                class="add"
                              >
                              <input
                                style="margin-left: 10px; background-color: #1ea489;"
                                type="button"
                                value="组员批量"
                                class="add"
                              >
                              <input
                                style="margin-left: 10px; background-color: #1e9ca4;"
                                type="button"
                                value="导出分工"
                                class="add"
                              >
                            </div>
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
                                    >事项名称</th>
                                  <th>审计小组</th>
                                  <th>审计成员</th>
                                  <th>状态</th>
                                </tr>
                                <tr>
                                  <td><input type="checkbox">A公司基本情况</td>
                                  <td></td>
                                  <td></td>
                                  <td>待分配</td>
                                </tr>
                                <tr>
                                  <td><input type="checkbox">A-1合同额预算完成情况</td>
                                  <td></td>
                                  <td></td>
                                  <td>待分配</td>
                                </tr>
                                <tr>
                                  <td><input type="checkbox">A-2区域布局</td>
                                  <td>审计整体小组</td>
                                  <td>张志勇</td>
                                  <td>待分配</td>
                                </tr>
                                <tr>
                                  <td><input type="checkbox">A-3经营布局</td>
                                  <td>审计整体小组</td>
                                  <td>张志勇</td>
                                  <td>已分配</td>
                                </tr>
                                <tr>
                                  <td><input type="checkbox">A-4经营结构</td>
                                  <td>审计整体小组</td>
                                  <td>张志勇</td>
                                  <td>已分配</td>
                                </tr>
                                <tr>
                                  <td><input type="checkbox">B-1收入指标完成情况</td>
                                  <td>审计整体小组</td>
                                  <td>谢志林</td>
                                  <td>已完成</td>
                                </tr>
                                <tr>
                                  <td><input type="checkbox">B-2利润是 吧完成情况</td>
                                  <td>审计整体小组</td>
                                  <td>谢志林</td>
                                  <td>已完成</td>
                                </tr>
                                <tr>
                                  <td><input type="checkbox">B-3核实消化前任不良资产及潜亏，结转前任潜盈情况</td>
                                  <td>审计整体小组</td>
                                  <td>谢志林</td>
                                  <td>已完成</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <!-- 我的事项 -->
                          <div
                            class="add_main_2_table_content_1"
                            style="display: none;"
                          >
                            <div
                              class="add_main_2_table_content_1con"
                              style="display: flex;display: flex;justify-content: space-between;height: 64vh;"
                            >
                              <div class="add_main_2_table_content_1left">
                                <table
                                  border="0"
                                  cellspacing="0"
                                >
                                  <tbody>
                                    <tr>
                                      <th style="width: 168px;">事顶名称</th>
                                      <th style="width: 100px;">审计小组</th>
                                    </tr>
                                    <tr>
                                      <td style="color: #0168b7;">应收账款</td>
                                      <td style="color: #0168b7;">审计整体小组</td>
                                    </tr>
                                    <tr>
                                      <td>合并报表</td>
                                      <td>审计整体小组</td>
                                    </tr>
                                    <tr>
                                      <td>现金</td>
                                      <td>审计整体小组</td>
                                    </tr>
                                    <tr>
                                      <td>其他应收款</td>
                                      <td>审计整体小组</td>
                                    </tr>
                                    <tr>
                                      <td>银行存款,</td>
                                      <td>审计整体小组</td>
                                    </tr>
                                    <tr>
                                      <td>预付账款</td>
                                      <td>审计整体小组</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div class="add_main_2_table_content_1right">
                                <div
                                  class="add_main_header"
                                  style="background: #fff;border-bottom: 1px solid #cccccc;color: #0168b7;"
                                >
                                  <div>
                                    <p class="sep"></p>
                                    <p style="display: inline-block;">应收账款</p>
                                  </div>
                                </div>
                                <table
                                  border="0"
                                  cellspacing="0"
                                >
                                  <tbody>
                                    <tr>
                                      <th>目标</th>
                                      <th>审计步骤和方法</th>
                                      <th style="width: 65px;">执行人</th>
                                      <th style="width: 68px;">底稿</th>
                                      <th style="width: 65px;">疑点</th>
                                      <th style="width: 68px;">审计问题</th>
                                      <th style="width: 85px;">分项小结</th>
                                    </tr>
                                    <tr>
                                      <td style="width: 185px;">1.应收账款的存在性、完整性；2.内控制度是否有效得到执行；3.信用审批是否责权分离；4.是否可以回收。</td>
                                      <td style="width: 366px;">1、核对报表与总账、明细账的数据，确认是否相符；2、通过账龄对应收账款进行分析性复核；核实应收账款账龄与债务耽误状况，分析其合理性；分析应收账款的额构成，审核有无超过当年的应收款项；3、核对坏账核销的程序及核销原因；查看坏账核销的管理层、税务部门等的审批手续是否完备；追查至此项应账款发生时的合同及审批，有无人为原因造成发生坏账的情况；4、查看应收账款账龄分析表，是否存在未计提坏账准备的应收账款；核实全额提取坏账准备的原因；5、查看本期收回以前年度已核销坏账情况，并跟踪查看相应的财务处理，确认是否正确。</td>
                                      <td>张小磊</td>
                                      <td>执行 (0)</td>
                                      <td>执行 (0)</td>
                                      <td>执行 (0)</td>
                                      <td style="text-align: center;padding-left: 0;">
                                        <img
                                          id="found"
                                          src="../../../../images/tb_13.png"
                                          alt=""
                                        >
                                        <img
                                          src="../../../../images/tb_12.png"
                                          alt=""
                                        >
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                          <!-- 审计疑点 -->
                          <div
                            class="add_main_2_table_content_1"
                            style="display: none"
                          >
                            <div class="add_main_2_header">
                              <input
                                style="margin-left: 10px; background-color: #1ea489;"
                                type="button"
                                value="增加"
                                class="add_yd"
                              >
                              <input
                                style="margin-left: 10px; background-color: #4ca0e3;"
                                type="button"
                                value="修改"
                                class="add"
                              >
                              <input
                                style="margin-left: 10px; background-color: #fc5f5f;"
                                type="button"
                                value="删除"
                                class="add"
                              >
                              <input
                                style="margin-left: 10px; background-color: #1a91b3;"
                                type="button"
                                value="处理"
                                class="add"
                              >
                              <input
                                style="margin-left: 10px; background-color: #1e9ca4;"
                                type="button"
                                value="恢复"
                                class="add"
                              >
                              <input
                                style="margin-left: 10px; background-color: #1c84c6;"
                                type="button"
                                value="查询"
                                class="add"
                              >
                            </div>
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
                                    >疑点名称</th>
                                  <th>疑点状态</th>
                                  <th>疑点编码</th>
                                  <th>被审计单位</th>
                                  <th>审计项</th>
                                  <th>撰写人</th>
                                  <th>附件</th>
                                  <th>关联底稿</th>
                                  <th>提交日期</th>
                                </tr>
                                <tr>
                                  <td><input type="checkbox">整体</td>
                                  <td>整体</td>
                                  <td>审计整体小组</td>
                                  <td>项目主审</td>
                                  <td>张鑫</td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <!-- 审计取证 -->
                          <div
                            class="add_main_2_table_content_1"
                            style="display: none"
                          >
                            <div class="add_main_2_header">
                              <input
                                style="margin-left: 10px; background-color: #1ea489;"
                                type="button"
                                value="增加"
                                class="add_qz"
                              >
                              <input
                                style="margin-left: 10px; background-color: #4ca0e3;"
                                type="button"
                                value="修改"
                                class="add"
                              >
                              <input
                                style="margin-left: 10px; background-color: #fc5f5f;"
                                type="button"
                                value="删除"
                                class="add"
                              >
                              <input
                                style="margin-left: 10px; background-color: #1a91b3;"
                                type="button"
                                value="处理"
                                class="add"
                              >
                              <input
                                style="margin-left: 10px; background-color: #1e9ca4;"
                                type="button"
                                value="恢复"
                                class="add"
                              >
                              <input
                                style="margin-left: 10px; background-color: #1c84c6;"
                                type="button"
                                value="查询"
                                class="add"
                              >
                            </div>
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
                                    >取证单编码</th>
                                  <th>项目名称</th>
                                  <th>被审计单位</th>
                                  <th>取证事项</th>
                                  <th>定性法律依据</th>
                                  <th>审计人员</th>
                                  <th>取证时间</th>
                                  <th>附件</th>
                                  <th>证据提供单位</th>
                                  <th>日期</th>
                                </tr>
                                <tr>
                                  <td><input type="checkbox">JY16516</td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <!-- 审计底稿 -->
                          <div
                            class="add_main_2_table_content_1"
                            style="display: none"
                          >
                            <div class="add_main_2_header">
                              <input
                                style="margin-left: 10px; background-color: #1ea489;"
                                type="button"
                                value="增加"
                                class="add_dg"
                              >
                              <input
                                style="margin-left: 10px; background-color: #4ca0e3;"
                                type="button"
                                value="修改"
                                class="add"
                              >
                              <input
                                style="margin-left: 10px; background-color: #fc5f5f;"
                                type="button"
                                value="删除"
                                class="add"
                              >
                              <input
                                style="margin-left: 10px; background-color: #1c84c6;"
                                type="button"
                                value="查询"
                                class="add"
                              >
                            </div>
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
                                    >项目名称</th>
                                  <th>方案名称</th>
                                  <th>被审计单位名称</th>
                                  <th>审计事项</th>
                                  <th>工作底稿编号</th>
                                  <th>索引号</th>
                                  <th>审计人</th>
                                  <th>审计时间</th>
                                </tr>
                                <tr>
                                  <td><input type="checkbox">整体</td>
                                  <td>审计整体小组</td>
                                  <td>项目主审</td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td>张鑫</td>
                                  <td></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <!-- 审计问题 -->
                          <div
                            class="add_main_2_table_content_1"
                            style="display: none"
                          >
                            <div class="add_main_2_header">
                              <input
                                style="margin-left: 10px; background-color: #1c84c6;"
                                type="button"
                                value="查询"
                                class="add_wt"
                              >
                            </div>
                            <table
                              border="0"
                              cellspacing="0"
                            >
                              <tbody>
                                <tr>
                                  <th>底稿编号</th>
                                  <th>分组</th>
                                  <th>问题类别</th>
                                  <th>问题子类别</th>
                                  <th>问题点</th>
                                  <th>发生数</th>
                                  <th>统计单位</th>
                                  <th>问题定性</th>
                                  <th>问题描述</th>
                                  <th>问题发现人</th>
                                </tr>
                                <tr>
                                  <td>DGBH0001</td>
                                  <td>华北一组</td>
                                  <td>信息化管理</td>
                                  <td>其他</td>
                                  <td>其他</td>
                                  <td>0</td>
                                  <td>万元</td>
                                  <td>一般关注</td>
                                  <td>个别项目录入采集平台信息不及时</td>
                                  <td>郑新华</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <!-- 审计日志 -->
                          <div
                            class="add_main_2_table_content_1"
                            style="display: none"
                          >
                            <div class="add_main_2_header">
                              <input
                                style="margin-left: 10px; background-color: #1c84c6;"
                                type="button"
                                value="查询"
                                class="add_rz"
                              >
                            </div>
                            <table
                              border="0"
                              cellspacing="0"
                            >
                              <tbody>
                                <tr>
                                  <th>用户</th>
                                  <th>动作 </th>
                                  <th>详情 </th>
                                  <th>时间 </th>
                                </tr>
                                <tr>
                                  <td>张鑫</td>
                                  <td>补充审计文书</td>
                                  <td>补充审计文书</td>
                                  <td>2019-08-26</td>
                                </tr>
                                <tr>
                                  <td>张鑫</td>
                                  <td>补充审计文书</td>
                                  <td>补充审计文书</td>
                                  <td>2019-08-26</td>
                                </tr>
                                <tr>
                                  <td>张鑫</td>
                                  <td>补充审计文书</td>
                                  <td>补充审计文书</td>
                                  <td>2019-08-26</td>
                                </tr>
                                <tr>
                                  <td>张鑫</td>
                                  <td>补充审计文书</td>
                                  <td>补充审计文书</td>
                                  <td>2019-08-26</td>
                                </tr>
                              </tbody>
                            </table>
                            <div
                              data-v-182030fe=""
                              class="table_footer_info"
                            >
                              <div
                                data-v-182030fe=""
                                class="footer_info_btn"
                              ><input
                                  data-v-182030fe=""
                                  type="button"
                                  value="上一页"
                                  class="page"
                                > <input
                                  data-v-182030fe=""
                                  type="button"
                                  value="1"
                                  class="index active"
                                > <input
                                  data-v-182030fe=""
                                  type="button"
                                  value="2"
                                  class="index"
                                > <input
                                  data-v-182030fe=""
                                  type="button"
                                  value="3"
                                  class="index"
                                > <input
                                  data-v-182030fe=""
                                  type="button"
                                  value="4"
                                  class="index"
                                > <input
                                  data-v-182030fe=""
                                  type="button"
                                  value="..."
                                  class="index"
                                > <input
                                  data-v-182030fe=""
                                  type="button"
                                  value="下一页"
                                  class="page"
                                ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="black"></div>
      <!-- 分项小结 -->
      <div class="right_add">
        <div class="right_add_header">
          <p>分项小结</p>
          <img
            src="../../../../images/x.png"
            alt=""
            class="close"
          >
        </div>
        <div class="right_add_main">

          <table border="0">
            <tr>
              <td><span>审计评价结果：</span>
                <el-input
                  type="textarea"
                  placeholder="请输入"
                  v-model="textarea1"
                  :rows="7"
                ></el-input>
              </td>
            </tr>
            <tr>
              <td><span>审计评价类型：</span>
                <el-input
                  type="textarea"
                  :cols="3"
                  placeholder="请输入"
                  v-model="textarea2"
                ></el-input>
              </td>
            </tr>
            <tr>
              <td><span>审计复核意见: </span>
                <el-input
                  type="textarea"
                  :cols="3"
                  placeholder="请输入"
                  v-model="textarea3"
                ></el-input>
              </td>
            </tr>
          </table>

        </div>
        <div class="table_footer_info">
          <input
            data-v-89c2fc7e=""
            type="button"
            value="保存"
            id="add"
            style="margin-left: 10px; margin-right: 10px;background-color: #4ca0e3"
          >
          <input
            data-v-89c2fc7e=""
            type="button"
            value="导出"
            id="add"
            style="margin-left: 10px; margin-right: 10px;background-color: #1a91b3; "
          >
        </div>
      </div>
      <!-- 增加疑点 -->
      <div class="right_add_yd">
        <div class="right_add_header">
          <p>增加疑点</p>
          <img
            src="../../../../images/x.png"
            alt=""
            class="close"
          >
        </div>
        <div class="right_add_main">
          <table border="0">
            <tr>
              <td><span>疑点名称：</span><input
                  type="text"
                  placeholder="请输入"
                >
              </td>
              <td><span>状态：</span><input
                  type="text"
                  placeholder="未处理"
                >
              </td>
            </tr>
            <tr>
              <td><span>审计小组：</span><select
                  name=""
                  id=""
                >
                  <option value="审计整体小组">审计整体小组</option>
                </select>
              </td>
              <td><span>被审计单位：</span><select
                  name=""
                  id=""
                >
                  <option value="北京分公司">北京分公司</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><span>疑点编码：</span><input
                  type="text"
                  placeholder="YDBM001"
                >
              </td>
              <td><span>撰写人：<input
                    type="text"
                    placeholder="张小磊"
                  ></span>
              </td>
            </tr>
            <tr>
              <td colspan="2"><span>审计事项：</span><select
                  name=""
                  id=""
                >
                  <option value="请选择">请选择</option>
                </select></td>
              <td><span>提交日期：</span><input
                  type="text"
                  placeholder="2019-08-26"
                >
              </td>
            </tr>
            <tr>
              <td rowspan="2"><span>关联底稿：</span><input
                  type="text"
                  placeholder=""
                  style="width: 859px;"
                >
              </td>
            </tr>
            <tr>
              <td><span>疑点内容：</span>
                <el-input
                  type="textarea"
                  :cols="3"
                  placeholder="请输入"
                  v-model="textarea4"
                  style="height: 60px;width: 859px"
                ></el-input>
              </td>
            </tr>
            <tr>
              <td><span>法规制度：</span><input
                  data-v-89c2fc7e=""
                  type="button"
                  value="查看法规制度"
                  id="add"
                  style="margin-left: 0px; margin-right: 10px;background-color: #fff; border: 1px solid #4ca0e3;color:#4ca0e3;width: 120px;"
                ></td>
            </tr>
            <tr>
              <td style="width: 937px;"><span></span>
                <el-input
                  type="textarea"
                  :cols="3"
                  placeholder="请输入"
                  v-model="textarea5"
                  style="height: 60px;width: 856px"
                ></el-input>
              </td>
            </tr>
            <tr>
              <td style="width: 154px;"><span>附件：</span><input
                  type="button"
                  value="上传附件"
                  style="margin-left: 0px; margin-right: 10px;background-color: #fff; border: 1px solid #4ca0e3;color:#4ca0e3;"
                ></td>
            </tr>
          </table>
        </div>
        <div class="table_footer_info">
          <input
            data-v-89c2fc7e=""
            type="button"
            value="保存"
            id="add"
            style="margin-left: 10px; margin-right: 10px;background-color: #4ca0e3"
          >
          <input
            data-v-89c2fc7e=""
            type="button"
            value="取消"
            id="add"
            style="margin-left: 10px; margin-right: 10px;background-color: #fff; border: 1px solid #4ca0e3;color:#4ca0e3"
          >
        </div>
      </div>
      <!-- 审计底稿 -->
      <div class="right_add_dg">
        <div class="right_add_header">
          <p>增加审计底稿</p>
          <img
            src="../../../../images/x.png"
            alt=""
            class="close"
          >
        </div>
        <div class="right_add_main">
          <table border="0">
            <tr>
              <td><span>工作底稿编号：</span><input
                  type="text"
                  placeholder="DG001"
                >
              </td>
              <td><span>索引号：</span><input
                  type="text"
                  placeholder="DG001"
                >
              </td>
            </tr>
            <tr>
              <td><span>被审计单位: </span><select
                  name=""
                  id=""
                >
                  <option value="北京分公司">北京分公司</option>
                </select>
              </td>
              <td><span>审计事项：</span><select
                  name=""
                  id=""
                >
                  <option value="">资产变动情况</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><span>审计人：</span><input
                  type="text"
                  placeholder="张璐"
                >
              </td>
              <td><span>审计时间：</span><input
                  type="text"
                  placeholder="2019-08-26"
                >
              </td>
            </tr>
            <tr>
              <td><span>审计过程：</span>
                <el-input
                  type="textarea"
                  :cols="3"
                  placeholder="请输入"
                  v-model="textarea6"
                  style="height: 60px;width: 831px"
                ></el-input>
              </td>
            </tr>
            <tr>
              <td><span>问题描述：</span>
                <el-input
                  type="textarea"
                  :cols="3"
                  placeholder="请输入"
                  v-model="textarea7"
                  style="height: 60px;width: 831px"
                ></el-input>
              </td>
            </tr>
            <tr>
              <td><span>定性依据：</span>
                <el-input
                  type="textarea"
                  :cols="3"
                  placeholder="财务字【2019】39号"
                  v-model="textarea8"
                  style="height: 60px;width: 831px"
                ></el-input>
              </td>
            </tr>
            <tr>
              <td><span>定性：</span>
                <el-input
                  type="textarea"
                  :cols="3"
                  placeholder="请输入"
                  v-model="textarea9"
                  style="height: 60px;width: 831px"
                ></el-input>
              </td>
            </tr>
            <tr>
              <td><span>问题涉及金额：</span>
                <el-input
                  type="textarea"
                  :cols="3"
                  placeholder="请输入"
                  v-model="textarea10"
                  style="height: 60px;width: 831px"
                ></el-input>
              </td>
            </tr>
            <tr>
              <td><span>责任界定：</span>
                <el-input
                  type="textarea"
                  :cols="3"
                  placeholder="请输入"
                  v-model="textarea11"
                  style="height: 60px;width: 831px"
                ></el-input>
              </td>
            </tr>
            <tr>
              <td><span>整改建议：</span>
                <el-input
                  type="textarea"
                  :cols="3"
                  placeholder="请输入"
                  v-model="textarea12"
                  style="height: 60px;width: 831px"
                ></el-input>
              </td>
            </tr>
          </table>
        </div>
        <div class="table_footer_info">
          <input
            data-v-89c2fc7e=""
            type="button"
            value="确认生成"
            id="add"
            style="margin-left: 10px; margin-right: 10px;background-color: #4ca0e3"
          >
          <input
            data-v-89c2fc7e=""
            type="button"
            value="取消"
            id="add"
            style="margin-left: 10px; margin-right: 10px;background-color: #fff; border: 1px solid #4ca0e3;color:#4ca0e3"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../../../../css/index.css';
import '../../../../fonts/iconfont.css'
// import "../../../../../node_modules/element-ui/lib/theme-chalk/index.css";
export default {
  data() {
    return {
      msg: "显示",
      flag: true,
      textarea1: '',
      textarea2: '',
      textarea3: '',
      textarea4: '',
      textarea5: '',
      textarea6: '',
      textarea7: '',
      textarea8: '',
      textarea9: '',
      textarea10: '',
      textarea11: '',
      textarea12: '',
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
      $('.add_main_2_table_content').css('display', 'none').eq($(this).index()).css('display', 'block');
      $('.tab').children().removeClass('tabchoose').eq($(this).index()).addClass('tabchoose');
    });
    $(".add_main_2_header_1_contebt").click(function () {
      $('.add_main_2_header_1_contebt').removeClass('choosing').eq($(this).index()).addClass('choosing');
      $('.add_main_2_table_content_1').css('display', 'none').eq($(this).index()).css('display', 'block')
    });
    $("#found").click(function () {
      $(".right_add").show();
      $(".black").show();
    });
    $(".add_yd").click(function () {
      $(".right_add_yd").show();
      $(".black").show();
    });
    $(".add_dg").click(function () {
      $(".right_add_dg").show();
      $(".black").show();
    });
    $(".close").click(function () {
      $(".right_add").hide();
      $(".right_add_yd").hide();
      $(".right_add_dg").hide();
      $(".black").hide();
    });
    $("table tr:even").addClass("even");
    $('.delete').click(function () { $(this).st("tr").remove() })
  }
}
</script>

<style scoped>
.el-textarea {
  width: 89%;
}
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

.main .add_main_2_1 {
  background: none;
  border: 1px solid #faa03d;
  /* margin-bottom: 10px; */
  position: relative;
}

.main .add_main_2 {
  background: none;
  background-color: #fff;
  background: #fff;
  margin-top: 10px;
  border-top: 2px solid #6a84a4;
}
.main .add_main_2_div {
  height: 64vh;
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

.add_main_2_table_content_1left {
  width: 25%;
  margin: 10px;
  border: 1px solid #c5d0dc;
  padding-right: 0px;
}
.main .add_main_2_table_content_1left table {
  margin: -1px 0px 0 -1px;
  width: calc(100% + 2px);
  height: auto;
}
.main .add_main_2_table_content_1left table th,
.main .add_main_2_table_content_1left table td,
.add_main_2_table_content_1right table th,
.add_main_2_table_content_1right table td {
  border: 1px solid #c5d0dc;
}
.main .add_main_2_table_content_1left table td:nth-child(2) {
  border-right: 0px;
}
.add_main_2_table_content_1right {
  width: 75%;
  padding: 10px;
  padding-left: 0;
  /* height: 100%; */
}
.main .add_main_2_table_content_1right table {
  height: auto;
  margin-top: 10px;
}
.main .add_main_2_table_content_1right table th {
  padding-left: 0;
  text-align: center;
}
.main .add_main_2_table_content_1right table td {
  text-align: left;
  padding-left: 8px;
}
.right_add_main span {
  vertical-align: top;
  display: inline-block;
}
.right_add_main table textarea {
  width: 88%;
}
.main .table_footer_info {
  position: absolute;
  bottom: 0;
  left: 0;
}
.main .table_footer_info input {
  color: #fff;
}

.main .right_add_yd tr,
.main .right_add_dg tr {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.right_add_dg textarea {
  width: 834px !important;
}
.right_add_dg span {
  width: 98px !important;
}
.main .right_add_main table td {
  text-align: right;
  line-height: 5;
}
.add_main_2_header_1_contebt:nth-child(5) {
  background: #6a84a4;
  -webkit-box-shadow: 0px 2px 3px 2px #c0c9d7;
  box-shadow: 0px 2px 3px 2px #c0c9d7;
}
</style>