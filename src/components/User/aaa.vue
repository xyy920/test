<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%"
    row-style="height: 0"
    cell-style="padding: 0"
  >
    <el-table-column
      prop="comName"
      label="归属公司"
    ></el-table-column>
    <el-table-column
      prop="dep"
      label="归属部门"
    ></el-table-column>
    <el-table-column
      prop="loginName"
      label="登录名"
    ></el-table-column>
    <el-table-column
      prop="Name"
      label="姓名"
    ></el-table-column>
    <el-table-column
      prop="tel"
      label="电话"
    ></el-table-column>
    <el-table-column
      prop="phone"
      label="手机"
    ></el-table-column>
    <el-table-column label="操作">
      <template>
        <el-button
          type="text"
          size="small"
        ></el-button>
        <el-button
          type="text"
          size="small"
        ></el-button>
      </template>
    </el-table-column>
  </el-table>
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