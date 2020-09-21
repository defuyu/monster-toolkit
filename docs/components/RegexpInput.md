# 正则输入框   
`RegexpInput`  

## 示例  

### 效果

### 代码  
```vue
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
```

## Attributes
| 参数 | 说明 | 类型  | 可选值 | 默认值 | 
| ---- | ------- | ---- | ---- | ---- |
| value / v-model | 绑定值 | string / number | - | - |  
| regexp | 允许输入的正则 | RegExp | - | /^[1-9]\d*$/ |  
| ...el-input |  |  |  |  |  

## Events
| 名称 | 说明 | 回调参数 |  
| ---- | ---- | ---- |
| ...el-input |  |  |
