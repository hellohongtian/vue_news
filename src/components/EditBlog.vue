<template>
	<el-row :gutter="20" class="add-blog">
		<el-col :span="12" :offset="6">
		  <div class="add-blog">
				<h2>编辑新闻</h2>
			  <el-form ref="form" :model="form" label-width="80px" v-if="!submmited">
				  <el-form-item label="新闻标题">
					  <el-input type="text" v-model="blog.title" required></el-input>
				  </el-form-item>
				  <el-form-item label="新闻内容">
					  <el-input type="textarea" v-model="blog.content" rows="10"></el-input>
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

				  <el-form-item>
					 <el-button  type="primary" v-on:click.prevent="post">编辑新闻</el-button>
					  <el-button  type="danger"> <router-link to="/" exact>取消</router-link></el-button>
				  </el-form-item>
					<!-- prevent阻止刷新页面 -->
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
    	id:this.$route.params.id,
    	blog:{
            categories:[]
    	},
        authors:["天哥哥","tian","无名"],
        submmited:false,
        news:['军事','财经','娱乐','体育','互联网','科技','汽车','房产','社会','其他'],
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
  	    var self = this;
        axios.put('/posts/'+ this.id+'.json',this.blog).then(function(data){
            self.submmited = true;
  		});
  	},
  	fetchData(){
        axios.get('/posts/'+ this.id+'.json')
  		.then((data) => {
  			this.blog = data.data;
        })
  	}
  },
  created(){
  	this.fetchData();
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
