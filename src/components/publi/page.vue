<template>
  <div class="table_footer_info">
  <div class="footer_info_btn">
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      prev-text="上一页"
      next-text="下一页"
    ></el-pagination>
  </div>
  </div>
</template>

<script>
import "../../css/index.css";
export default {
  data() {
    return {
      total: 40,
    }
  }
}
</script>

<style>

</style>