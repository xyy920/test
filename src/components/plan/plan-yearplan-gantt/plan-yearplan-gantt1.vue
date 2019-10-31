<template>
  <div class="main">
    <Header
      :leve1=false
      :leve2=true
      :leve3=true
      :leve4=false
      :leve5=false
      :leve6=true
      :leve7=false
      :leve8=true
      :leve9=false
      :leve10=true
      :leve11=false
      :leve12=true
      :leve13=false
      :leve14=true
      :leve15=false
      :leve16=true
    ></Header>
    <!--v-if="isRouterAlive" -->
    <div class="content container">
      <div class="container3">
        <div
          class="slider-left" v-show="this.flag" >
          <div class="slider">
            <div class="slider-nav">
              <el-menu
                router
                @open="handleOpen"
                @close="handleClose"
                :default-openeds='openeds'
                :default-active="defaultActive"
              >
                <el-submenu index="1">
                  <template
                    slot="title"
                    style=""
                  >
                    <span style="color: #4b88fb;width: 100%;height:100%;">审计项目计划管理</span>
                  </template>
                  <el-menu-item index="/plan_yearplan"><img
                      src="../../../images/xuxian.png"
                      alt=""
                    >年度审计计划制定</el-menu-item>
                  <el-menu-item index="/plan_yearplansp"><img
                      src="../../../images/xuxian.png"
                      alt=""
                    >年度审计计划审批</el-menu-item>
                  <el-menu-item index=""><img
                      src="../../../images/xuxian.png"
                      alt=""
                    >计划临时调整</el-menu-item>
                  <el-menu-item index=""><img
                      src="../../../images/xuxian.png"
                      alt=""
                    >审计任务分配调整</el-menu-item>
                  <el-menu-item index="/plan_yearplan_gantt"><img
                      src="../../../images/xuxian.png"
                      alt=""
                    >年度审计计划监控</el-menu-item>
                </el-submenu>
                <!-- <el-submenu index="3">
              <template slot="title">
                <span>审计作业</span>
              </template>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <span>归档管理</span>
              </template>
              <el-menu-item index="1-1">年度审计计划制定</el-menu-item>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <span>现场审计作业系统</span>
              </template>
              <el-menu-item index="1-1">年度审计计划制定</el-menu-item>
            </el-submenu>
            <el-submenu index="6">
              <template slot="title">
                <span>成果管理</span>
              </template>
              <el-menu-item index="1-1">年度审计计划制定</el-menu-item>
            </el-submenu> -->
              </el-menu>
            </div>
          </div>
        </div>
        <div class="info">
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
                  <p>年度计划甘特图</p>
                </div>
                <div class="header_info_btn">
                  <input
                    type="button"
                    value="查询"
                    id="search"
                  />
                  <input
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
                          <!-- onchange="selectAll()" -->
                          <th rowspan="2">序号</th>
                          <th rowspan="2">审计单位</th>
                          <th rowspan="2">项目名称</th>
                          <th rowspan="2">项目编号</th>
                          <th rowspan="2">项目类别</th>
                          <th colspan="3">1月</th>
                          <th colspan="3">2月</th>
                          <th colspan="3">3月</th>
                          <th colspan="3">4月</th>
                          <th colspan="3">5月</th>
                          <th colspan="3">6月</th>
                          <th colspan="3">7月</th>
                          <th colspan="3">8月</th>
                          <th colspan="3">9月</th>
                          <th colspan="3">10月</th>
                          <th colspan="3">11月</th>
                          <th colspan="3">12月</th>
                        </tr>
                        <tr style="background: #f1f6fb;">
                          <td class="mtop">上旬</td>
                          <td class="mcen">中旬</td>
                          <td class="mbot">下旬</td>
                          <td class="mtop">上旬</td>
                          <td class="mcen">中旬</td>
                          <td class="mbot">下旬</td>
                          <td class="mtop">上旬</td>
                          <td class="mcen">中旬</td>
                          <td class="mbot">下旬</td>
                          <td class="mtop">上旬</td>
                          <td class="mcen">中旬</td>
                          <td class="mbot">下旬</td>
                          <td class="mtop">上旬</td>
                          <td class="mcen">中旬</td>
                          <td class="mbot">下旬</td>
                          <td class="mtop">上旬</td>
                          <td class="mcen">中旬</td>
                          <td class="mbot">下旬</td>
                          <td class="mtop">上旬</td>
                          <td class="mcen">中旬</td>
                          <td class="mbot">下旬</td>
                          <td class="mtop">上旬</td>
                          <td class="mcen">中旬</td>
                          <td class="mbot">下旬</td>
                          <td class="mtop">上旬</td>
                          <td class="mcen">中旬</td>
                          <td class="mbot">下旬</td>
                          <td class="mtop">上旬</td>
                          <td class="mcen">中旬</td>
                          <td class="mbot">下旬</td>
                          <td class="mtop">上旬</td>
                          <td class="mcen">中旬</td>
                          <td class="mbot">下旬</td>
                          <td class="mtop">上旬</td>
                          <td class="mcen">中旬</td>
                          <td class="mbot">下旬</td>
                        </tr>
                        <tr class="one">
                          <td
                            rowspan="5"
                            style="background: #fff;"
                          >1</td>
                          <td
                            rowspan="5"
                            style="background: #fff;"
                          >审计部</td>
                          <td>中铁一局2019年度财务收支审计</td>
                          <td>SJ01298</td>
                          <td>财务收支审计</td>
                          <td class="mtop1"></td>
                          <td class="mcen1"></td>
                          <td class="mbot1"></td>
                          <td class="mtop2"></td>
                          <td class="mcen2"></td>
                          <td class="mbot2"></td>
                          <td class="mtop3"></td>
                          <td class="mcen3"></td>
                          <td class="mbot3"></td>
                          <td class="mtop4"></td>
                          <td class="mcen4"></td>
                          <td class="mbot4"></td>
                          <td class="mtop5"></td>
                          <td class="mcen5"></td>
                          <td class="mbot5"></td>
                          <td class="mtop6"></td>
                          <td class="mcen6"></td>
                          <td class="mbot6"></td>
                          <td class="mtop7"></td>
                          <td class="mcen7"></td>
                          <td class="mbot7"></td>
                          <td class="mtop8"></td>
                          <td class="mcen8"></td>
                          <td class="mbot8"></td>
                          <td class="mtop9"></td>
                          <td class="mcen9"></td>
                          <td class="mbot9"></td>
                          <td class="mtop10"></td>
                          <td class="mcen10"></td>
                          <td class="mbot10"></td>
                          <td class="mtop11"></td>
                          <td class="mcen11"></td>
                          <td class="mbot11"></td>
                          <td class="mtop12"></td>
                          <td class="mcen12"></td>
                          <td class="mbot12"></td>
                        </tr>
                        <tr class="two">
                          <td>北京分公司经济责任审计</td>
                          <td>SJ01298</td>
                          <td>经济责任审计</td>
                          <td class="mtop1"></td>
                          <td class="mcen1"></td>
                          <td class="mbot1"></td>
                          <td class="mtop2"></td>
                          <td class="mcen2"></td>
                          <td class="mbot2"></td>
                          <td class="mtop3"></td>
                          <td class="mcen3"></td>
                          <td class="mbot3"></td>
                          <td class="mtop4"></td>
                          <td class="mcen4"></td>
                          <td class="mbot4"></td>
                          <td class="mtop5"></td>
                          <td class="mcen5"></td>
                          <td class="mbot5"></td>
                          <td class="mtop6"></td>
                          <td class="mcen6"></td>
                          <td class="mbot6"></td>
                          <td class="mtop7"></td>
                          <td class="mcen7"></td>
                          <td class="mbot7"></td>
                          <td class="mtop8"></td>
                          <td class="mcen8"></td>
                          <td class="mbot8"></td>
                          <td class="mtop9"></td>
                          <td class="mcen9"></td>
                          <td class="mbot9"></td>
                          <td class="mtop10"></td>
                          <td class="mcen10"></td>
                          <td class="mbot10"></td>
                          <td class="mtop11"></td>
                          <td class="mcen11"></td>
                          <td class="mbot11"></td>
                          <td class="mtop12"></td>
                          <td class="mcen12"></td>
                          <td class="mbot12"></td>
                        </tr>
                        <tr class="three">
                          <td>中铁一局2019年度财务收支审计</td>
                          <td>SJ01298</td>
                          <td>经济责任审计</td>
                          <td class="mtop1"></td>
                          <td class="mcen1"></td>
                          <td class="mbot1"></td>
                          <td class="mtop2"></td>
                          <td class="mcen2"></td>
                          <td class="mbot2"></td>
                          <td class="mtop3"></td>
                          <td class="mcen3"></td>
                          <td class="mbot3"></td>
                          <td class="mtop4"></td>
                          <td class="mcen4"></td>
                          <td class="mbot4"></td>
                          <td class="mtop5"></td>
                          <td class="mcen5"></td>
                          <td class="mbot5"></td>
                          <td class="mtop6"></td>
                          <td class="mcen6"></td>
                          <td class="mbot6"></td>
                          <td class="mtop7"></td>
                          <td class="mcen7"></td>
                          <td class="mbot7"></td>
                          <td class="mtop8"></td>
                          <td class="mcen8"></td>
                          <td class="mbot8"></td>
                          <td class="mtop9"></td>
                          <td class="mcen9"></td>
                          <td class="mbot9"></td>
                          <td class="mtop10"></td>
                          <td class="mcen10"></td>
                          <td class="mbot10"></td>
                          <td class="mtop11"></td>
                          <td class="mcen11"></td>
                          <td class="mbot11"></td>
                          <td class="mtop12"></td>
                          <td class="mcen12"></td>
                          <td class="mbot12"></td>
                        </tr>
                        <tr class="four">
                          <td>北京分公司经济责任审计</td>
                          <td>SJ01298</td>
                          <td>财务收支审计</td>
                          <td class="mtop1"></td>
                          <td class="mcen1"></td>
                          <td class="mbot1"></td>
                          <td class="mtop2"></td>
                          <td class="mcen2"></td>
                          <td class="mbot2"></td>
                          <td class="mtop3"></td>
                          <td class="mcen3"></td>
                          <td class="mbot3"></td>
                          <td class="mtop4"></td>
                          <td class="mcen4"></td>
                          <td class="mbot4"></td>
                          <td class="mtop5"></td>
                          <td class="mcen5"></td>
                          <td class="mbot5"></td>
                          <td class="mtop6"></td>
                          <td class="mcen6"></td>
                          <td class="mbot6"></td>
                          <td class="mtop7"></td>
                          <td class="mcen7"></td>
                          <td class="mbot7"></td>
                          <td class="mtop8"></td>
                          <td class="mcen8"></td>
                          <td class="mbot8"></td>
                          <td class="mtop9"></td>
                          <td class="mcen9"></td>
                          <td class="mbot9"></td>
                          <td class="mtop10"></td>
                          <td class="mcen10"></td>
                          <td class="mbot10"></td>
                          <td class="mtop11"></td>
                          <td class="mcen11"></td>
                          <td class="mbot11"></td>
                          <td class="mtop12"></td>
                          <td class="mcen12"></td>
                          <td class="mbot12"></td>
                        </tr>
                        <tr class="five">
                          <td>中铁一局2019年度财务收支审计</td>
                          <td>SJ01298</td>
                          <td>经济责任审计</td>
                          <td class="mtop1"></td>
                          <td class="mcen1"></td>
                          <td class="mbot1"></td>
                          <td class="mtop2"></td>
                          <td class="mcen2"></td>
                          <td class="mbot2"></td>
                          <td class="mtop3"></td>
                          <td class="mcen3"></td>
                          <td class="mbot3"></td>
                          <td class="mtop4"></td>
                          <td class="mcen4"></td>
                          <td class="mbot4"></td>
                          <td class="mtop5"></td>
                          <td class="mcen5"></td>
                          <td class="mbot5"></td>
                          <td class="mtop6"></td>
                          <td class="mcen6"></td>
                          <td class="mbot6"></td>
                          <td class="mtop7"></td>
                          <td class="mcen7"></td>
                          <td class="mbot7"></td>
                          <td class="mtop8"></td>
                          <td class="mcen8"></td>
                          <td class="mbot8"></td>
                          <td class="mtop9"></td>
                          <td class="mcen9"></td>
                          <td class="mbot9"></td>
                          <td class="mtop10"></td>
                          <td class="mcen10"></td>
                          <td class="mbot10"></td>
                          <td class="mtop11"></td>
                          <td class="mcen11"></td>
                          <td class="mbot11"></td>
                          <td class="mtop12"></td>
                          <td class="mcen12"></td>
                          <td class="mbot12"></td>
                        </tr>
                        <tr class="six">
                          <td
                            rowspan="3"
                            style="background: #fff;"
                          >2</td>
                          <td
                            rowspan="3"
                            style="background: #fff;"
                          >总公司审计部</td>
                          <td>北京分公司经济责任审计</td>
                          <td>SJ01298</td>
                          <td>经济责任审计</td>
                          <td class="mtop1"></td>
                          <td class="mcen1"></td>
                          <td class="mbot1"></td>
                          <td class="mtop2"></td>
                          <td class="mcen2"></td>
                          <td class="mbot2"></td>
                          <td class="mtop3"></td>
                          <td class="mcen3"></td>
                          <td class="mbot3"></td>
                          <td class="mtop4"></td>
                          <td class="mcen4"></td>
                          <td class="mbot4"></td>
                          <td class="mtop5"></td>
                          <td class="mcen5"></td>
                          <td class="mbot5"></td>
                          <td class="mtop6"></td>
                          <td class="mcen6"></td>
                          <td class="mbot6"></td>
                          <td class="mtop7"></td>
                          <td class="mcen7"></td>
                          <td class="mbot7"></td>
                          <td class="mtop8"></td>
                          <td class="mcen8"></td>
                          <td class="mbot8"></td>
                          <td class="mtop9"></td>
                          <td class="mcen9"></td>
                          <td class="mbot9"></td>
                          <td class="mtop10"></td>
                          <td class="mcen10"></td>
                          <td class="mbot10"></td>
                          <td class="mtop11"></td>
                          <td class="mcen11"></td>
                          <td class="mbot11"></td>
                          <td class="mtop12"></td>
                          <td class="mcen12"></td>
                          <td class="mbot12"></td>
                        </tr>
                        <tr class="seven">
                          <td>中铁一局2019年度财务收支审计</td>
                          <td>SJ01298</td>
                          <td>财务收支审计</td>
                          <td class="mtop1"></td>
                          <td class="mcen1"></td>
                          <td class="mbot1"></td>
                          <td class="mtop2"></td>
                          <td class="mcen2"></td>
                          <td class="mbot2"></td>
                          <td class="mtop3"></td>
                          <td class="mcen3"></td>
                          <td class="mbot3"></td>
                          <td class="mtop4"></td>
                          <td class="mcen4"></td>
                          <td class="mbot4"></td>
                          <td class="mtop5"></td>
                          <td class="mcen5"></td>
                          <td class="mbot5"></td>
                          <td class="mtop6"></td>
                          <td class="mcen6"></td>
                          <td class="mbot6"></td>
                          <td class="mtop7"></td>
                          <td class="mcen7"></td>
                          <td class="mbot7"></td>
                          <td class="mtop8"></td>
                          <td class="mcen8"></td>
                          <td class="mbot8"></td>
                          <td class="mtop9"></td>
                          <td class="mcen9"></td>
                          <td class="mbot9"></td>
                          <td class="mtop10"></td>
                          <td class="mcen10"></td>
                          <td class="mbot10"></td>
                          <td class="mtop11"></td>
                          <td class="mcen11"></td>
                          <td class="mbot11"></td>
                          <td class="mtop12"></td>
                          <td class="mcen12"></td>
                          <td class="mbot12"></td>
                        </tr>
                        <tr class="eight">
                          <td>北京分公司经济责任审计</td>
                          <td>SJ01298</td>
                          <td>经济责任审计</td>
                          <td class="mtop1"></td>
                          <td class="mcen1"></td>
                          <td class="mbot1"></td>
                          <td class="mtop2"></td>
                          <td class="mcen2"></td>
                          <td class="mbot2"></td>
                          <td class="mtop3"></td>
                          <td class="mcen3"></td>
                          <td class="mbot3"></td>
                          <td class="mtop4"></td>
                          <td class="mcen4"></td>
                          <td class="mbot4"></td>
                          <td class="mtop5"></td>
                          <td class="mcen5"></td>
                          <td class="mbot5"></td>
                          <td class="mtop6"></td>
                          <td class="mcen6"></td>
                          <td class="mbot6"></td>
                          <td class="mtop7"></td>
                          <td class="mcen7"></td>
                          <td class="mbot7"></td>
                          <td class="mtop8"></td>
                          <td class="mcen8"></td>
                          <td class="mbot8"></td>
                          <td class="mtop9"></td>
                          <td class="mcen9"></td>
                          <td class="mbot9"></td>
                          <td class="mtop10"></td>
                          <td class="mcen10"></td>
                          <td class="mbot10"></td>
                          <td class="mtop11"></td>
                          <td class="mcen11"></td>
                          <td class="mbot11"></td>
                          <td class="mtop12"></td>
                          <td class="mcen12"></td>
                          <td class="mbot12"></td>
                        </tr>
                        <tr class="nine">
                          <td
                            rowspan="6"
                            style="background: #fff;"
                          >3</td>
                          <td
                            rowspan="6"
                            style="background: #fff;"
                          >集团审计部</td>
                          <td>中铁一局2019年度财务收支审计</td>
                          <td>SJ01298</td>
                          <td>财务收支审计</td>
                          <td class="mtop1"></td>
                          <td class="mcen1"></td>
                          <td class="mbot1"></td>
                          <td class="mtop2"></td>
                          <td class="mcen2"></td>
                          <td class="mbot2"></td>
                          <td class="mtop3"></td>
                          <td class="mcen3"></td>
                          <td class="mbot3"></td>
                          <td class="mtop4"></td>
                          <td class="mcen4"></td>
                          <td class="mbot4"></td>
                          <td class="mtop5"></td>
                          <td class="mcen5"></td>
                          <td class="mbot5"></td>
                          <td class="mtop6"></td>
                          <td class="mcen6"></td>
                          <td class="mbot6"></td>
                          <td class="mtop7"></td>
                          <td class="mcen7"></td>
                          <td class="mbot7"></td>
                          <td class="mtop8"></td>
                          <td class="mcen8"></td>
                          <td class="mbot8"></td>
                          <td class="mtop9"></td>
                          <td class="mcen9"></td>
                          <td class="mbot9"></td>
                          <td class="mtop10"></td>
                          <td class="mcen10"></td>
                          <td class="mbot10"></td>
                          <td class="mtop11"></td>
                          <td class="mcen11"></td>
                          <td class="mbot11"></td>
                          <td class="mtop12"></td>
                          <td class="mcen12"></td>
                          <td class="mbot12"></td>
                        </tr>
                        <tr class="ten">
                          <td>北京分公司经济责任审计</td>
                          <td>SJ01298</td>
                          <td>经济责任审计</td>
                          <td class="mtop1"></td>
                          <td class="mcen1"></td>
                          <td class="mbot1"></td>
                          <td class="mtop2"></td>
                          <td class="mcen2"></td>
                          <td class="mbot2"></td>
                          <td class="mtop3"></td>
                          <td class="mcen3"></td>
                          <td class="mbot3"></td>
                          <td class="mtop4"></td>
                          <td class="mcen4"></td>
                          <td class="mbot4"></td>
                          <td class="mtop5"></td>
                          <td class="mcen5"></td>
                          <td class="mbot5"></td>
                          <td class="mtop6"></td>
                          <td class="mcen6"></td>
                          <td class="mbot6"></td>
                          <td class="mtop7"></td>
                          <td class="mcen7"></td>
                          <td class="mbot7"></td>
                          <td class="mtop8"></td>
                          <td class="mcen8"></td>
                          <td class="mbot8"></td>
                          <td class="mtop9"></td>
                          <td class="mcen9"></td>
                          <td class="mbot9"></td>
                          <td class="mtop10"></td>
                          <td class="mcen10"></td>
                          <td class="mbot10"></td>
                          <td class="mtop11"></td>
                          <td class="mcen11"></td>
                          <td class="mbot11"></td>
                          <td class="mtop12"></td>
                          <td class="mcen12"></td>
                          <td class="mbot12"></td>
                        </tr>
                        <tr class="eleven">
                          <td>中铁一局2019年度财务收支审计</td>
                          <td>SJ01298</td>
                          <td>财务收支审计</td>
                          <td class="mtop1"></td>
                          <td class="mcen1"></td>
                          <td class="mbot1"></td>
                          <td class="mtop2"></td>
                          <td class="mcen2"></td>
                          <td class="mbot2"></td>
                          <td class="mtop3"></td>
                          <td class="mcen3"></td>
                          <td class="mbot3"></td>
                          <td class="mtop4"></td>
                          <td class="mcen4"></td>
                          <td class="mbot4"></td>
                          <td class="mtop5"></td>
                          <td class="mcen5"></td>
                          <td class="mbot5"></td>
                          <td class="mtop6"></td>
                          <td class="mcen6"></td>
                          <td class="mbot6"></td>
                          <td class="mtop7"></td>
                          <td class="mcen7"></td>
                          <td class="mbot7"></td>
                          <td class="mtop8"></td>
                          <td class="mcen8"></td>
                          <td class="mbot8"></td>
                          <td class="mtop9"></td>
                          <td class="mcen9"></td>
                          <td class="mbot9"></td>
                          <td class="mtop10"></td>
                          <td class="mcen10"></td>
                          <td class="mbot10"></td>
                          <td class="mtop11"></td>
                          <td class="mcen11"></td>
                          <td class="mbot11"></td>
                          <td class="mtop12"></td>
                          <td class="mcen12"></td>
                          <td class="mbot12"></td>
                        </tr>
                        <tr class="twelve">
                          <td>北京分公司经济责任审计</td>
                          <td>SJ01298</td>
                          <td>经济责任审计</td>
                          <td class="mtop1"></td>
                          <td class="mcen1"></td>
                          <td class="mbot1"></td>
                          <td class="mtop2"></td>
                          <td class="mcen2"></td>
                          <td class="mbot2"></td>
                          <td class="mtop3"></td>
                          <td class="mcen3"></td>
                          <td class="mbot3"></td>
                          <td class="mtop4"></td>
                          <td class="mcen4"></td>
                          <td class="mbot4"></td>
                          <td class="mtop5"></td>
                          <td class="mcen5"></td>
                          <td class="mbot5"></td>
                          <td class="mtop6"></td>
                          <td class="mcen6"></td>
                          <td class="mbot6"></td>
                          <td class="mtop7"></td>
                          <td class="mcen7"></td>
                          <td class="mbot7"></td>
                          <td class="mtop8"></td>
                          <td class="mcen8"></td>
                          <td class="mbot8"></td>
                          <td class="mtop9"></td>
                          <td class="mcen9"></td>
                          <td class="mbot9"></td>
                          <td class="mtop10"></td>
                          <td class="mcen10"></td>
                          <td class="mbot10"></td>
                          <td class="mtop11"></td>
                          <td class="mcen11"></td>
                          <td class="mbot11"></td>
                          <td class="mtop12"></td>
                          <td class="mcen12"></td>
                          <td class="mbot12"></td>
                        </tr>
                        <tr class="thirteen">
                          <td>中铁一局2019年度财务收支审计</td>
                          <td>SJ01298</td>
                          <td>财务收支审计</td>
                          <td class="mtop1"></td>
                          <td class="mcen1"></td>
                          <td class="mbot1"></td>
                          <td class="mtop2"></td>
                          <td class="mcen2"></td>
                          <td class="mbot2"></td>
                          <td class="mtop3"></td>
                          <td class="mcen3"></td>
                          <td class="mbot3"></td>
                          <td class="mtop4"></td>
                          <td class="mcen4"></td>
                          <td class="mbot4"></td>
                          <td class="mtop5"></td>
                          <td class="mcen5"></td>
                          <td class="mbot5"></td>
                          <td class="mtop6"></td>
                          <td class="mcen6"></td>
                          <td class="mbot6"></td>
                          <td class="mtop7"></td>
                          <td class="mcen7"></td>
                          <td class="mbot7"></td>
                          <td class="mtop8"></td>
                          <td class="mcen8"></td>
                          <td class="mbot8"></td>
                          <td class="mtop9"></td>
                          <td class="mcen9"></td>
                          <td class="mbot9"></td>
                          <td class="mtop10"></td>
                          <td class="mcen10"></td>
                          <td class="mbot10"></td>
                          <td class="mtop11"></td>
                          <td class="mcen11"></td>
                          <td class="mbot11"></td>
                          <td class="mtop12"></td>
                          <td class="mcen12"></td>
                          <td class="mbot12"></td>
                        </tr>
                        <tr class="fourteen">
                          <td>北京分公司经济责任审计</td>
                          <td>SJ01298</td>
                          <td>经济责任审计</td>
                          <td class="mtop1"></td>
                          <td class="mcen1"></td>
                          <td class="mbot1"></td>
                          <td class="mtop2"></td>
                          <td class="mcen2"></td>
                          <td class="mbot2"></td>
                          <td class="mtop3"></td>
                          <td class="mcen3"></td>
                          <td class="mbot3"></td>
                          <td class="mtop4"></td>
                          <td class="mcen4"></td>
                          <td class="mbot4"></td>
                          <td class="mtop5"></td>
                          <td class="mcen5"></td>
                          <td class="mbot5"></td>
                          <td class="mtop6"></td>
                          <td class="mcen6"></td>
                          <td class="mbot6"></td>
                          <td class="mtop7"></td>
                          <td class="mcen7"></td>
                          <td class="mbot7"></td>
                          <td class="mtop8"></td>
                          <td class="mcen8"></td>
                          <td class="mbot8"></td>
                          <td class="mtop9"></td>
                          <td class="mcen9"></td>
                          <td class="mbot9"></td>
                          <td class="mtop10"></td>
                          <td class="mcen10"></td>
                          <td class="mbot10"></td>
                          <td class="mtop11"></td>
                          <td class="mcen11"></td>
                          <td class="mbot11"></td>
                          <td class="mtop12"></td>
                          <td class="mcen12"></td>
                          <td class="mbot12"></td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
                </div>
              </div>
              <div class="table_footer_info">
                <div class="footer_info_btn">
                  <input
                    class="page"
                    type="button"
                    value="上一页"
                  />
                  <input
                    class="index active"
                    type="button"
                    value="1"
                  />
                  <input
                    class="index"
                    type="button"
                    value="2"
                  />
                  <input
                    class="index"
                    type="button"
                    value="3"
                  />
                  <input
                    class="index"
                    type="button"
                    value="4"
                  />
                  <input
                    class="index"
                    type="button"
                    value="..."
                  />
                  <input
                    class="page"
                    type="button"
                    value="下一页"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="black"></div>
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
    <router-view />
  </div>

