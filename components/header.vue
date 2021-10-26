<template>
	<view class="container">
		<view class="photo">
			<image src="../static/minephoto/touxiang.jpg" mode=""></image>
		</view>
		<view class="name">
			<view class="name_view">
				<text class="name_title"> 姓名</text>
				<text class="name_show">{{name}}</text>
			</view>
			
		</view>
		<view class="about">
			<view>
				<text>年龄：</text>
				<text>{{about.age}}</text>
			</view>
			<view>
				<text>电话：</text>
				<text>{{about.phone}}</text>
			</view>
			<view>
				<text>邮箱：</text>
				<text>{{about.email}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"header",
		data() {
			return {
				name: "蔡余",
				about:{
					email: '1004243213@qq.com',
					phone: "18708418879",
					age: "23"
				}
			};
		}
	}
</script>

<style lang="scss">
	.container{
		display: flex;
		width: 100%;
	}
		
	.container .photo {
		flex: 30%;
		height: 150rpx;
		image{
			width: 70%;
			height: 80%;
			margin: 0 auto;
			display: block;
			margin-top: 15rpx;
			margin-left: 45rpx
		}
	
	}
	.container .name {
		flex: 20%;
		height: 150rpx;
		
		padding: 0 10rpx;
		line-height: 80rpx;
		.name_view{
			display: flex;
			flex-direction: column;
			align-items: center;
			height: 150rpx;
			font-size: 30rpx;
			justify-content: center;
			.name_title{
				font-size: 45rpx;
				font-weight: 700;
			}
			.name_show{
				margin-top: -25rpx;
			}
		}
	}
	.container .about {
		display: flex;
		flex-direction: column;
		flex: 50%;
		height: 150rpx;
		
		font-size: 24rpx;
		justify-content: center;
		padding: 0 20rpx;
	}
</style>
