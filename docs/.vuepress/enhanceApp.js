import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import demos from '../../src/examples'
import Components from '../../src/packages'

function parseComponentsName (name) {
  return 'mt' + name.replace(/[A-Z]/g, c => '-' + c.toLowerCase())
}

const install = function (Vue, options) {
  Object.keys(demos).forEach(name => {
    Vue.component(name, demos[name])
  })
  Object.keys(Components).forEach(name => {
    Vue.component(parseComponentsName(name), Components[name])
  })
}

export default ({
  Vue
}) => {
  Vue.use(ElementUI)
  Vue.use({install})
}