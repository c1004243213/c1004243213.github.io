<template>
	<view class="content">
		<Header></Header>
		<SwiperItem></SwiperItem>
		<ShowMain></ShowMain>
	</view>
</template>

if view1组件展示
class动态添加active

<script>
	import Header from '../../components/header.vue'
	import ShowMain from '../../components/showMain/ShowMain.vue' 
	import SwiperItem from '../../components/Swiper/SwiperItem.vue'
	export default {
		components:{
			Header,
			ShowMain,
			SwiperItem
		}
	}
</script>

<style>
	
</style>
