# monster

## 项目构建
```
npm install
npm run serve
npm run build
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 安装
完整引入:
```
import MonsterToolkit from 'monster-toolkit'
Vue.use(MonsterToolkit)
```

## 说明
1. 以代码最优，代码量最少为出发点，基于element-ui常用组件二次封装的组件库，将dom转换成数据，使得html代码量减少
2. 使用$attrs, $listeners, 最大程度还原element-ui的可配置度

## 示例对比
### monster-toolkit
```
<template>
  <div>
    <p>select单选</p>
    <mt-common-select v-model="value" type="select" :options="options" />
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
```

### element ui
```
<template>
  <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    }
  }
</script>
```
