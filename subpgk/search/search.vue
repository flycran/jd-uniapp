<template>
	<view class="check">
		<view class="header">
			<view class="header-search">
				<icon type="search" size="13"></icon>
				<input type="text" class="search-title" v-model="query.keyword" />
			</view>
			<view class="search-btn" @click="search">搜索</view>
		</view>
	</view>
</template>

<script setup>
// vue3小程序生命周期函数
import { onShareAppMessage, onLoad, onShow, onHide } from '@dcloudio/uni-app';

// 页面加载
onLoad((message) => {
	
})

// 页面显示
onShow(() => {
	
})

// 页面隐藏
onHide(() => {
	
})

// 页面分享(不定义该函数 页面将无法分享)
onShareAppMessage(() => {
	
})
</script>

<style lang="scss">
.header {
	display: flex;
	justify-content: space-between;
	height: 100rpx;
	line-height: 100rpx;
	padding: 0 30rpx;
	font-size: 30rpx;
	color: #656771;
	.header-search {
		display: flex;
		flex: 1;
		height: 40rpx;
		line-height: 40rpx;
		margin: 20rpx 0;
		padding: 10rpx 0;
		color: #232326;
		background: #f7f7f7;
		border-radius: 40rpx;
		icon {
			padding: 4rpx 18rpx 0 20rpx;
			font-size: 32rpx;
		}
		.search-title {
			font-size: 24rpx;
			color: #666;
			background: #f7f7f7;
			width: 80%;
		}
	}
	.search-btn {
		height: 56rpx;
		margin: 16rpx 0;
		line-height: 56rpx;
		padding: 0 20rpx;
		color: #f7f7f7;
		background-color: #aa00ff;
		border-radius: 10rpx;
		margin-top: 20rpx;
		margin-left: 30rpx;
	}
}
</style>
