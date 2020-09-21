<template>
  <el-menu
    v-bind="$attrs"
    v-on="$listeners"
    @select="handleSelect"
  >
    <el-submenu
      v-for="(submenu, index) in data"
      v-bind="submenu.props"
      :key="index"
      :index="submenu.index || String(index)"
    >
      <template v-slot:title>
        <icon v-if="submenu.icon" :class="submenu.icon" />
        <span>{{submenu.name}}</span>
      </template>
      <el-menu-item
        v-for="(option, oIndex) in submenu.children"
        v-bind="option.props"
        :key="oIndex"
        :index="option.index || `${index}-${oIndex}`">{{option.name}}</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  inheritAttrs: false,
  components: {},
  props: {
    data: Array
  },
  data () {
    return {}
  },
  computed: {},
  methods: {
    handleSelect (name) {
      this.$router.push({ name }).catch(() => {})
    }
  },
  created() {}
}
</script>

<style lang="stylus" scoped>
</style>
