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
