# 一级路由菜单    
`Menu`  

## 示例  

### 效果
<Demo><MenuDemo/></Demo>

### 代码  
```vue
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
```

## Attributes
| 参数 | 说明 | 类型  | 可选值 | 默认值 | 
| ---- | ------- | ---- | ---- | ---- |
| data | 菜单层级结构 | Array | - | - |  
| ...el-menu |  |  |  |  |  
| data[index].prop | 子菜单属性配置项 |  | ...el-submenu |  |  

## Events
| 名称 | 说明 | 回调参数 |  
| ---- | ---- | ---- |
| ...el-menu |  |  |
