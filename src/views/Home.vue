<template>
  <el-container>
    <el-header class="header">
      Monster Toolkit
    </el-header>
    <el-container>
      <el-aside>
        <mt-menu :data="menus" />
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  components: {
  },
  props: {},
  data () {
    return {}
  },
  computed: {
    menus () {
      function gen (routes = []) {
        routes.forEach(route => {
          route.index = route.name
          if (route.children) {
            gen(route.children)
          }
        })
        return routes
      }
      return gen(this.$router.options.routes)
    }
  },
  methods: {
  },
  created() {}
}
</script>

<style lang="stylus" scoped>
.header
  display flex
  align-items center
  border-bottom 1px solid #eaecef
  padding 0 30px
  color #2c3e50
  box-sizing border-box
  font-size 16px
  font-weight bold
</style>
