<template>
  <div class="cell-content">
    <div class="cell-main-content" style="width: 90%">
      <el-input
        ref="input"
        class="edit-input"
        v-if="!readonly"
        v-model="value"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      <div v-else class="input-place">{{initValue}}</div>
    </div>
    <i class="el-icon-edit icon" @click="handleEdit" style="cursor: pointer" />
  </div>
</template>

<script>
export default {
  components: {},
  props: ['initValue'],
  data () {
    return {
      value: '',
      readonly: true
    }
  },
  computed: {},
  watch: {
    initValue: {
      handle (val) {
        this.value = val
      }
    }
  },
  methods: {
    handleEdit () {
      this.readonly = false
    },
    handleBlur () {
      this.readonly = true
      this.$emit('blur', this.value)
    },
    handleFocus (e) {
      e.target.select()
      this.$emit('focus')
    }
  },
  created () {
    this.value = this.initValue
  },
  updated () {
    this.$refs.input && this.$refs.input.focus()
  }
}
</script>

<style lang="stylus" scoped>
.cell-content
  display flex
  flex-direction row
  align-items center
  justify-content space-between
  color #606266
.icon
  visibility hidden
.cell-content:hover .icon
  visibility visible
.input-place
  white-space nowrap
  overflow hidden
  text-overflow ellipsis
</style>
