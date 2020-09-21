<template>
  <div>
    <p>根据router数据结构生成菜单，只用于一层菜单</p>
    <el-divider></el-divider>
    <mt-menu :data="data1" mode="horizontal" :collapse-transition="false" />
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      data1: [
        {
          name: '版面管理',
          children: [
            { name: 'TAB版面管理' }
          ]
        },
        {
          name: '版块管理',
          children: [
            { name: '常规运营' },
            { name: '功能版块' }
          ]
        }
      ]
    }
  },
  computed: {},
  methods: {},
  created() {}
}
</script>

<style lang="stylus" scoped>
</style>
