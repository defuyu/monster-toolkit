import Components from '@/packages'

function parseComponentsName (name) {
  return 'mt' + name.replace(/[A-Z]/g, c => '-' + c.toLowerCase())
}

const install = function (Vue, options) {
  Object.keys(Components).forEach(name => {
    Vue.component(parseComponentsName(name), Components[name])
  })
}

export default {
  install
}