<template>
  <el-input
    ref="input"
    :value="inputValue"
    v-bind="$attrs"
    @input="handleInput"
    v-on="inputListeners">
    <template slot="prefix"><slot name="prefix"></slot></template>
    <template slot="suffix"><slot name="suffix"></slot></template>
    <template slot="prepend"><slot name="prepend"></slot></template>
    <template slot="append"><slot name="append"></slot></template>
  </el-input>
</template>

<script>
export default {
  inheritAttrs: false,
  components: {},
  props: ['value', 'regexp'],
  data () {
    return {
      inputValue: undefined
    }
  },
  computed: {
    inputListeners () {
      return Object.keys(this.$listeners).filter(name => name !== 'input')
        .reduce((res, name) => {
          res[name] = this.$listeners[name]
          return res
        }, {})
    }
  },
  watch: {
    value: {
      immediate: true,
      handler (val) {
        if (val !== this.inputValue) {
          this.inputValue = val
        }
      }
    }
  },
  methods: {
    handleInput (val) {
      const regexp = this.regexp || /^[1-9]\d*$/
      if (val === '' || regexp.test(val)) {
        this.inputValue = val
        this.$emit('input', val)
      }
    }
  },
  created() {
  }
}
</script>

<style lang="stylus" scoped>
</style>
