<template>
  <div class="main">
    <div class="login-left fl">
      <div class="login-logo"><img src="../../images/logoin-logo.png">中国中铁审计信息系统</div>
      <div class="login-footer">
        <span>地址：北京市海淀区复兴路69号9号楼中国中铁大厦 京ICP备14038223号 中国中铁股份有限公司版权所有</span>
        <span style="margin-left: 52px">技术支持：中铁第六勘察设计院集团有限公司 </span>
      </div>
    </div>
    <div class="login-right fr">
      <div class="login">
        <div
          class="tab"
          style="display: flex;justify-content: space-between;"
        >
          <div class="tab1">
            <p style="
            border-bottom: solid 2px #fff;">普通登录</p>
          </div>
          <div class="tab1">
            <p>统一认证登录</p>
          </div>
        </div>
        <div class="form-group"><span><img src="../../images/username.png"></span><input
            id="username"
            name='username'
            type="text"
            v-model="username"
            placeholder="请输入用户名"
          ></div>
        <div class="form-group"><span><img src="../../images/password.png"></span><input
            id="password"
            name='password'
            type="password"
            v-model="password"
            placeholder="请输入密码"
          ></div>
        <div class="form-group">
          <!-- <span><img src="../../images/password.png"></span> -->
          <input
            type="text"
            placeholder="请输入验证码"
            id="inputCode"
            style="width: 50%;float: none;"
          />
          <form
            id="form1"
            runat="server"
          >
            <div
              class="code"
              id="checkCode"
            ></div>
            <div class="createCode">换一张</div>
          </form>
        </div>
        <div class="remember">
          <div class="remember-tool"><span><i></i></span></div>
          记住我（公共场所慎用）
          <div style="display:none;">
            <label
              for="rememberMe"
              title="下次不需要再登录"
            >
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
              >
              记住我（公共场所慎用）
            </label>
          </div>
        </div>
        <span style="color:red;"></span>
        <div class="form-btn">
          <router-link to="/Index"><el-button
              id="login"
              type="submit" @click="handleLogin"
          :loading="loading"
            >立即登录</el-button></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../../css/index.css';
import request from '@/utils/request'

export default {
  data() {
    return {
      username: 'thinkgem',
      password: 'admin',
      pwdType: 'password',
      loading: false,
    }
  },
  methods: {
    showPwd() {
      if (this.pwdType === 'password') {
        this.pwdType = ''
      } else {
        this.pwdType = 'password'
      }
    },
    handleLogin() {
      let that = this;
      that.loading = true;
      request({
        url: '/f/api/login',
        method: 'post',
        data: {
          username: that.username,
          password: that.password
        }
      }).then(data => {
        that.$router.push('/Index');
        that.loading = false;
      }).catch(error => {
        that.loading = false;
        that.$message.error(error.message);
      })
    }
  },
  mounted() {

    var code = '';//定义一个变量，用来保存验证码
    createCode();
    //生成验证码
    function createCode() {
      code = "";
      var codeLength = 6; //验证码的长度
      var checkCode = document.getElementById("checkCode");
      var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //所有候选组成验证码的字符，当然也可以用中文的
      for (var i = 0; i < codeLength; i++) {
        var charNum = Math.floor(Math.random() * 61);
        code += codeChars[charNum];
      }
      if (checkCode) {
        checkCode.innerHTML = code;
      }
    }
    //校验验证码
    function validateCode() {
      var inputCode = document.getElementById("inputCode").value;
      console.log(inputCode);
      if (inputCode.length <= 0) {
        alert("请输入验证码！");
      }
      //toUpperCase() 方法用于把字符串转换为大写
      //toLowerCase（）方法用于把字符串转换为小写
      else if (inputCode.toLowerCase() != code.toLowerCase()) {
        // alert("验证码输入有误！");
        createCode();
      }
      else {
        // alert("验证码正确！");
      }
    }
    $('.createCode').click(function () { createCode(); })
    $('#login').click(function () { validateCode() })
    $(".tab .tab1").click(function () {
      $(".tab1 p").css("borderBottom", 'none').eq($(this).index()).css("borderBottom", 'solid 2px #fff');
    });
    var reberme = '${rememberMe}';
    if (!reberme) {
      $('#rememberMe').prop("checked", true);
    } else {
      $('#rememberMe').prop("checked", false);
    }
    $(".remember-tool").click(function () {
      var _left = parseInt($(this).children("span").css("left"));
      if (_left < 0) {
        // 开
        $(this).children("span").stop().animate({
          "left": "0"
        }, 200);
        $('#rememberMe').prop("checked", true);
      } else {
        // 关
        $(this).children("span").stop().animate({
          "left": "-28px"
        }, 200);
        $('#rememberMe').prop("checked", false);
      }
    })
    // $("#login").click(function () {
    //   if ($("#username").val() == "") {
    //     layer.alert("请输入用户名！")
    //     return false;
    //   } else if ($("#password").val() == "") {
    //     layer.alert("请输入密码！")
    //     return false;
    //   }
    // })
  }
}

