<template>
  <div>
    <p>select单选</p>
    <mt-common-select v-model="value" :options="options" />
    <p>radio单选</p>
    <mt-common-select v-model="value2" type="radio" :options="options" />
    <p>radio-button单选</p>
    <mt-common-select v-model="value3" type="radio-button" :options="options" />
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      options: [{
        value: '1',
        label: '黄金糕'
      }, {
        value: '2',
        label: '双皮奶'
      }, {
        value: '3',
        label: '蚵仔煎'
      }, {
        value: '4',
        label: '龙须面'
      }, {
        value: '5',
        label: '北京烤鸭'
      }],
      value: undefined,
      value2: '1',
      value3: '1'
    }
  },
  computed: {},
  methods: {},
  created() {}
}
</script>

<style lang="stylus" scoped>
</style>
