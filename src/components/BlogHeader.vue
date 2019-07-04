<template>
	<el-menu
			:default-active="activeIndex2"
			class="el-menu-demo"
			mode="horizontal"
			background-color="#545c64"
			text-color="#fff"
			active-text-color="#ffd04b">
		<el-menu-item index="1">
			<router-link to="/" exact>新闻总览</router-link>
		</el-menu-item>
		<el-menu-item index="2">
			<router-link to="/add" exact>写新闻</router-link>
		</el-menu-item>
	</el-menu>
</template>
<script>
	export default({
		name:"blog-header",
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1',
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
	})
</script>
<style scoped>
a{
  text-decoration: none;
  padding: 12px;
}
</style>