</script>

<style scoped>
.main {
  background: url("../../images/backgroundpic_03.png") no-repeat center;
  width: 100%;
  overflow: hidden;
  background-size: 100% 100%;
  height: 100vh;
}
.login-left {
  width: 70%;
  height: 100%;
  position: relative;
}
.login-footer {
  position: absolute;
  width: 100%;
  bottom: 30px;
  font-size: 14px;
  padding: 0 40px;
  color: #cccccc;
  text-align: center;
}

.login-logo {
  margin-left: 85px;
  font-size: 50px;
  color: #ffffff;
  padding-top: 5%;
}

img {
  vertical-align: middle;
  max-width: 100%;
}

.login-right {
  width: 30%;
  padding: 0 5%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
}

.fl {
  float: left;
}

.fr {
  float: right;
}

.login .form-group {
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 20px;
  padding-bottom: 8px;
  position: relative;
}

.login .form-group input {
  background-color: transparent;
  width: calc(100% - 50px);
  border: 0;
  font-size: 14px;
  height: 36px;
  line-height: 36px;
  float: right;
  color: #cccccc;
}

.remember {
  font-size: 16px;
  color: #999999;
  height: 30px;
  line-height: 30px;
  margin-top: 15px;
}

.remember-tool {
  display: inline-block;
  width: 50px;
  height: 22px;
  -webkit-border-radius: 11px;
  -moz-border-radius: 11px;
  border-radius: 11px;
  overflow: hidden;
  background: #b7b7b7;
  vertical-align: middle;
  margin-right: 10px;
  position: relative;
  cursor: pointer;
}

.remember-tool span {
  position: absolute;
  top: 0;
  left: -28px;
  display: block;
  width: 50px;
  height: 22px;
  -webkit-border-radius: 11px;
  -moz-border-radius: 11px;
  border-radius: 11px;
  overflow: hidden;
  background-color: #2c7ad2;
  z-index: 3;
}

.remember-tool span i {
  display: block;
  float: right;
  width: 22px;
  height: 22px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  background-color: #69afff;
}

.form-btn {
  text-align: center;
  margin-top: 100px;
}

.form-btn button {
  width: 240px;
  height: 60px;
  border: 2px solid #4d95e7;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
  background-color: #3489ea;
  font-size: 28px;
  color: #fff;
  letter-spacing: 5px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.tab {
  border: none;
}

.tab1 p {
  color: #cccccc;
  margin-left: 13px;
  display: inline-block;
  padding-bottom: 9px;
}
.code {
  font-family: Arial;
  font-style: italic; /*字体倾斜*/
  color: #3489ea;
  font-size: 25px;
  border: 0;
  padding: 2px 3px;
  letter-spacing: 3px;
  font-weight: bolder;
  float: left;
  cursor: pointer;
  width: 100%;
  height: 33px;
  text-align: center;
  vertical-align: middle;
}
a {
  text-decoration: none;
  font-size: 12px;
  color: #288bc4;
}
a:hover {
  text-decoration: underline;
}
#form1 {
  /* display: none; */
  width: 50%;
  position: absolute;
  left: 50%;
  top: -8px;
  text-align: center;
  color: #666;
}
.createCode {
  cursor: pointer;
}
</style>