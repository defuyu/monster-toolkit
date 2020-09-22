# 点击图标改变单元格    
`InputIconEdit`  

## 示例  

### 效果
<Demo><InputIconEditDemo/></Demo>

### 代码  
```vue
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
```

## Attributes
| 参数 | 说明 | 类型  | 可选值 | 默认值 | 
| ---- | ------- | ---- | ---- | ---- |
| initValue | 初始值 | String | - | - |  

## Events
| 名称 | 说明 | 回调参数 |  
| ---- | ---- | ---- |
| blur | 失焦确定时出发 | 失焦时的输入值 |
