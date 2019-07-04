<template>
	<div id = "single-blog">
		<el-card class="box-card">
			<div slot="header" class="clearfix">
				<span><h1>{{blog.title}}</h1></span>
				<label><i class="el-icon-s-flag"></i>:</label>
				<el-tag v-for="category in blog.categories" shadow="always" :key="category.index">
					{{category}}
				</el-tag>
				<span><i class="el-icon-user"></i>:
					<el-tag type="warning">{{blog.author}}</el-tag>
				</span>
			</div>
			<div class="text item wrapper" v-text="blog.content">
			</div>
		</el-card>
		<el-button style="float: right; padding: 3px 0" type="text">
			<el-button type="primary" @click="dialogVisible = true">删除</el-button>
			<router-link :to="'/edit/' + id"><el-button type="primary">编辑</el-button></router-link>
		</el-button>
		<el-dialog
				title="提示"
				:visible.sync="dialogVisible"
				:show-close="false"
				width="30%"
				:modal = "true"
				:close-on-click-modal = "true"
				:close-on-press-escape = "true"
				customClass="customWidth"
				>
			<span>确认要删除吗,删除后无法恢复哦?</span>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="deleteConfirm()">确 定</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		name:"single-blog",
		data(){
			return {
				id:this.$route.params.id,
				blog:{},
                dialogVisible:false,
				confirm:false
			}
		},
		created(){
			axios.get('/posts/'+ this.id+'.json' )
			.then((data) => {
				this.blog = data.data;
			})
		},
		methods:{
			deleteSingleBlog(){
				if(this.confirm){
                    axios.delete('/posts/'+ this.id+'.json')
                        .then(response => {
                            this.$router.push({path:'/'})
                        });
				}
			},
			deleteConfirm(){
                this.dialogVisible = true;
                this.confirm = true;
                this.deleteSingleBlog();
			},
            // handleClose(done) {
            //     this.$confirm('确认关闭？')
            //         .then(_ => {
            //             done();
            //         })
            //         .catch(_ => {});
            // }
		}
	}
</script>

<style>
	#single-blog{
		max-width: 960px;
		margin: 0 auto;
		padding: 20px;
	}
	.text {
		font-size: 14px;
	}

	.item {
		margin-bottom: 18px;
	}

	.clearfix:before,
	.clearfix:after {
		display: table;
		content: "";
	}
	.clearfix:after {
		clear: both
	}
	.wrapper{
		white-space: pre-wrap;
	}
	.customWidth{
		background: #66CCCC;
	}
</style>