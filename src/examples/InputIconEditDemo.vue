<template>
  <div>
    <p>点击图表修改单元格内容</p>
    <el-divider></el-divider>
    <el-table
      :data="tableData">
      <el-table-column
        label="姓名"
        width="180">
        <template slot-scope="{row}">
          <mt-input-icon-edit @blur="handleBlur" :initValue="row.name" />
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      tableData: [{
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        name: '苏媚',
        address: '上海市弄'
      }, {
        name: '沈欺霜',
        address: '上海市弄'
      }]
    }
  },
  computed: {},
  methods: {
    handleBlur (val) {
      this.$message.success('传给后端的值为' + val)
    }
  },
  created() {}
}
</script>

<style lang="stylus" scoped>
</style>
