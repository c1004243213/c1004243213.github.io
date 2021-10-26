<template>
	<view class="skill_container">
		<view class="left">
			<scroll-view  class="scroll-left"   scroll-x  @scrolltolower="target(value)">
				<view class="scroll-con"   v-for="item in skillArr" :key="item.id" @click="checkClick(item.id)" :class="Active == item.id ? 'active':''">{{item.title}}</view>
			</scroll-view>
		</view>
		<view class="right">
			<view class="" v-if="isClick == 1">
				<show-vue-skill></show-vue-skill>
			</view>
			<view class="" v-if="isClick == 2">
				456
			</view>
			<view class="" v-if="isClick == 3">
				789
			</view>
			<view class="" v-if="isClick == 4">
				10 11 12
			</view>
			<view class="" v-if="isClick == 5">
				13 14 15
			</view>
			
		</view>
	</view>
</template>

<script>
	import showVueSkill from '../../components/showSkill/showVueSkill/index.vue'
	
	export default{
		data() {
			return {
				skillArr:[
					{
						id:1,
						title:'Vue'
					},
					{
						id: 2,
						title: 'React'
					},
					{
						id:3,
						title: '网络请求'
					},
					{
						id:4,
						title: 'node.js'
					},
					{
						id:5,
						title: 'echarts'
					}
				],
				isClick:1,
				Active: 1
			}
		},
		methods:{
			target(e) {
				console.log(e)
			},
			checkClick(e) {
				this.isClick = e
				this.Active = e
			}
		},
		components: {
			showVueSkill
		}
	}
</script>

<style lang="scss">
	.skill_container{
		display: flex;
	}
	.left{
		flex: 30%;
		white-space: nowrap;
		.scroll-left {
			white-space: normal;
			border-right: 2px solid #777adb;
			.scroll-con{
				width: 100%;
				padding-left: 30rpx;
				display: inline-block;
				height: 100rpx;
				line-height: 100rpx;
			}
		}
	}
	.active{
		background-color: #ddd;
		color: #F0AD4E;
	}
	.right{
		flex: 70%;
	}
</style>
