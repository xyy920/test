<template>
  <div class="main">
    <div class="content container">
      <div class="container3">
        <div class="slider-left" v-show="this.flag" >
          <Slider></Slider>
        </div>
        <div class="info">
          <div class="main_info">

            <div class="shousuo" @click="show()" >
              <div class="sanjiao"></div>
            </div>
            <div class="table_info">
              <div class="table_header_info">
                <div class="header_info_tag">
                  <p>项目执行甘特图</p>
                </div>
                <div class="header_info_btn">
                  <input type="button" value="查询" id="search" />
                  <input type="button" value="导出Excel" />
                </div>
              </div>
              <div class="table_main_info">
                <div class="table_content1">
                  <form class="layui-form" action="" >
                    <table border="0" cellspacing="0" >
                      <tbody>
                        <tr>
                          <!-- onchange="selectAll()" -->
                          <th rowspan="2">序号</th>
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
                          <td>1</td>
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
                          <td>2</td>
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
                          <td>3</td>
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
                          <td>4</td>
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
                          <td>5</td>
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
                          <td>6</td>
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
                          <td>7</td>
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
                          <td>8</td>
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
                          <td>9</td>
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
                          <td>10</td>
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
                          <td>11</td>
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
                          <td>12</td>
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
                          <td>13</td>
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
                          <td>14</td>
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
          <input type="button" value="确定" />
        </div>
      </div>
    </div>
    <router-view />
  </div>

</template>

