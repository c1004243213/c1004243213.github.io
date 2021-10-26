<template>
	<view>
		<view v-if="!isShowContainer">
			正在加载中...请稍后...
		</view>
		<view class="container" style="" v-if="isShowContainer">
			<view class="" v-if="active == 1">
				<scroll-view scroll-y  style="white-space:normal;" >
					<view class="scroll-con">
						<view class="article_main">
							<view class="article_main_left">
								<image src="../../../static/minephoto/touxiang.jpg"></image>
							</view>
							<view class="article_main_right" >
								<view class="right_title" @click="handleArticle()">
										<text style="font-size: 32rpx; color: #007AFF;">
											{{title}}：
										</text>
										<text class="neirong" @click="handleLinkClick()">
											<web-view :src="url" v-if="linkActive"></web-view>
											什么是MVVM？什么是MVC，它们之间有什么区别？;
										</text>
								</view>
								<view class="right_bottom">
									<view class="right_bottom_left">已被访问：<text>{{count}}</text> 次</view>
									<view class="right_bottom_right">
										<text @click="handleCollect()">⭐收藏</text>|
										<text @click="handleZan()">👍点赞</text>|
										<text @click="handlePreview()">评论</text>
									</view>
								</view>
							</view>
						</view>
						<view class="article_main">
							<view class="article_main_left">
								<image src="../../../static/minephoto/touxiang.jpg"></image>
							</view>
							<view class="article_main_right" >
								<view class="right_title" @click="handleArticle()">
										<text style="font-size: 32rpx; color: #007AFF;">
											{{title}}：
										</text>
										<text class="neirong" >
											什么是MVVM？什么是MVC，它们之间有什么区别？;
										</text>
								</view>
								<view class="right_bottom">
									<view class="right_bottom_left">已被访问：<text>{{count}}</text> 次</view>
									<view class="right_bottom_right">
										<text @click="handleCollect()">⭐收藏</text>|
										<text @click="handleZan()">👍点赞</text>|
										<text @click="handlePreview()">评论</text>
									</view>
								</view>
							</view>
						</view>
						<view class="article_main">
							<view class="article_main_left">
								<image src="../../../static/minephoto/touxiang.jpg"></image>
							</view>
							<view class="article_main_right" >
								<view class="right_title" @click="handleArticle()">
										<text style="font-size: 32rpx; color: #007AFF;">
											{{title}}：
										</text>
										<text class="neirong" >
											什么是MVVM？什么是MVC，它们之间有什么区别？;
										</text>
								</view>
								<view class="right_bottom">
									<view class="right_bottom_left">已被访问：<text>{{count}}</text> 次</view>
									<view class="right_bottom_right">
										<text @click="handleCollect()">⭐收藏</text>|
										<text @click="handleZan()">👍点赞</text>|
										<text @click="handlePreview()">评论</text>
									</view>
								</view>
							</view>
						</view>
						<view class="article_main">
							<view class="article_main_left">
								<image src="../../../static/minephoto/touxiang.jpg"></image>
							</view>
							<view class="article_main_right" >
								<view class="right_title" @click="handleArticle()">
										<text style="font-size: 32rpx; color: #007AFF;">
											{{title}}：
										</text>
										<text class="neirong" >
											什么是MVVM？什么是MVC，它们之间有什么区别？;
										</text>
								</view>
								<view class="right_bottom">
									<view class="right_bottom_left">已被访问：<text>{{count}}</text> 次</view>
									<view class="right_bottom_right">
										<text @click="handleCollect()">⭐收藏</text>|
										<text @click="handleZan()">👍点赞</text>|
										<text @click="handlePreview()">评论</text>
									</view>
								</view>
							</view>
						</view>
						<view class="article_main">
							<view class="article_main_left">
								<image src="../../../static/minephoto/touxiang.jpg"></image>
							</view>
							<view class="article_main_right" >
								<view class="right_title" @click="handleArticle()">
										<text style="font-size: 32rpx; color: #007AFF;">
											{{title}}：
										</text>
										<text class="neirong" >
											什么是MVVM？什么是MVC，它们之间有什么区别？;
										</text>
								</view>
								<view class="right_bottom">
									<view class="right_bottom_left">已被访问：<text>{{count}}</text> 次</view>
									<view class="right_bottom_right">
										<text @click="handleCollect()">⭐收藏</text>|
										<text @click="handleZan()">👍点赞</text>|
										<text @click="handlePreview()">评论</text>
									</view>
								</view>
							</view>
						</view>
						<view class="article_main">
							<view class="article_main_left">
								<image src="../../../static/minephoto/touxiang.jpg"></image>
							</view>
							<view class="article_main_right"   >
								<view class="right_title" @click="handleArticle()" >
										<text style="font-size: 32rpx; color: #007AFF;">
											{{title}}：
										</text>
										<text class="neirong">
											什么是MVVM？什么是MVC，它们之间有什么区别？
								</text>
								</view>
								<view class="right_bottom">
									<view class="right_bottom_left">已被访问：<text>{{count}}</text> 次</view>
									<view class="right_bottom_right">
										<text @click="handleCollect()">⭐收藏</text>|
										<text @click="handleZan()">👍点赞</text>|
										<text @click="handlePreview()">评论</text>
									</view>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
				
			</view>
			<view class="" v-if="active == 2">
				<view class="abc">123</view>
				<text @click="ddd()">123333</text>
			</view>
			
			<uni-pagination prevText="上一页" nextText="下一页" pageSize="10" current="1" total="100" @change="switchChange" showIcon="false" class="fenyeqi"></uni-pagination>
		</view>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				isShowContainer: false,
				active:1,
				title:'标题',
				count:0,
				// url:'https://www.cnblogs.com/aimeeblogs/p/9501490.html',
				url:'https://blog.csdn.net/q821901733/article/details/88122922',
				linkActive: false
			}
		},
	    methods:{
			switchChange(e) {
				this.active = e.current
			},
			handleArticle(){
				this.count++
			},
			handleCollect() {
				uni.showToast({
					title:'⭐收藏成功！'
				})
			},
			handleZan() {
				uni.showToast({
					title:'👍点赞成功！'
				})
			},
			handlePreview(){
				
			},
			
			handleLinkClick() {
				this.linkActive = true
			}
			
		},
		mounted() {
			uni.showLoading({
				title: "正在加载中...请稍后...",
				mask: true
			})
			setTimeout(() => {
				this.isShowContainer = true
				uni.hideLoading()
			},2000)
		}
	}
