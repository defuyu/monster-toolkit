<template>
  <div>
    <p>默认正则禁止输入非数字</p>
    <mt-regexp-input v-model="input1" />
    <p>正则禁止输入非字母</p>
    <mt-regexp-input v-model="input2" :regexp="/^[a-zA-Z]*$/" />
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      input1: undefined,
      input2: undefined
    }
  },
  computed: {},
  methods: {
  },
  created() {}
}
</script>

<style lang="stylus" scoped>
</style>
