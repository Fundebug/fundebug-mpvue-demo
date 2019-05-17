import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

var fundebug = require('fundebug-wxjs')
fundebug.init({
  apikey: 'apikey' // 获取apikey需要免费注册Fundebug(https://www.fundebug.com)帐号并且创建项目。
})

// 测试1
// fundebug.test()

// 测试2
// setTimeout(function () {
//   throw new Error('test')
// }, 1000)

const app = new Vue(App)
app.$mount()