</template>

<script>
import '../../../css/index.css';
import Header from '../../publi/header';
import Slider from '../../publi/slider';
export default {
  components: { Header, Slider },
  methods: {
  },
  // name: 'py',
  data() {
    return {
      msg: "显示",
      flag: true,
      openeds: ['1'],
      defaultActive: '/plan_yearplan_gantt',
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
.main .header_info_btn {
  width: 380px;
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
.table_content1 table th,
table td {
  border: 1px solid #dbdfe1;
}
.table_content1 {
  overflow-x: auto;
}
.table_content1 table {
  width: 180%;
  height: 75vh;
}
.table_footer_info {
  border-top: none;
}
::-webkit-scrollbar {
  border-radius: 20px;
  background: #fafafa;
  height: 8px;
  margin-left: 0px;
}

/*定义滚动条轨道 内阴影+圆角*/

::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: #fafafa;
  height: 8px;
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #a0c5e8;
  height: 3px;
  /* box-shadow: inset 0 0 0px rgba(240, 240, 240, .5); */
}
.header_info_tag {
  width: 142px;
}
.table_content1 table th {
  text-align: center;
}
.table_content1 table tr:nth-child(2) td {
  text-align: center;
}
/* .one .mtop1::before,
.one .mbot1::before,
.one .mcen1::before,
.one .mtop2::before,
.one .mbot2::before,
.one .mcen2::before,
.one .mtop3::before,
.one .mbot3::before,
.one .mcen3::before,
.one .mtop4::before,
.one .mcen4::before,
.two .mcen2::before,
.two .mbot2::before,
.two .mtop3::before,
.two .mcen3::before,
.two .mbot3::before,
.two .mtop4::before,
.two .mcen4::before,
.four .mtop4::before,
.four .mcen4::before,
.four .mbot4::before,
.four .mtop4::before,
.four .mcen4::before,
.four .mbot4::before,
.four .mtop4::before,
.four .mcen4::before,
.four .mbot4::before,
.four .mtop4::before,
.four .mcen4::before,
.four .mbot4::before */
.mtop1::before,
.mcen1::before,
.mbot1::before,
.mtop2::before,
.mcen2::before,
.mbot2::before,
.mtop3::before,
.mcen3::before,
.mbot3::before,
.mtop4::before,
.mcen4::before,
.mbot4::before,
.mtop5::before,
.mcen5::before,
.mbot5::before,
.mtop6::before,
.mcen6::before,
.mbot6::before,
.mtop7::before,
.mcen7::before,
.mbot7::before,
.mtop8::before,
.mcen8::before,
.mbot8::before,
.mtop9::before,
.mcen9::before,
.mbot9::before,
.mtop10::before,
.mcen10::before,
.mbot10::before,
.mtop11::before,
.mcen11::before,
.mbot11::before,
.mtop12::before,
.mcen12::before,
.mbot12::before,
.mtop13::before,
.mcen13::before,
.mbot13::before,
.mtop14::before,
.mcen14::before,
.mbot14::before {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  display: inline-block !important;
  vertical-align: middle;
  font-size: 12px;
  color: #fff;
  height: 30px !important;
}
.one .mtop1::before{ 
  content: '';
  height: 22px;
  width: 689px;
  display: block;
  background: #5495c8;
  position: absolute;
  left: 0;
  top: 6px;
  height: 30px;
}
.table_content1 td{
  position: relative;
}
.two .mcen1::before{ 
  content: '';
  height: 22px;
  width: 689px;
  display: block;
  position: absolute;
  background: #5495c8;
  left: 35px;
  top: 6px;
}
.three .mtop1::before{ 
  content: '';
  height: 22px;
  width: 895.57px;
  display: block;
  position: absolute;
  background: #5495c8;
  left: 0;
  top: 6px;
}
.four .mcen2::before{ 
  content: '';
  height: 22px;
  width: 689px;
  display: block;
  background: #5495c8;
  position: absolute;
  left: 0;
  top: 6px;
}
.five .mcen1::before{ 
  content: '';
  height: 22px;
  width: 689px;
  display: block;
  background: #5495c8;
  position: absolute;
  left: 0;
  top: 6px;
}
.six .mtop3::before{ 
  content: '';
  height: 22px;
  width: 689px;
  display: block;
  background: #5495c8;
  position: absolute;
  left: 10px;
  top: 6px;
}
.seven .mcen2::before{ 
  content: '';
  height: 22px;
  width: 689px;
  display: block;
  background: #5495c8;
  position: absolute;
  left: 60px;
  top: 6px;
}
.eight .mbot1::before{ 
  content: '';
  height: 22px;
  width: 689px;
  display: block;
  background: #5495c8;
  position: absolute;
  left: 5px;
  top: 6px;
}
.nine .mtop1::before{ 
  content: '';
  height: 22px;
  width: 689px;
  display: block;
  background: #5495c8;
  position: absolute;
  left: 42px;
  top: 6px;
}.ten .mbot2::before{ 
  content: '';
  height: 22px;
  width: 689px;
  display: block;
  background: #5495c8;
  position: absolute;
  left: 10px;
  top: 6px;
}.eleven .mcen1::before{ 
  content: '';
  height: 22px;
  width: 689px;
  display: block;
  background: #5495c8;
  position: absolute;
  left: 40px;
  top: 6px;
}
.twelve .mbot3::before{ 
  content: '';
  height: 22px;
  width: 689px;
  display: block;
  background: #5495c8;
  position: absolute;
  left: 10px;
  top: 6px;
}
.thirteen  .mbot1::before{ 
  content: '';
  height: 22px;
  width: 689px;
  display: block;
  background: #5495c8;
  position: absolute;
  left: 10px;
  top: 6px;
}
.fourteen .mbot3::before{ 
  content: '';
  height: 22px;
  width: 689px;
  display: block;
  background: #5495c8;
  position: absolute;
  left: 45px;
  top: 6px;
}
</style>