<template>
  <div class="content container">
    <div class="container3">
      <div
        class="slider-left"
        v-show="this.flag"
      >
        <userslider></userslider>
      </div>
      <div class="info">
        <div class="table_header_info">
          <div
            data-v-01f32082
            class="header_info_tag"
          >
            <p data-v-01f32082>用户信息管理</p>
          </div>
        </div>
        <div class="main_info">
          <div
            class="shousuo"
            @click="show()"
          >
            <div class="sanjiao"></div>
          </div>
          <div
            class="user_main_left"
            v-show="this.flag1"
          >
            <user-slider2></user-slider2>
          </div>
          <div class="user_main_right">
            <div class="user_main_right_left">
              <div
                class="shousuo1"
                @click="show1()"
              >
                <div class="sanjiao1"></div>
              </div>
            </div>
            <div class="user_main_right_right">
              <el-tabs
                v-model="activeName"
                type="card"
                @tab-click="handleClick">
                <!-- 用户列表 -->
                <el-tab-pane
                  label="用户列表"
                  name="first"
                >
                  <table>
                    <tr>
                      <th>归属公司</th>
                      <th>归属部门</th>
                      <th>登录名</th>
                      <th>姓名</th>
                      <th>电话</th>
                      <th>手机</th>
                      <th>操作</th>
                    </tr>
                    <tr>
                      <td>山东省总公司</td>
                      <td>公司领导</td>
                      <td>sd_admin</td>
                      <td>管理员</td>
                      <td>0359</td>
                      <td>184349655248</td>
                      <td>
                        <img
                          src="../../../images/tb_13.png"
                          alt=""
                        ><img
                          src="../../../images/tb_14.png"
                          alt=""
                          class="delete"
                        ></td>
                    </tr>
                    <tr>
                      <td>山东省总公司</td>
                      <td>公司领导</td>
                      <td>sd_admin</td>
                      <td>管理员</td>
                      <td>0359</td>
                      <td>184349655248</td>
                      <td><img
                          src="../../../images/tb_13.png"
                          alt=""
                        ><img
                          src="../../../images/tb_14.png"
                          alt=""
                          class="delete"
                        ></td>
                    </tr>
                    <tr>
                      <td>山东省总公司</td>
                      <td>公司领导</td>
                      <td>sd_admin</td>
                      <td>管理员</td>
                      <td>0359</td>
                      <td>184349655248</td>
                      <td><img
                          src="../../../images/tb_13.png"
                          alt=""
                          class="tz"
                        ><img
                          src="../../../images/tb_14.png"
                          alt=""
                          class="delete"
                        ></td>
                    </tr>
                  </table>
                </el-tab-pane>
                <!-- 用户添加 -->
                <el-tab-pane
                  label="用户添加"
                  name="second"
                >
                  <router-view></router-view>
                </el-tab-pane>
              </el-tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* 用户列表 */
.el-tabs__item {
  color: plum !important;
}
table th {
  font-weight: bold;
  background: #f1f6fb;
}
table th,
table td {
  font-size: 14px;
  font-weight: normal;
  text-align: left;
  color: #666666;
  border: 1px solid #dbdfe1;
  padding-left: 8px;
}
table {
  width: 100%;
  border-color: #ccc;
  border: none;
}
table tr {
  line-height: 35px;
  position: relative;
}
table img:last-child {
  margin-left: 20px;
}
.companyName {
  width: 20%;
}
.el-form-item__label {
  width: 100px;
}

.el-form-item {
  border-bottom: 1px solid #eee;
  margin: 8px 0px;
  padding-bottom: 8px;
}
form {
  margin-left: 10px;
  /* border:1px solid red; */
}
.main .el-input__icon {
  line-height: 25px !important;
}
input {
  height: 25px !important;
  line-height: 25px !important;
}
.main .el-form-item__content {
  line-height: 25px !important;
}
.jigou {
  /* border:1px solid red; */
  height: 100%;
}
.add_main_header {
  /* border:1px solid red; */
  padding-top: 10px;
}
.add_main_1 {
  height: 70px;
}
.add_main_1 table {
  margin-top: 20px;
}
.bumen {
  height: 40px;
}
.main_info {
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 0;
  padding: 10px;
}
.user_main_right_left {
  width: 10px;
  height: 100%;
  float: left;
}
.user_main_left {
  width: 200px;
  height: 100%;
  float: left;
  border: 1px solid #e5e5e5;
  overflow-y: auto;
}
.user_main_right {
  box-sizing: border-box;
  flex: 1;
  height: 100%;
  float: left;
  position: relative;
}
.user_main_right .shousuo1 {
  width: 10px;
  position: absolute;
  float: left;
  left: 0;
}
.picture1 {
  border: 1px solid #32accb !important;
  color: #32accb !important;
}
.right_info {
  background-color: #32accb !important;
}
.info_style {
  border-left: 1px solid #99d6e5 !important;
}
.sanjiao,
.sanjiao1 {
  width: 0;
  height: 0;
  overflow: hidden;
  border-width: 5px;
  border-color: transparent transparent #4591d8 transparent;
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg);
  border-style: dotted dotted solid dotted;
}
.user_main_right_right {
  width: calc(100% - 20px);
  float: left;
  flex: 1;
  height: 100%;
  overflow-y: auto;
}
.shousuo,
.shousuo1 {
  cursor: pointer;
}
.shousuo1 {
  background: #ecedf3;
}
.info {
  background: #fff;
}
</style>
<script>
import "../../../css/index.css";
import userslider from '../../User/userSlider'
import userSlider2 from '../../User/userSlider2'
export default {
  components: { userslider, userSlider2 },
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.form.checkPass !== '') {
          this.$refs.form.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.form.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      activeName: "second",
      form: {
        gs: "",
        bm: "",
        number: "",
        name: "",
        dlname: "",
        pass: "",
        checkPass: "",
        email: "",
        phone: "",
        telephone: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ]
      },
      msg: "显示",
      flag: true,
      flag1: true,
      reqUrl: '/a/system/settings/userlist',
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    show() {
      this.flag = !this.flag;
      if (this.flag) {
        this.msg = "隐藏";
        $(".shousuo ").css("backgroundColor", "white");
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
    show1() {
      this.flag1 = !this.flag1;
      if (this.flag1) {
        this.msg = "隐藏";
        $(".shousuo1").css("backgroundColor", "#ecedf3");

        $(".sanjiao1").css("transform", "rotate(-90deg)");
        $(".sanjiao1").css(
          "border-color",
          "transparent transparent #4591d8 transparent"
        );
      } else {
        $(".shousuo1").css("backgroundColor", "#4591d8");
        $(".sanjiao1").css(
          "border-color",
          "transparent transparent #fff transparent"
        );
        $(".sanjiao1").css("transform", "rotate(90deg)");
      }
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleClick2(row) {
      console.log(row);
    }
  },
  mounted() {
    $("table tr:even").addClass("even");
    $('.delete').click(function () { $(this).closest("tr").remove() })
    $('.tz').click(function(){
      $('.el-tab-pane').hide().eq(1).show()
      console.log('jlsb')
    })
  }
};
</script>