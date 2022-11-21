<template>
	<view class="dlist">
		<swiper indicator-dots class="swiper">
			<swiper-item>
				<view class="swiper-item"></view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item"></view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script setup>
// vue3小程序生命周期函数
import { onShareAppMessage, onLoad, onShow, onHide } from '@dcloudio/uni-app';
import { getfromidApi } from '../../api/modules/search';

// 页面加载
onLoad( async(message) => {
	const id=message.id
	const {data} = await getfromidApi({id})
	console.log(data);
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
.swiper{
	height: 600rpx;
}
</style>
