import axios from 'axios'

const instance = axios.create({
	baseURL : "https://vuedemo-e3903.firebaseio.com"
})


// instance.defaults.headers.common['Authorization'] = 'token'; //header参数
// instance.defaults.headers.post['Content-type'] = 'application/urlencode'; //post参数
// instance.defaults.headers.get['Accepts'] = 'application/json'; //get参数
// 
export default instance