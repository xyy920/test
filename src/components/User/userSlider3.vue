<template>
  <div>
    <!-- <fieldset class="layui-elem-field layui-field-title" style="margin-top: 30px;">
      <legend>常规用法</legend>
    </fieldset>-->
    <el-tree
      :data="data"
      node-key="id"
      :default-expanded-keys="[1]"
      :props="defaultProps"
      @node-click="handleNodeClick"
    > </el-tree>
  </div>
</template>
<style >
.zuzhi {
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding-left: 15px;
  /* background: #00dcff14; */
  background: #f3f5f2;
  /* color: #409eff; */
}
.layui-tree-entry {
  box-sizing: initial;
}
.layui-tree-icon {
  box-sizing: initial;
}
.layui-tree-txt {
  color: #000;
  font-size: 12px;
}
</style>
<script>
export default {
  data() {
    return {
      data: [
        {
          label: "审计准备",
          id: 1,
          children: [
            {
              label: "实施方案"
            },
            {
              label: "审计分组"
            },
            {
              label: "成员管理/分工"
            },
            {
              label: "补充协议审计文书"
            },
            {
              label: "被审计单位资料"
            },
            {
              label: "方案审批"
            },
            {
              label: "审计通知"
            },
            {
              label: "被审计单位历史问题"
            },
            {
              label: "被审计内历史设计报告"
            },
          ]
        },
        {
          label: "审计实施",
          children: [
            {
              label: "实施"
            },
          ]
        },
        {
          label: "审计报告",
          children: [
            {
              label: "报告"
            },
          ]
        },
        {
          label: "审计整改",
          children: [
            {
              label: "整改"
            },
          ]
        },
        {
          label: "归档管理",
          children: [
            {
              label: "管理"
            },
          ]
        },
      ],

      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    }
  },
}
</script>
