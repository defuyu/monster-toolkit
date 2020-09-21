<template>
  <div>
    <p>双击修改分组名称，拖拽改变分组位置</p>
    <mt-group-tabs
      v-model="editableTabsValue"
      :tabs="groupTabs"
      type="card"
      editable
      @edit="handleTabsEdit"
    />
  </div>
</template>

<script>
export default {
  components: {
  },
  props: {},
  data () {
    return {
      editableTabsValue: '0',
      groupTabs: [],
      index: -1,
      activeIndex: 0
    }
  },
  watch: {
    activeIndex (val) {
      this.editableTabsValue = String(this.activeIndex)
    }
  },
  computed: {},
  methods: {
    genDefaultTab () {
      const index = ++this.index
      return {
        label: '分组1',
        disabled: false,
        name: String(index)
      }
    },
    handleTabsEdit (targetName, action) {
      const groupTabs = this.groupTabs
      if (action === 'add') {
        const newTab = this.genDefaultTab()
        groupTabs.push(newTab)
        this.activeIndex = newTab.name
      }
      if (action === 'remove') {
        if (targetName === this.editableTabsValue) {
          groupTabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = groupTabs[index + 1] || groupTabs[index - 1]
              if (nextTab) {
                this.editableTabsValue = nextTab.name;
              }
            }
          })
        }
        this.groupTabs = groupTabs.filter(item => item.name !== targetName)
      }
    }
  },
  created() {
    this.groupTabs.push(this.genDefaultTab())
  }
}
</script>

<style lang="stylus" scoped>
</style>
