<template>
  <el-table
    ref="table"
    v-bind="$attrs"
    v-on="$listeners"
    @row-click="handleRowClick">
    <el-table-column
      v-if="['single', 'multiple'].includes(selectionType)"
      width="55">
      <template v-if="selectionType === 'multiple'" v-slot:header>
        <el-checkbox
          :value="selectStatus === 'all'"
          :indeterminate="selectStatus === 'indeterminate'"
          @input="handleCheckAllChange"
        ></el-checkbox>
      </template>
      <template v-slot:default="{row, $index: index}">
        <component
          :is="selectionType === 'multiple' ? 'el-checkbox' : 'el-radio'"
          class="first-header"
          :value="selected"
          :label="index"
          @click.native.stop.prevent="handleSelectSingleRow(row, index)" />
      </template>
    </el-table-column>
    <TableColumn
      v-for="(column, index) in headers"
      :key="`col${index}`"
      v-bind="column"
    >
    </TableColumn>
  </el-table>
</template>

<script>
export default {
  inheritAttrs: false,
  components: {
    TableColumn: {
      render: function (h) {
        const render = this.$attrs.render
        let scopedSlots
        if (typeof render === 'function') {
          scopedSlots = {
            default: props => {
              if (typeof render === 'function'){
                return render(h, props)
              }
            }
          }
        }
        return h('el-table-column', {
          props: this.$attrs,
          scopedSlots
        })
      }
    }
  },
  props: {
    props: Object,
    columns: Array,
    selectionType: {
      type: String,
      default: 'none'
    },
    selected: [Array, String, Number],
    hiddenColumns: {
      type: Array,
      default () {
        return []
      }
    },
    selectOnRowClick: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {}
  },
  computed: {
    headers () {
      const { columns, hiddenColumns } = this
      return columns.filter(col => !hiddenColumns.find(prop => prop === col.prop))
    },
    selectStatus () {
      const dataCount = this.$attrs.data.length
      const count = this.selected.length
      if (dataCount === 0 || count === 0) {
        return 'none'
      }
      if (dataCount === count) {
        return 'all'
      }
      return 'indeterminate'
    }
  },
  methods: {
    handleSelectSingleRow (row, index) {
      if (this.selectionType === 'multiple') {
        const isExist = this.selected.some(item => item === index)
        this.$emit(isExist ? 'row-selection-remove' : 'row-selection-add', row, index)
      } else if (this.selectionType === 'single') {
        this.$emit('row-selection-change', row, index)
      }
    },
    handleRowClick (row) {
      const index = this.$attrs.data.indexOf(row)
      if (this.selectOnRowClick) {
        this.handleSelectSingleRow(row, index)
      }
      this.$emit('row-click', ...arguments)
    },
    handleCheckAllChange (val) {
      const selectStatus = this.selectStatus
      const status = selectStatus === 'all' || selectStatus === 'indeterminate'
      this.$emit('all-row-selection-change', !status)
    }
  },
  created() {}
}
</script>

<style lang="stylus" scoped>
.first-header >>> .el-radio__label,
.first-header >>> .el-checkbox__label
  display none
</style>
