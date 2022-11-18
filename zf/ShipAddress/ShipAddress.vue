<template>
	<view>
		<uni-swipe-action>
			<uni-swipe-action-item v-for="(item, index) in swipeList" :right-options="item.options" :key="item.id" @click="swipeClick($event, index)">
				<view class="content-box">
					<!-- 用户 -->
					<view class="address">
						<text>T</text>
						<!-- 电话 -->
						<text>156*****432</text>
					</view>

					<!-- 地址详情 -->
					<view class="nochoose">湖南长沙市岳麓区麓谷街道湖南众智互联网学院北门</view>
					<view class="edit ">编辑</view>
				</view>
			</uni-swipe-action-item>
		</uni-swipe-action>

		<!-- 新增地址 -->
		<view class="mod_btns_v2"><view class="mod_btn">新增收货地址</view></view>
	</view>
</template>

<script>
export default {
	components: {},
	data() {
		return {
			swipeList: [
				{
					id: 1,
					options: [
						{
							text: '默认'
						},
						{
							text: '删除',
							style: {
								backgroundColor: 'rgb(255,58,49)'
							}
						}
					]
					// content: ''
				}
			]
		};
	},
	methods: {
		swipeClick(e, index) {
			let { content } = e;
			if (content.text === '删除') {
				uni.showModal({
					title: '提示',
					content: '是否删除',
					success: res => {
						if (res.confirm) {
							this.swipeList.splice(index, 1);
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			}
		}
	}
};
</script>
<style lang="scss">
.content-box {
	// height: 88rpx;
	// line-height: 88rpx;
	padding: 18rpx 30rpx;
	position: relative;
	background-color: #fff;
	border: 1rpx solid #f5f5f5;

	//用户
	.address {
		color: #000000;
		font-size: 32rpx;
		font-weight: 700;
	}

	// 地址详情
	.nochoose {
		font-size: 28rpx;
		color: #666;
		margin-top: 4px;
		padding-right: 100rpx;
	}

	// 编辑
	.edit {
		position: absolute;
		color: #f2270c;
		width: 80rpx;
		right: 0;
		top: 40%;
		bottom: 0;
		font-size: 30rpx;
	}
}

.mod_btns_v2 {
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	margin: 0;
	z-index: 101;
	text-align: center;
	background: #fff;
	padding: 20rpx;

	.mod_btn {
		position: relative;
		color: #fff;
		background: red;
		box-shadow: 0 6rpx 12rpx 0 rgb(255 65 66 / 20%);
		border: none;
		box-sizing: border-box;
		font-size: 38rpx;
		height: 80rpx;
		line-height: 80rpx;
		border-radius: 40rpx;
	}
}
</style>
