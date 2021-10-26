<template>
	<view class="container">
		<swiper class="swiper" indicator-dots circular autoplay>
			<swiper-item class="swiper_item" v-for="item in groups" :key="item.id">
				<image :src="`../../static/job/logo${item.data}.jpg`"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				groups:[
					{
						id:1,
						data:1
					},
					{
						id:2,
						data:2
					},
					{
						id:3,
						data:3
					},
					{
						id:4,
						data:4
					},
					{
						id:5,
						data:5
					}
				]
			}
		}
	}
</script>

<style lang="scss">
	.swiper{
		height: 320rpx;
		.swiper_item{
			image{
				width: 100%;
				height: 320rpx;
			}
		}
	}
</style>
