<template>
  <div id="app">
    <!-- <add-blog></add-blog> -->
    <!-- <show-blogs></show-blogs> -->
    <blog-header></blog-header>
    <router-view></router-view>
  </div>
</template>

<script>
import AddBlog from './components/AddBlog'
import ShowBlogs from './components/ShowBlogs'
import BlogHeader from './components/BlogHeader'

export default {
  name: 'App',
  components: {
    AddBlog,ShowBlogs,BlogHeader
  },

  // created(){
  //   fetch("/apis/test/testToken.php",{
  //     method:"post",
  //     headers:{
  //       "Content-type":"",
  //       token:""
  //     },
  //     body:JSON.stringify({username:"",password:123})
  //   })
  //   .then(result => {
  //     return result.json()
  //   })
  //   .then(data => {
  //     console.log(data)
  //   })
  // }
}
</script>

<style>
  body{
    margin: 0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #606266;
}

ul{
  list-style-type: none;
  text-align: center;
  margin: 0;
}

li{
  display: inline-block;
  margin: 0 10px;

}

</style>