<script>
import '../../../css/index.css';
// import Header from '../../publi/header';
import Slider from '../sliderplan';
export default {
  components: {  Slider },
  methods: {
  },
  // name: 'py',
  data() {
    return {
      msg: "显示",
      flag: true
    };
  },
  methods: {
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
  color: #000;
  border-bottom: 1px dashed #e6e6e6;
}
.el-submenu.is-opened > .el-submenu__title .el-submenu__icon-arrow {
  -webkit-transform: rotateZ(-90deg);
  transform: rotateZ(-90deg) !important;
}
.el-submenu__icon-arrow {
  -webkit-transform: rotateZ(-90deg);
  transform: rotateZ(-90deg) !important;
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
.one .mtop1::before {
  content: "准备阶段（100%）";
  width: 60px;
  background: #5495c8;
  position: absolute;
  left: 0;
  top: 6px;
}
.one .mcen1::before {
  content: "实施阶段（100%）";
  width: 325px;
  background: #f8a13b;
  position: absolute;
  left: -10px;
  top: 6px;
}
.one .mbot2::before {
  content: "报告阶段（100%）";
  width: 60px;
  background: #8980e0;
  position: absolute;
  left: 251px;
  top: 6px;
}
.one .mcen2::before {
  content: "项目归档（100%）";
  width: 325px;
  background: #5495c8;
  position: absolute;
  left: -10px;
  top: 6px;
}
.table_content1 td {
  position: relative;
}
.two .mcen1::before {
  content: "准备阶段（100%）";
  height: 22px;
  width: 70px;
  display: block;
  position: absolute;
  background: #3dbae3;
  left: 58px;
  top: 6px;
}
.two .mtop2::before {
  content: "实施阶段（100%）";
  height: 22px;
  width: 266px;
  display: block;
  position: absolute;
  background: #f8a13b;
  left: 0;
  top: 6px;
}
.two .mcen3::before {
  content: "报告阶段（100%）";
  height: 22px;
  width: 199px;
  display: block;
  position: absolute;
  background: #8980e0;
  left: 0;
  top: 6px;
}
.two .mcen4::before {
  content: "项目归档（100%）";
  height: 22px;
  width: 70px;
  display: block;
  position: absolute;
  background: #5495c8;
  left: 0px;
  top: 6px;
}
.three .mtop1::before {
  content: "准备阶段（100%）";
  height: 22px;
  width: 192px;
  display: block;
  position: absolute;
  background: #3dbae3;
  left: 0px;
  top: 6px;
}
.three .mtop2::before {
  content: "实施阶段（100%）";
  height: 22px;
  width: 404px;
  display: block;
  position: absolute;
  background: #f8a13b;
  left: 0;
  top: 6px;
}
.three .mcen3::before {
  content: "报告阶段（100%）";
  height: 22px;
  width: 192px;
  display: block;
  position: absolute;
  background: #8980e0;
  left: 0;
  top: 6px;
}
.three .mcen4::before {
  content: "项目归档（100%）";
  height: 22px;
  width: 70px;
  display: block;
  position: absolute;
  background: #5495c8;
  left: 0px;
  top: 6px;
}
.four .mcen2::before {
  content: "准备阶段（100%）";
  height: 22px;
  width: 60px;
  display: block;
  position: absolute;
  background: #3dbae3;
  left: 0px;
  top: 6px;
}
.four .mcen2::before {
  content: "实施阶段（100%）";
  height: 22px;
  width: 270px;
  display: block;
  position: absolute;
  background: #f8a13b;
  left: 0;
  top: 6px;
}
.four .mtop4::before {
  content: "报告阶段（100%）";
  height: 22px;
  width: 325px;
  display: block;
  position: absolute;
  background: #8980e0;
  left: -50px;
  top: 6px;
}
.four .mbot5::before {
  content: "项目归档（100%）";
  height: 22px;
  width: 135px;
  display: block;
  position: absolute;
  background: #5495c8;
  left: -45px;
  top: 6px;
}
.five.mcen1::before {
  content: "准备阶段（100%）";
  height: 22px;
  width: 125px;
  display: block;
  position: absolute;
  background: #3dbae3;
  left: 0px;
  top: 6px;
}
.five .mbot2::before {
  content: "实施阶段（100%）";
  height: 22px;
  width: 404px;
  display: block;
  position: absolute;
  background: #f8a13b;
  left: 0;
  top: 6px;
}
.five .mtop4::before {
  content: "报告阶段（100%）";
  height: 22px;
  width: 192px;
  display: block;
  position: absolute;
  background: #8980e0;
  left: 0;
  top: 6px;
}
.five .mtop5::before {
  content: "项目归档（100%）";
  height: 22px;
  width: 192px;
  display: block;
  position: absolute;
  background: hsl(206, 51%, 56%);
  left: 0px;
  top: 6px;
}
.six .mtop3::before {
  content: "准备阶段（100%）";
  height: 22px;
  width: 125px;
  display: block;
  position: absolute;
  background: #3dbae3;
  left: 3px;
  top: 6px;
}
.six .mbot3::before {
  content: "实施阶段（100%）";
  height: 22px;
  width: 573px;
  display: block;
  position: absolute;
  background: #f8a13b;
  left: 0;
  top: 6px;
}
.six .mcen6::before {
  content: "报告阶段（100%）";
  height: 22px;
  width: 192px;
  display: block;
  position: absolute;
  background: #8980e0;
  left: 60px;
  top: 6px;
}
.six .mbot7::before {
  content: "项目归档（100%）";
  height: 22px;
  width: 70px;
  display: block;
  position: absolute;
  background: #5495c8;
  left: -5px;
  top: 6px;
}
.seven .mcen2::before {
  content: "准备阶段（100%）";
  height: 22px;
  width: 50px;
  display: block;
  position: absolute;
  background: #3dbae3;
  left: 32px;
  top: 6px;
}
.seven .mbot2::before {
  content: "实施阶段（100%）";
  height: 22px;
  width: 292px;
  display: block;
  position: absolute;
  background: #f8a13b;
  left: 18px;
  top: 6px;
}
.seven .mcen4::before {
  content: "报告阶段（100%）";
  height: 22px;
  width: 192px;
  display: block;
  position: absolute;
  background: #8980e0;
  left: -10px;
  top: 6px;
}
.seven .mcen5::before {
  content: "项目归档（100%）";
  height: 22px;
  width: 178px;
  display: block;
  position: absolute;
  background: #5495c8;
  left: -10px;
  top: 6px;
}
.eight .mbot1::before {
  content: "准备阶段（100%）";
  height: 22px;
  width: 125px;
  display: block;
  position: absolute;
  background: #3dbae3;
  left: 3px;
  top: 6px;
}
.eight .mcen2::before {
  content: "实施阶段（100%）";
  height: 22px;
  width: 288px;
  display: block;
  position: absolute;
  background: #f8a13b;
  left: 0;
  top: 6px;
}
.eight .mbot3::before {
  content: "报告阶段（100%）";
  height: 22px;
  width: 192px;
  display: block;
  position: absolute;
  background: #8980e0;
  left: 32px;
  top: 6px;
}
.eight .mbot4::before {
  content: "项目归档（100%）";
  height: 22px;
  width: 121px;
  display: block;
  position: absolute;
  background: #5495c8;
  left: 32px;
  top: 6px;
}
.nine.mtop1::before {
  content: "准备阶段（100%）";
  height: 22px;
  width: 192px;
  display: block;
  position: absolute;
  background: #3dbae3;
  left: 0px;
  top: 6px;
}
.nine .mtop2::before {
  content: "实施阶段（100%）";
  height: 22px;
  width: 404px;
  display: block;
  position: absolute;
  background: #f8a13b;
  left: 0;
  top: 6px;
}
.nine .mcen3::before {
  content: "报告阶段（100%）";
  height: 22px;
  width: 192px;
  display: block;
  position: absolute;
  background: #8980e0;
  left: 0;
  top: 6px;
}
.nine .mcen4::before {
  content: "项目归档（100%）";
  height: 22px;
  width: 70px;
  display: block;
  position: absolute;
  background: #5495c8;
  left: 0px;
  top: 6px;
}
.ten .mtop1::before {
  content: "准备阶段（100）";
  height: 22px;
  width: 192px;
  display: block;
  position: absolute;
  background: #3dbae3;
  left: 38px;
  top: 6px;
}
.ten .mtop2::before {
  content: "实施阶段（100%）";
  height: 22px;
  width: 404px;
  display: block;
  position: absolute;
  background: #f8a13b;
  left: 38px;
  top: 6px;
}
.ten .mcen3::before {
  content: "报告阶段（100%）";
  height: 22px;
  width: 192px;
  display: block;
  position: absolute;
  background: #8980e0;
  left: 38px;
  top: 6px;
}
.ten .mcen4::before {
  content: "项目归档（100%）";
  height: 22px;
  width: 70px;
  display: block;
  position: absolute;
  background: #5495c8;
  left: 38px;
  top: 6px;
}
.eleven .mtop1::before {
  content: "准备阶段（100）";
  height: 22px;
  width: 192px;
  display: block;
  position: absolute;
  background: #3dbae3;
  left: 66px;
  top: 6px;
}
.eleven .mtop2::before {
  content: "实施阶段（100%）";
  height: 22px;
  width: 404px;
  display: block;
  position: absolute;
  background: #f8a13b;
  left: 66px;
  top: 6px;
}
.eleven .mcen3::before {
  content: "报告阶段（100%）";
  height: 22px;
  width: 192px;
  display: block;
  position: absolute;
  background: #8980e0;
  left: 66px;
  top: 6px;
}
.eleven .mcen4::before {
  content: "项目归档（100%）";
  height: 22px;
  width: 70px;
  display: block;
  position: absolute;
  background: #5495c8;
  left: 66px;
  top: 6px;
}
.twelve .mtop1::before {
  content: "准备阶段（100）";
  height: 22px;
  width: 192px;
  display: block;
  position: absolute;
  background: #3dbae3;
  left: 66px;
  top: 6px;
}
.twelve .mtop2::before {
  content: "实施阶段（100%）";
  height: 22px;
  width: 404px;
  display: block;
  position: absolute;
  background: #f8a13b;
  left: 55px;
  top: 6px;
}
.twelve .mcen3::before {
  content: "报告阶段（100%）";
  height: 22px;
  width: 192px;
  display: block;
  position: absolute;
  background: #8980e0;
  left: 55px;
  top: 6px;
}
.twelve .mcen4::before {
  content: "项目归档（100%）";
  height: 22px;
  width: 70px;
  display: block;
  position: absolute;
  background: #5495c8;
  left: 55px;
  top: 6px;
}
.thirteen .mtop1::before {
  content: "准备阶段（100）";
  height: 22px;
  width: 192px;
  display: block;
  position: absolute;
  background: #3dbae3;
  left: 55px;
  top: 6px;
}
.thirteen .mtop2::before {
  content: "实施阶段（100%）";
  height: 22px;
  width: 404px;
  display: block;
  position: absolute;
  background: #f8a13b;
  left: 18px;
  top: 6px;
}
.thirteen .mcen3::before {
  content: "报告阶段（100%）";
  height: 22px;
  width: 192px;
  display: block;
  position: absolute;
  background: #8980e0;
  left: 18px;
  top: 6px;
}
.thirteen .mcen4::before {
  content: "项目归档（100%）";
  height: 22px;
  width: 70px;
  display: block;
  position: absolute;
  background: #5495c8;
  left: 18px;
  top: 6px;
}
.fourteen .mtop1::before {
  content: "准备阶段（100）";
  height: 22px;
  width: 202px;
  display: block;
  position: absolute;
  background: #3dbae3;
  left: 10px;
  top: 6px;
}
.fourteen .mtop2::before {
  content: "实施阶段（100%）";
  height: 22px;
  width: 404px;
  display: block;
  position: absolute;
  background: #f8a13b;
  left: 10;
  top: 6px;
}
.fourteen .mcen3::before {
  content: "报告阶段（100%）";
  height: 22px;
  width: 192px;
  display: block;
  position: absolute;
  background: #8980e0;
  left: 10;
  top: 6px;
}
.fourteen .mcen4::before {
  content: "项目归档（100%）";
  height: 22px;
  width: 70px;
  display: block;
  position: absolute;
  background: #5495c8;
  left: 8px;
  top: 6px;
}
</style>