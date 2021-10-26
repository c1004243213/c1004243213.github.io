<template>
	<view class="content">
		<scroll-view class="btn-ul" scroll-x >
			<view class="scroll-con" :class="isActive==1 ? 'active' : '' ">
				<a type="default"   @click="switchOptions(1)">职业技能</a>
			</view>
			<view class="scroll-con" :class="isActive==2 ? 'active' : '' ">
				<a type="default"   @click="switchOptions(2)">兴趣爱好</a>
			</view>
			<view class="scroll-con" :class="isActive==3 ? 'active' : '' ">
				<a type="default"   @click="switchOptions(3)">教育经历</a>
			</view>
			<view class="scroll-con" :class="isActive==4 ? 'active' : '' ">
				<a type="default"   @click="switchOptions(4)">自我介绍</a>
			</view>
			<view class="scroll-con" :class="isActive==5 ? 'active' : '' ">
				<a type="default"   @click="switchOptions(5)">About</a>
			</view>
		</scroll-view>
		<view class="Br"></view>
		
		<view v-if="isShow == 1" :class=" isActive == 1 ? 'Active' : '' " >
			<Skill></Skill>
		</view>
		<view v-if="isShow == 2" :class=" isActive == 2 ? 'Active2' : '' ">
			<Interest></Interest>
		</view>
		<view v-if="isShow == 3" :class=" isActive == 3 ? 'Active2' : '' ">
			模块3
		</view>
		<view v-if="isShow == 4" :class=" isActive == 3 ? 'Active2' : '' ">
			测试1
		</view>
		<view v-if="isShow == 5" :class=" isActive == 3 ? 'Active2' : '' ">
			测试2
		</view>
		
	</view>
</template>

<script>
	import Interest from  '../../pages/interest/index.vue'
	import Skill from  '../../pages/skill/index.vue'
	export default {
		data() {
			return {
				isShow: 1,
				isActive: 1
			}
		},
		onLoad() {
		 
		},
		methods: {
			switchOptions(n){
				this.isShow = n
				this.isActive = n
			}
		},
		components:{
			Interest,
			Skill
		}
	}
</script>

<style lang="scss">
	.btn-ul{
		height: 120rpx;
		white-space: nowrap;
	}
	.btn-ul .scroll-con {
		display: inline-block;
		height: 60rpx;
		line-height: 60rpx;
		padding: 0 25rpx;
		margin-left: 32rpx;
		color: pink;
		font-size: 25rpx;
		margin-top: 25rpx;
	}
	.active{
		font-size: 28rpx !important;
		font-weight: 700 !important;
		color: black !important;
		background-color: #afd71d;
		border-radius: 50rpx;
	}
	
	.Br{
		border: 5rpx solid black;
		width: 100%;
		margin-top: -15rpx;
	}
</style>
