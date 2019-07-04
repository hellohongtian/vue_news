<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>新闻总览</h1>
        <el-carousel :interval="4000" type="card" height="200px" >
          <el-carousel-item v-for="(item, index) in blogs" :key="index" v-if="index<4">
            <a :href="'/#/blog/'+ item.id"><h3 class="medium" v-autoImages :data-name="index">{{item.title | snippet1}}</h3></a>
          </el-carousel-item>
        </el-carousel>
    <br><br><el-input v-model="search" placeholder="搜索"></el-input><br><br><br><br>

  <div class="block">
    <el-timeline :reverse="true">
    <el-timeline-item  :timestamp="blog.created_at | timeformat" placement="top" color="hex" type="success" icon="el-icon-star-off"  v-for="blog in filteredBlogs" :key="blog.id">
      <div class="single-blog">
        <router-link v-bind:to="'/blog/' + blog.id">
          <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
        </router-link>
        <article >{{blog.content | snippet}}</article>
      </div>
    </el-timeline-item>
    </el-timeline>
  </div>

  </div>
</template>

<script>
import axios from '../axios-auth'
export default {
  name: 'show-blogs',
  data(){
    return {
      blogs:[],
      search:"",
    }
  },
  created(){
     axios.get('/posts.json')
    .then(function(data){
      return data.data;
    })
    .then((data) => {
      var blogsArray = [];
      for(let key in data){
        data[key].id = key;
        blogsArray.push(data[key]);
      }
      this.blogs = blogsArray;
      console.log(blogsArray);
    })
  },
    methods: {
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        linkTo () {
            let activeIndex = this.$refs.carousel.activeIndex;
            this.$router.push(this.imgs[activeIndex].link)
        }
    },
  computed:{
    filteredBlogs:function(){
      //es6写法
      return this.blogs.filter((blog) => {
        return blog.title.match(this.search);
      })
    },
      auto_images:function (e) {

      }
  },
  filters:{
    // "to-uppercase":function(value){
    //     return value.toUpperCase();
    // }
    // 下面是es6写法
     toUppercase(value){
        return value.toUpperCase();
    }
  },
  directives:{
    'rainbow':{
      bind(el,binding,vnode) {
        el.style.color =  "#"+ Math.random().toString(16).slice(2,8);
      }
    },
      'autoImages':{
          bind(el,binding,vnode) {
              var imageUrl = parseInt(el.dataset.name) + 1;
              el.style.background =  'url("/static/'+imageUrl+'.jpg")';
          }
      }
  }
}

</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    background-size:100% 100%;
  }

#show-blogs{
  margin: 0 auto;
  background: #000;
}
.single-blog{
  padding: 20px;
  margin:20px 0;
  box-sizing: border-box;
  background:#ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
a{
  text-decoration:none;
}
input[type="text"] {
  width: 100%;
  padding: 8px;
  border-size:border-box;
}
h1{
  color:#606266;
}
</style>
