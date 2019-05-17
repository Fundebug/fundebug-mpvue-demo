import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

var fundebug = require('fundebug-wxjs')
fundebug.init({
  apikey: 'c50fa285025f060a6c1f481faacb12bcf17bff1f2cf6479063497c3b4f3e1372'
})

// 测试1
// fundebug.test()

// 测试2
// setTimeout(function () {
//   throw new Error('test')
// }, 1000)

const app = new Vue(App)
app.$mount()
