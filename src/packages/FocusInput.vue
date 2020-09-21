<template>
  <div class="input-wapper">
    <span v-if="readonly">{{title}}</span>
    <el-input
      v-else
      ref="input"
      v-model.trim="title"
      @change="handleInputChange"
      @focus="handleFocusInput"
      @keydown.native="handleKeyPressBack"
      @enter.native="$emit('blur')"
      @blur="$emit('blur', $event)"
    />
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    readonly: {
      type: Boolean,
      default: true
    },
    value: {}
  },
  data () {
    return {
      title: this.value
    }
  },
  computed: {},
  watch: {
    value (val) {
      this.title = val
    }
  },
  methods: {
    handleFocusInput (e) {
      e.target.select()
    },
    handleKeyPressBack (e) {
      if (event.keyCode === 8 ) {
        event.stopPropagation()
      }
      if (event.keyCode === 13) {
        this.$emit('blur')
      }
    },
    handleInputChange (val) {
      if (val === '') {
        this.title = this.value
      } else {
        this.$emit('input', val)
      }
    }
  },
  created() {},
  updated () {
    if (!this.readonly) {
      this.$refs.input && this.$refs.input.focus()
    }
  }
}
</script>

<style lang="stylus" scoped>
.input-wapper
  display inline-block
</style>