</script>

<style lang="scss">
	.container{
		width: 100%;
		position: relative;
		height: 550rpx;
	}
	.input_model{
		border: 1px solid black;
		width: 220rpx;
	}
	.text_area{
		width: 100%;
		border: 2px solid orange;
		height: 110rpx;
	}
	.fenyeqi{
		position: absolute;
		bottom: 0;
		left: 96rpx;
	}
	.scroll-con{
		height: 500rpx;
		.article_main{
			display: flex;
			width: 100%;
			height: 150rpx;
			margin-top: 20rpx;
			border-bottom: 1px solid #ddd;
			.article_main_left{
				flex: 30%;
				image{
					width: 80%;
					height: 80%;
					display: block;
					margin: 0 auto;
					margin-top: 16rpx;
					border-radius: 65rpx;
				}
			}
			.article_main_right{
				flex: 70%;
				display: flex;
				flex-direction: column;
				.right_title{
					flex: 70%;
					font-size: 25rpx;
					font-weight: 700;
					font-family: icon-font;
					margin-top: 12rpx;
					.neirong:hover{
						text-decoration: underline;
						color: #007AFF;
					}
				}
				.right_bottom{
					flex: 30%;
					.right_bottom_left{
						float: left;
						font-size: 18rpx;
					}
					.right_bottom_right{
						float: right;
						margin-right: 6rpx;
						font-size: 22rpx;
					}
					
				}
			}
		}
	}
	.abc:hover{
		cursor: pointer;
		color:blue;
		text-decoration: underline;
	}
	
</style>
