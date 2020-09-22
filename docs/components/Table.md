# 支持单/多选的表格    
`Table`  

## 示例  

### 效果
<Demo><TableDemo/></Demo>

### 代码  
```vue
<template>
  <div>
    <p>点击行选择数据</p>
    <p>单选</p>
    <mt-table
      :data="tableData"
      selection-type="single"
      :selected="selected"
      :columns="columns"
      @row-selection-change="handleSelectRow"
    />
    <p>多选、全选、隐藏列</p>
    <mt-table
      :data="tableData"
      selection-type="multiple"
      :selected="multipleSelected"
      :columns="columns"
      :hiddenColumns="['address']"
      @row-selection-add="handleMultipleSelectedAdd"
      @row-selection-remove="handleMultipleSelectedRemove"
      @all-row-selection-change="handleAllSelecedChange"
    />
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      selected: undefined,
      multipleSelected: [],
      columns: [
        {
          label: '日期',
          prop: 'date'
        },
        {
          label: '姓名',
          prop: 'name'
        },
        {
          label: '地址',
          prop: 'address',
          render: (h, {row}) => {
            return row.address
          }
        }
      ]
    }
  },
  computed: {},
  methods: {
    handleSelectRow (row, index) {
      this.selected = index
    },
    handleMultipleSelectedAdd (row, index) {
      this.multipleSelected.push(index)
    },
    handleMultipleSelectedRemove (row, index) {
      this.multipleSelected = this.multipleSelected.filter(item => item !== index)
    },
    handleAllSelecedChange (status) {
      this.multipleSelected = status ? this.tableData.map((item, index) => index)
        : []
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
| props | ...el-table | Object | - | - |  
| columns | ...el-table-column | Object | - | - |  
| selectionType | 选择类型 | String | none/single/multiple | none |  
| hiddenColumns | 隐藏表格列prop组成的数组 | Array | - | [] |  
| selectOnRowClick | 点击行选中该行 | Boolean | - | true |  
| ...el-input |  |  |  |  |  

## Events
| 名称 | 说明 | 回调参数 |  
| ---- | ---- | ---- |
| row-selection-change | 单选时选中项改变触发 | row, index |
| row-selection-add | 多选时新增一项触发 | row, index |
| row-selection-remove | 多选时删除一项触发 | row, index |
| all-row-selection-change | 多选时点击全选按钮触发 | status |
