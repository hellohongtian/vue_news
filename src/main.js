// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'
import axios from 'axios'
//全局配置(需要自己到firebase官网申请地址)
axios.defaults.baseURL = '';
// axios.defaults.headers.common['Authorization'] = 'token'; //header参数
// axios.defaults.headers.post['Content-type'] = 'application/urlencode'; //post参数
// axios.defaults.headers.get['Accepts'] = 'application/json'; //get参数

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(ElementUI);
//自定义指令(全局)
// Vue.directive("rainbow",{
// 	bind(el,binding,vnode){
// 		el.style.color = "#"+ Math.random().toString(16).slice(2,8);
// 	}
// })
Vue.directive("theme",{
	bind(el,binding,vnode){
		if (binding.value == 'wide'){
			el.style.maxWidth = '1260px';
		} else if (binding.value == 'narrow') {
			el.style.maxWidth = '800px';
		}

		if (binding.arg == 'column') {
			el.style.background = "#FFFFFF";
			el.style.padding='20px';
		}
	}
});

// Vue.filter("to-uppercase",function(value){
// 	return value.toUpperCase();
// });

Vue.filter("snippet",function(value){
	return value.slice(0,100)+'...';
});
Vue.filter("snippet1",function(value){
    return value.slice(0,8)+'...';
});
Vue.filter("timeformat",function(value){
    //这里传入的值一定要是数字，如果是字符串的话，需要先转为int型
    var time = new Date(value);
    return time.getFullYear()+"年"+(time.getMonth()+1)+"月"+time.getDate()+"日";
});
//路由
const router = new VueRouter({
	routes:Routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
   template: '<App/>',
  components: { App },
  router:router
})
