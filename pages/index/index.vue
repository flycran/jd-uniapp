<template>
	<view class="container">
		<view class="comtop">
			<view class="comtop-lop">
				<view class="comtop-left">
					<uni-icons type="search" size="17" color="#cecece"></uni-icons>
					<text>笔记本电脑</text>
				</view>
				<view class="comtop-rinht">
					<uni-icons type="camera" size="18"></uni-icons>
					<view class="lp">搜索</view>
				</view>
			</view>
		</view>
		<view class="example-body">
			<view class="tag-view"><uni-tag :inverted="true" text="首页" type="primary" /></view>
			<view class="tag-view"><uni-tag :inverted="true" text="补贴爆品" type="success" /></view>
			<view class="tag-view"><uni-tag :inverted="true" text="电脑办公" type="warning" /></view>
			<view class="tag-view"><uni-tag :inverted="true" text="大家电" type="error" /></view>
			<view class="tag-view"><uni-tag :inverted="true" text="手机" /></view>
		</view>
		<swiper class="swiper" indicator-dots>
			<swiper-item>
				<uni-grid :column="5" :highlight="true">
					<uni-grid-item v-for="item in 10" :key="item">
						<view class="grid-item-box">
							<image src="@/static/c1.png" class="image" mode="aspectFill" />
							<text class="text">京东</text>
						</view>
					</uni-grid-item>
				</uni-grid>
			</swiper-item>
			<swiper-item>
				<uni-grid :column="5" :highlight="true">
					<uni-grid-item v-for="item in 10" :key="item">
						<view class="grid-item-box">
							<image src="@/static/c2.png" class="image" mode="aspectFill" />
							<text class="text">优惠</text>
						</view>
					</uni-grid-item>
				</uni-grid>
			</swiper-item>
			<swiper-item>
				<uni-grid :column="5" :highlight="true">
					<uni-grid-item v-for="item in 10" :key="item">
						<view class="grid-item-box">
							<image src="@/static/c3.png" class="image" mode="aspectFill" />
							<text class="text">服务</text>
						</view>
					</uni-grid-item>
				</uni-grid>
			</swiper-item>
		</swiper>
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
	</view>
</template>

<script setup></script>

<style lang="scss">
.comtop {
	width: 100%;
	height: 60rpx;
	margin-bottom: 40rpx;
	.comtop-lop {
		height: 60rpx;
		margin: 0 40rpx;
		border-radius: 50rpx;
		border-style: solid;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.comtop-left {
			display: flex;
			align-items: center;
			text {
				margin-left: 30rpx;
				font-size: 26rpx;
			}
		}
		.comtop-rinht {
			display: flex;
			align-items: center;
			.lp {
				margin: 10rpx 20rpx;
				font-size: 26rpx;
				background: red;
				width: 100rpx;
				height: 60rpx;
				text-align: center;
				line-height: 60rpx;
				border-radius: 20rpx;
				color: #fff;
			}
		}
	}
}
.example-body {
	display: flex;
	margin: 0 30rpx;
	justify-content: space-around;
}
.swiper {
	height: 350rpx;
	.grid-item-box {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 30rpx 0;
		.image {
			width: 25px;
			height: 25px;
		}
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
</style>
