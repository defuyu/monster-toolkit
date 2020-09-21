<template>
  <el-tabs
    v-bind="$attrs"
    v-on="$listeners"
  >
    <el-tab-pane
      v-for="(item, index) in tabs"
      :key="item.name"
      :label="item.label"
      :name="item.name"
    >
      <focus-input
        slot="label"
        :readonly="editTitleIndex !== index"
        v-model="item.label"
        @dblclick.native="handleDoubleTagTitle(index)"
        @blur="editTitleIndex = undefined"
        :draggable="true"
        @dragstart.native="handleTabDragStart(index, $event)"
        @dragover.native="handleTabDragOver(index, $event)"
        @drop.native="handleTabDrop" />
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import FocusInput from './FocusInput'
export default {
  inheritAttrs: false,
  components: {
    FocusInput
  },
  props: {
    tabs: Array
  },
  data () {
    return {
      editTitleIndex: undefined
    }
  },
  computed: {
  },
  methods: {
    handleDoubleTagTitle (index) {
      this.editTitleIndex = index
    },
    handleTabDragStart (index, e) {
      this._dragStartIndex = index
    },
    handleTabDragOver (index, e) {
      this._dragEndIndex = index
      e.preventDefault()
    },
    handleTabDrop () {
      const { _dragStartIndex, _dragEndIndex, tabs } = this
      if (_dragStartIndex !== undefined && _dragEndIndex !== undefined) {
        const drapTab = tabs.splice(_dragStartIndex, 1)[0]
        tabs.splice(_dragEndIndex, 0, drapTab)
        this._dragStartIndex = this._dragEndIndex = undefined
      }
      this.$emit('drag-end')
    }
  },
  created() {
  }
}
</script>

<style lang="stylus" scoped>
</style>
