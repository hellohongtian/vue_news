<template>
	<el-row :gutter="20" class="add-blog">
		<el-col :span="12" :offset="6">
			<div class="add-blog">
				<h2>新增新闻</h2>
				<el-form ref="form" :model="form" label-width="80px" v-if="!submmited">
					<el-form-item label="新闻标题">
						<el-input type="text" v-model="blog.title" required></el-input>
					</el-form-item>
					<el-form-item label="新闻内容">
						<el-input type="textarea"  v-model="blog.content" rows="10"></el-input>
					</el-form-item>

					<el-form-item label="分类">
						<el-checkbox-group  v-model="blog.categories" >
							<el-checkbox :label="new_a"  v-for = "new_a in news" :key = "new_a.index"></el-checkbox>
						</el-checkbox-group>
					</el-form-item>

					<el-form-item label="作者">
					<el-select v-model="blog.author" style="width: 100%">
						<el-option v-for="author in authors" :label="author" :value="author" :key="author.index">
						</el-option>
					</el-select>
					</el-form-item>
					<!-- prevent阻止刷新页面 -->
					<el-form-item >
						<el-button type="success" v-on:click.prevent="post">添加新闻</el-button>
					</el-form-item>
				</el-form>

				<div v-if="submmited">
					<h3>您的新闻发布成功!</h3>
				</div>

			</div>
		</el-col>
	</el-row>
</template>

<script>
import axios from 'axios'
export default {
  name: 'add-blog',
  data () {
    return {
    	blog:{
    		title:"",
    		content:"",
    		categories:[],
    		author:"",
			created_at:0
    	},
		news:['军事','财经','娱乐','体育','互联网','科技','汽车','房产','社会','其他'],
    	authors:["天哥哥","tian","无名"],
    	submmited:false,
        form: {
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
        }
    }
  },
  methods:{
  	post:function(){
      // var _this = this;
		this.blog.created_at = new Date().getTime();
      axios.post("https://vuedemo-e3903.firebaseio.com/posts.json",this.blog)
      .then((data) => { // es6语法
  			// _this.submmited = true;
        this.submmited = true;
  			// console.log(data)
  		});
  	}
  }
}
</script>

<style scoped>
	.add-blog el-form-item{
		width: 100%;
	}
</style>
