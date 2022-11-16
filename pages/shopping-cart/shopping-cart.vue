<template>
	<view class="shop-cart">
		<view class="hom">
			<view class="hom-left">
				<uni-icons type="location" size="16"></uni-icons>
				<text>长沙市岳麓区</text>
			</view>
			<view class="hom-right">
				<text>|</text>
				<text>编辑</text>
			</view>
		</view>
		<view class="lo">
			<text class="lp">全部({{fullist.length}})</text>
			<text>跨店满减(0)</text>
		</view>
		<view class="fomrs" v-for="item in fullist" :key="item.id">
			<view class="fomrs-lo">
				<uni-icons type="checkbox-filled" size="20" color="#ff0000"></uni-icons>
				<uni-icons type="shop-filled" size="20"></uni-icons>
				<text>{{item.name}}</text>
				<uni-icons type="right" size="16"></uni-icons>
			</view>
			<view class="fomrs-o" v-for="item2 in item.commoditys" :key="item2.id">
				<uni-icons type="checkbox-filled" size="20" color="#ff0000"></uni-icons>
				<view class="order-minm">
					<view class="minm-list" >
						<view class="list-min"><image :src="'http://jdm.flycran.xyz/image/'+item2.commodity.cover" mode=""></image></view>
						<view class="list-him">
							<view class="him-lo"><text>{{item2.commodity.name}}</text></view>
							<view class="him-poo">{{item2.specification}}</view>
							<view class="him-gom">
								<text>￥{{item2.commodity.price}}</text>
								<view class="gom-l"><uni-number-box :min="1" :max="9">{{item2.number}}</uni-number-box></view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="fomlog">
			<view class="loh-lom"></view>
			<text>可能你想要的</text>
			<view class="loh-lom"></view>
		</view>
		<view class="might">
			<view class="good">
				<view class="good-box">
					<view class="good-item" v-for="(item, i) in 4" :key="i">
						<image src="../../static/c1.png"></image>
						<view class="good-desc">
							<view class="title">【当日达】14英寸超薄平板电脑二合一安卓超清</view>
							<view class="price">¥ 700</view>
							<view class="">2万+条评论</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="foklo">
		<uni-icons type="checkbox-filled" size="20" color="#ff0000"></uni-icons>
			
		</view>
	</view>
</template>

<script setup>
import { onShow } from '@dcloudio/uni-app'
import { reactive, toRefs } from 'vue'
import { getShopApi } from '@/api/modules/shop'
import { UserStore } from '../../store/usre';
const userStore= UserStore()
const state = reactive({
	fullist: []
})
const init = async () => {
	if (!userStore.token) return
	const { data } = await getShopApi(userStore.token)
	state.fullist=data
	console.log(data);
}
onShow(() => {
	init()
})
const { fullist } = toRefs(state)
</script>

<style lang="scss">
.shop-cart {
	background: #a7a7a7;
}
.hom {
	display: flex;
	justify-content: space-between;
	padding: 0 30rpx;
	margin-bottom: 30rpx;
	background: #fff;
	.hom-left {
		display: flex;
		align-items: center;
		text {
			font-size: 27rpx;
			margin-right: 10rpx;
		}
	}
	.hom-right {
		text {
			margin-left: 30rpx;
			font-size: 24rpx;
		}
	}
}
.lo {
	padding-left: 30rpx;
	background: #fff;
	height: 50rpx;
	margin-bottom: 30rpx;
	font-size: 26rpx;
	line-height: 50rpx;
	font-weight: 400;
	.lp {
		color: #ff0000;
		margin-right: 25rpx;
	}
}
.fomrs {
	margin-bottom: 20rpx;
	background: #fff;
	.fomrs-lo {
		// margin: 30rpx;
		padding: 30rpx;
		display: flex;
		align-items: center;
		text {
			font-size: 25rpx;
			font-weight: bold;
			margin-right: 10rpx;
		}
	}
	.fomrs-o {
		display: flex;
		align-items: center;
		padding: 0 30rpx 30rpx 30rpx;
		.order-minm {
			width: 100%;
			background: #eaeaea;
			.minm-list {
				width: 100%;
				height: 250rpx;
				background: #ffffff;
				display: flex;
				justify-content: space-between;
				.list-min {
					width: 200rpx;
					height: 200rpx;
					margin: 20rpx;
					image {
						width: 100%;
						height: 100%;
					}
				}

				.list-him {
					flex: 1;
					margin-left: 30rpx;
					display: flex;
					flex-direction: column;

					.him-lo {
						width: 90%;
						margin-bottom: 20rpx;
						font-size: 27rpx;
						word-break: break-word;
						font-weight: bold;
						display: flex;
						justify-content: space-between;
					}

					.him-poo {
						background: #d5d5d5;
						border-radius: 10rpx;
						font-size: 20rpx;
						margin-bottom: 20rpx;
					}
					.him-gom {
						display: flex;
						justify-content: space-between;
						.gom-l {
							width: 140rpx;
						}
						text {
							color: red;
							font-weight: bold;
						}
					}
				}
			}
		}
	}
}
.fomlog {
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin-bottom: 30rpx;
	.loh-lom {
		width: 30%;
		height: 0.6rpx;
		background: #666;
	}
	text {
		color: #666;
	}
}
.might {
	.good {
		.good-header {
			background: #f9f9f9;
			height: 100rpx;
			line-height: 100rpx;
			text-align: center;
			font-size: 32rpx;
			font-weight: 500;
		}
		.good-box {
			display: flex;
			flex-wrap: wrap;
			.good-skeleton {
				margin: 40rpx 0;
			}
			.good-item {
				border-radius: 10rpx;
				box-sizing: border-box;
				width: 45%;
				border-bottom: 2rpx solid #e9e9e9;
				margin-left: 20rpx;
				margin-top: 20rpx;
				background: #fff;
				image {
					width: 340rpx;
					height: 240rpx;
				}
				.good-desc {
					font-size: 28rpx;
					padding: 20rpx;
					.title {
						color: #222333;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
						margin-bottom: 20rpx;
					}
					.price {
						font-weight: bold;
						color: #ff0000;
						margin-bottom: 20rpx;
					}
				}
				&:nth-child(2n + 1) {
					border-right: 2rpx solid #e9e9e9;
				}
			}
		}
	}
}
.foklo{
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	height: 140rpx;
	background: #aa00ff;
}
</style>
