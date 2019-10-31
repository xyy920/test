<template>
  <el-form
    ref="form"
    :model="form"
    label-width="150px"
    size="mini"
    status-icon
    :rules="rules"
  >
    <el-form-item
      label="归属公司"
      :rows="2"
    >
      <el-input
        v-model="form.gs"
        placeholder="山东省总公司"
        class="companyName"
        suffix-icon="el-icon-search"
      ></el-input>
    </el-form-item>
    <el-form-item label="归属部门">
      <el-input
        v-model="form.bm"
        placeholder="公司领导"
        class="companyName"
        suffix-icon="el-icon-search"
      ></el-input>
    </el-form-item>
    <el-form-item label="工号">
      <el-input
        v-model="form.number"
        class="companyName"
      ></el-input>
    </el-form-item>
    <el-form-item label="姓名">
      <el-input
        v-model="form.name"
        class="companyName"
      ></el-input>
    </el-form-item>
    <el-form-item label="登录名">
      <el-input
        v-model="form.dlname"
        class="companyName"
      ></el-input>
    </el-form-item>
    <el-form-item
      label="密码"
      prop="pass"
    >
      <el-input
        v-model="form.pass"
        class="companyName"
        type="password"
        autocomplete="off"
      ></el-input>
    </el-form-item>
    <el-form-item
      label="确认密码"
      prop="checkPass"
    >
      <el-input
        type="password"
        autocomplete="off"
        v-model="form.checkPass"
        class="companyName"
      ></el-input>
    </el-form-item>
    <el-form-item
      prop="email"
      label="邮箱"
    >
      <el-input
        v-model="form.email"
        class="companyName"
      ></el-input>
    </el-form-item>
    <el-form-item label="电话">
      <el-input
        v-model="form.phone"
        class="companyName"
      ></el-input>
    </el-form-item>
    <el-form-item label="手机">
      <el-input
        v-model="form.telephone"
        class="companyName"
      ></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
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
      tableData: [
        {
          comName: "山东省总公司",
          dep: "公司领导",
          loginName: "sd_admin",
          Name: "管理员",
          tel: "0359",
          phone: 184349655248
        },
        {
          comName: "山东省总公司",
          dep: "公司领导",
          loginName: "sd_admin",
          Name: "管理员",
          tel: "0359",
          phone: 184349655248
        },
        {
          comName: "山东省总公司",
          dep: "公司领导",
          loginName: "sd_admin",
          Name: "管理员",
          tel: "0359",
          phone: 184349655248
        }
      ]
    };
  },
  methods: {
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
  }
};
</script>

<style>
</style>