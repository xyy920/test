<template>
  <div>
    <!-- <fieldset class="layui-elem-field layui-field-title" style="margin-top: 30px;">
      <legend>常规用法</legend>
    </fieldset>-->
    <div class="zuzhi">组织机构</div>
    <div
      id="test1"
      class="demo-tree demo-tree-box"
    ></div>
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
import request from '@/utils/request'

export default {
  data() {
    return{
      tableData: [],
      reqUrl: '/a/system/settings/treeData'
    }
  },
  created() {
    this.table()
  },
  methods: {
    table() {
      let that = this;
      that.loading = true;
      request({
        url: that.reqUrl,
        method: 'get',
      }).then(data => {
        if (data.status === 200) {
          that.tableData = b;
        }
      })
    }
  },
  mounted() {
    layui.use(["tree", "util"], function () {
      var tree = layui.tree,
        layer = layui.layer,
        util = layui.util,
        //模拟数据1
        data1 = [
          {
            title: "中国中铁股份有限公司",
            id: 1,
            // checked: true,
            spread: true,
            children: [
              {
                title: "董事会办公室",
                id: 10,
              },
              {
                title: "总裁办公司",
                id: 11
              },
              {
                title: "党委办公室",
                id: 12
              },
              {
                title: "经理层",
                id: 13
              },
              {
                title: "投资发展部",
                id: 14,
                children: [
                  {
                    title: "发展部一",
                    id: 140
                  },
                  {
                    title: "发展部二",
                    id: 141
                  }
                ]
              },
              {
                title: "法律事业部",
                id: 15
              },
              {
                title: "中铁一局集团有限公司",
                id: 16,
                children: [
                  {
                    title: "中铁一局",
                    id: 160
                  },
                ]
              },
              {
                title: "中铁二局集团有限公司",
                id: 17,
                children: [
                  {
                    title: "中铁二局",
                    id: 170
                  },
                ]
              },
              {
                title: "中铁三局集团有限公司",
                id: 18,
                children: [
                  {
                    title: "中铁三局",
                    id: 180
                  },
                ]
              },
              {
                title: "中铁四局集团有限公司",
                id: 19,
                children: [
                  {
                    title: "中铁四局",
                    id: 190
                  },
                ]
              },
              {
                title: "中铁五局集团有限公司",
                id: 20,
                children: [
                  {
                    title: "中铁五局",
                    id: 200
                  },
                ]
              }
            ]
          },
        ]
      //常规用法
      tree.render({
        elem: "#test1", //默认是点击节点可进行收缩
        data: data1,
        // click: function (othis) {
        //   layer.background('#d9e8fb');
        //   console.log(css)
        // }
      });
    });
  }
};
</script>
