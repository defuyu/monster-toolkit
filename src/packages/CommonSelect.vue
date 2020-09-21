<template>
  <el-radio-group
    v-if="type !== 'select'"
    ref="commonSelect"
    v-bind="$attrs"
    v-on="$listeners">
    <component
      :is="type === 'radio' ? 'el-radio' : 'el-radio-button'"
      v-for="(item, index) in currentOptions"
      :key="index"
      :label="item[valueKey]"
      :disabled="item.disabled">
      {{item[labelKey]}}
    </component>
  </el-radio-group>
  <el-select
    v-else
    ref="commonSelect"
    v-bind="$attrs"
    v-on="$listeners">
    <slot></slot>
    <el-option
      v-for="(item, index) in currentOptions"
      :key="index"
      :label="item[labelKey]"
      :value="item[valueKey]"
      :disabled="item.disabled" />
  </el-select>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      // select, radio, radioButton
      default: 'select'
    },
    options: Array,
    hiddenOptions: {
      type: Array,
      default () {
        return []
      }
    },
    labelKey: {
      type: String,
      default: 'label'
    },
    valueKey: {
      type: String,
      default: 'value'
    }
  },
  data () {
    return {}
  },
  computed: {
    currentOptions () {
      const valueKey = this.valueKey
      const hiddenOptions = this.hiddenOptions
      return this.options.filter(item => !hiddenOptions.includes(item[valueKey]))
    }
  },
  methods: {},
  created() {}
}
</script>

<style lang="stylus" scoped>
</style>
