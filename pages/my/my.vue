<template>
	<view class="content">
		<view
			class="content-linear"
			style="background: url('../../static/07ed8923a7bdbad2.png') no-repeat scroll 0 0/100% auto; height: 270rpx;"
		>
			<!-- 设置部分 -->
			<view class="header_con">
				<view class="my_header shadow">
					<view class="user_info">
						<!-- 左边头像 -->
						<view class="avatar_wrap">
							<view class="avatar"> </view>
							<view class="wqvue-image">
								<image src="../../static/wd_jd_tp/5b163ef9N4a3d7aa6.png"></image>
							</view>
							<!-- 实名认证 -->
							<view class="real_name">
								待实名认证
								<!-- <van-icon name="chat-o" /> -->
							</view>
						</view>
						<!-- 右边个人信息 -->
						<view class="personal_wrap">
							<view class="name_wrap">
								<span class="my_header_name">jd_TaJpKCcaTIoC</span>
								<!--  -->
							</view>

							<view class="hor-tips">
								<view class="notice " style="margin-left: 16rpx;">京享值</view>
								<view class="notice arrow">开启小白守约特权</view>
							</view>
						</view>
					</view>
					<navigator url="/zf/Account_Settings/Account_Settings" class="avatar_wrap">
						<span
							class="account-icon"
							style="display: block;  width: 40rpx; height: 40rpx; position: relative;left: -100%; top: 60rpx; background: url('../../static/wd_jd_tp/af4b07550371cd4c.png') 0 0/100% 100% no-repeat;;"
						></span>
					</navigator>
				</view>
			</view>

			<!-- 开通 PLUS 会员 -->
			<view class="plus_black_wrap">
				<view
					class="unplus"
					style="width: 96%; height: 100%; box-sizing: border-box; background: url('../../static/wd_jd_tp/9a54eb4e9a4a9b85.png') no-repeat 50%; background-size: 100% 100%;"
				>
					<view class="plus_title">
						<img src="../../static/wd_jd_tp/ef465db87a86bc9e.png" alt="" class="titlelogo" />
					</view>

					<view class="left_tab">10倍返京豆</view>

					<view class="mid_tab">
						<view class="wqvue-image ">
							<img src="../../static/wd_jd_tp/83f66682991c9ff7.png" alt="" class="mid_tab_img" />
						</view>
						<view class="mid_tab_top"> 品质生活 </view>
						<view class="mid_tab_bottom">赠PLUS </view>
					</view>

					<view class="right_tab">
						<view class="wqvue-image right_tab_img">
							<img src="../../static/wd_jd_tp/b3f2700aa10411ac.png" alt="" class="mid_tab_img" />
						</view>
						<view class="mid_tab_top"> 鲜花绿植 </view>
						<view class="mid_tab_bottom">9块9包邮 </view>
					</view>
				</view>
			</view>
		</view>

		<!--收藏列表组  -->
		<view class="xlist_group">
			<view class="assets_item">
				<span class="assets_item_key">商品收藏</span>
				<view class="assets_item_val ">
					<span>0</span>
				</view>
			</view>
			<view class="assets_item">
				<span class="assets_item_key">店铺收藏</span>
				<view class="assets_item_val ">
					<span>0</span>
				</view>
			</view>
			<view class="assets_item">
				<span class="assets_item_key">我的足迹</span>
				<view class="assets_item_val ">
					<span>31</span>
				</view>
			</view>
		</view>

		<!-- 订单 售后列表 -->
		<view class="rel_container">
			<view class="top_line_box">
				<view
					class="my_order_entrance"
					style="background: url('../../static/wd_jd_tp/10001.png')no-repeat scroll 50%/60rpx;"
				>
					<span class="entrance_text">待付款</span>
				</view>

				<view
					class="my_order_entrance"
					style="background: url('../../static/wd_jd_tp/10002.png')no-repeat scroll 50%/60rpx;"
				>
					<span class="entrance_text">待收货</span>
				</view>

				<view
					class="my_order_entrance"
					style="background: url('../../static/wd_jd_tp/10003.png')no-repeat scroll 50%/54rpx;"
				>
					<span class="entrance_text">退换／售后</span>
				</view>

				<view
					class="my_order_entrance"
					style="background: url('../../static/wd_jd_tp/10004.png')no-repeat scroll 50%/54rpx;"
				>
					<span class="entrance_text">全部订单</span>
				</view>
			</view>
		</view>

		<!-- 优惠劵 -->
		<view class="Coupon">
			<view class="assets_item_val">
				<view class="assets_val">
					0
				</view>
				<span class="assets_item_key">优惠劵</span>
			</view>

			<view class="assets_item_val" style="padding-top: 38rpx;">
				<span class="openBaitiaoRed">立减40元</span>
				<view class="assets_val " style="font-size: 26rpx; "> 开通有礼 </view>
				<span class="assets_item_key">白条</span>
			</view>

			<view class="assets_item_val">
				<view class="assets_val">
					0
				</view>
				<span class="assets_item_key">京豆</span>
			</view>

			<view class="assets_item_val">
				<view class="assets_val">
					0
				</view>
				<span class="assets_item_key">红包</span>
			</view>

			<view class="assets_item_val" style="padding: 14rpx;">
				<view
					class="assets_val"
					style="height: 30px; background: url('../../static/wd_jd_tp/10005.png')no-repeat 50% scroll; background-size: 60rpx auto;"
				>
				</view>
				<span class="assets_item_key">全部资产</span>
			</view>
		</view>

		<!--客服  -->
		<view class="swiper-wrapper">
			<view class="tools_item">
				<view class="tools_icon" style="width: 60rpx; height: 60rpx; background: url('../../static/wd_jd_tp/10006.webp') 0rpx 0rpx / 100% 100% no-repeat;" >
				</view>
				<span class="tools_item_keys">客户服务</span>
			</view>

			<view class="tools_item">
				<view class="tools_icon" style="width: 60rpx; height: 60rpx; background: url('../../static/wd_jd_tp/10007.webp') 0rpx 0rpx / 100% 100% no-repeat;" >
				</view>
				<span class="tools_item_keys">我的预约</span>
			</view>

			<view class="tools_item">
				<view class="tools_icon" style="width: 60rpx; height: 60rpx; background: url('../../static/wd_jd_tp/10008.webp') 0rpx 0rpx / 100% 100% no-repeat;" >
				</view>
				<span class="tools_item_keys">闲置换钱</span>
			</view>

			<view class="tools_item">
				<view class="tools_icon" style="width: 60rpx; height: 60rpx; background: url('../../static/wd_jd_tp/10009.webp') 0rpx 0rpx / 100% 100% no-repeat;" >
				</view>
				<span class="tools_item_keys">高价回收</span>
			</view>
		</view>

		<!-- 为你推荐  线条-->
		<view class="title">
			<view class="line"> </view>
			<view class="text">商品推荐</view>
			<view class="line"> </view>
		</view>
		
		<!-- 商品 -->
		<view class="feeds">
			<!-- 左边商品列表 -->
			<view class="feeds_col_left">
				<view class="feeds_col">
					
				</view>
			</view>
			
			<!-- 右边商品列表 -->
			<view class="feeds_col_right">
				<view class="feeds_col">
					
					<view class="">
						<img src="" alt="">
					</view>
					
					<view class="">
						
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {};
		},
	};
</script>

<style lang="scss">
	.content {
		color: #000;
		width: 100vw;
		background: #f5f5f5;
		//ntainer
		// display: flex;
		.content-linear {
			// background: url();
			.header_con {
				margin-top: -1rpx;

				.my_header {
					display: flex;
					position: relative;
					overflow: hidden;
					width: 100wh;
					box-sizing: border-box;
					padding-top: 19rpx;

					.user_info {
						display: flex;
						padding: 0 0 10rpx 18rpx;

						// 左边头像
						.avatar_wrap {
							position: relative;

							.avatar {
								width: 100rpx;
								height: 100rpx;
								overflow: hidden;
								box-shadow: 0 8rpx 16rpx 0 rgba(250, 44, 25, 0.08);
								border-radius: 120rpx;
								box-sizing: border-box;
								border: 2rpx solid #fff;
							}

							.wqvue-image {
								display: inline-block;
								overflow: hidden;
								position: absolute;
								width: 100rpx;
								height: 100rpx;
								top: 0rpx;
								left: 0rpx;

								image {
									width: 100%;
									height: 100%;
									border-radius: 50%;
								}
							}

							.real_name {
								position: absolute;
								bottom: -3rpx;
								left: -9rpx;
								z-index: 1;
								padding: 0 11rpx 0 9rpx;
								height: 30rpx;
								line-height: 29rpx;
								border-radius: 24rpx;
								font-size: 26rpx;
								white-space: nowrap;
								color: rgba(255, 255, 255, 0.7);
								background-color: rgba(0, 0, 0, 0.5);
							}
						}

						// 右边个人信息
						.personal_wrap {
							padding: 10rpx 0 0 20rpx;
							position: relative;

							.hor-tips {
								display: flex;
								margin-top: 19rpx;

								.notice {
									height: 27rpx;
									line-height: 27rpx;
									padding: 0 20rpx 0 12rpx;
									margin: 0 12rpx 0 0;
									border-radius: 20rpx;
									font-size: 22rpx;
									background: rgba(255, 255, 255, 0.68);
									border: 1rpx solid #f8cfce;
									text-align: center;
									overflow: hidden;
									text-overflow: ellipsis;
									white-space: nowrap;
									font-weight: 400;
								}
							}
						}
					}

					.avatar_wrap {
						position: absolute;
						right: 10rpx;
					}
				}
			}

			// 会员

			.plus_black_wrap {
				height: 120rpx;
				margin: 6rpx 10rpx 0;
				box-sizing: border-box;
				overflow: hidden;

				.unplus {
					.plus_title {
						position: absolute;
						margin: -1rpx 0 0 3%;
						width: 180rpx;
						height: 60rpx;

						.titlelogo {
							width: 48rpx;
							height: 48rpx;
							background-size: contain;
						}
					}

					.left_tab {
						display: inline-block;
						font-size: 24rpx;
						font-family: PingFangSC;
						color: #996300;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
						width: 35%;
						position: absolute;
						margin-top: 60rpx;
						text-align: center;
					}

					.mid_tab {
						position: absolute;
						height: 60rpx;
						margin: 13rpx 0 0 33%;

						.wqvue-image {
							width: 60rpx;
							height: 60rpx;
							display: inline-block;
							position: relative;

							.mid_tab_img {
								width: 100%;
								height: 100%;
								position: absolute;
								left: 50%;
								top: 30%;
							}
						}

						.mid_tab_top {
							overflow: hidden;
							white-space: nowrap;
							font-family: PingFangSC;
							font-weight: 700;
							letter-spacing: -1rpx;
							color: #8c5c25;
							font-size: 26rpx;
							position: relative;
							left: 104rpx;
							top: -50rpx;
						}

						.mid_tab_bottom {
							color: #8c5c25;
							font-family: PingFangSC-Bold;
							font-size: 23rpx;
							width: 80rpx;
							position: relative;
							left: 104rpx;
							top: -40rpx;
						}
					}

					.right_tab {
						position: absolute;
						height: 60rpx;
						margin: 13rpx 0 0 62%;

						.wqvue-image {
							width: 66rpx;
							height: 66rpx;
							display: inline-block;
							position: relative;

							.mid_tab_img {
								width: 100%;
								height: 100%;
								position: absolute;
								left: 40%;
								top: 30%;
							}
						}

						.mid_tab_top {
							overflow: hidden;
							white-space: nowrap;
							font-family: PingFangSC;
							font-weight: 700;
							letter-spacing: -1rpx;
							color: #8c5c25;
							font-size: 26rpx;
							position: relative;
							left: 104rpx;
							top: -53rpx;
						}

						.mid_tab_bottom {
							color: #8c5c25;
							font-family: PingFangSC-Bold;
							font-size: 23rpx;
							width: 80rpx;
							position: relative;
							left: 104rpx;
							top: -46rpx;
							// 强制文字为一行
							white-space: nowrap;
						}
					}
				}
			}
		}

		// 收藏列表
		.xlist_group {
			background: #f9f9f9;
			width: 92.6%;
			// background: #996300;
			justify-content: space-around;

			border-radius: 14rpx 14rpx 0 0;
			margin-top: 10rpx !important;
			margin-bottom: 0 !important;
			display: flex;
			margin-left: 16rpx;
			box-sizing: border-box !important;

			.assets_item {
				align-items: center;
				display: flex;
				font-size: 25rpx;
				.assets_item_key {
					font-size: 26rpx;
					line-height: 64rpx;
					margin-right: 5rpx;
					color: #1a1a1a;
				}
			}
		}

		//  订单 售后列表
		.rel_container {
			position: relative;
			margin-top: 0;
			border-radius: 0 0 14rpx 14rpx;
			left: 16rpx;
			width: 92.6%;
			height: 160rpx;
			background: #fff;

			.top_line_box {
				padding-top: 40rpx;
				display: flex;
				box-sizing: border-box;
				justify-content: space-around;
				// text-align: center;

				.entrance_text {
					color: #1a1a1a;
					font-weight: 500;
					font-size: 26rpx;
					position: relative;
					top: 50rpx;
				}
			}
		}

		// 优惠劵
		.Coupon {
			width: 92.6%;
			height: 142rpx;
			background-color: #fff;
			border-radius: 14rpx;
			position: relative;
			left: 16rpx;
			margin-top: 20rpx;
			margin-bottom: 20rpx;
			display: flex;
			padding: 0 18rpx;
			box-sizing: border-box;
			justify-content: space-around;

			.assets_item_val {
				padding-top: 24rpx;

				.openBaitiaoRed {
					position: absolute;
					top: 0;
					left: 30%;
					height: 32rpx;
					line-height: 32rpx;
					font-size: 20rpx;
					padding: 0 16rpx;
					border-radius: 16rpx;
					white-space: nowrap;
					color: #fff;
					background: #e93b3d;
				}
				.assets_val {
					text-align: center;
					position: relative;
					color: #1a1a1a;
					font-size: 36rpx;
					font-family: JDZH-Regular;
					font-weight: 700;
				}

				.assets_item_key {
					display: block;
					margin-top: 12rpx;
					font-size: 24rpx;
					color: #262626;
					line-height: 1.2;
				}
			}
		}

		//客服
		.swiper-wrapper {
			display: flex;
			width: 92.6%;
			box-sizing: border-box;
			height: 160rpx;
			background: #fff;
			justify-content: space-around;
			position: relative;
			left: 16rpx;
			border-radius: 30rpx;
			margin-bottom: 40rpx;
			padding: 0 18rpx;
			align-items: center;
			.tools_item {
				text-align: center;
				box-sizing: border-box;
				display: inline-block;
				position: relative;
				padding-top: 18rpx;
				line-height: 1;
				.tools_icon {
					margin-left: 20%;
					margin-bottom: 12rpx;
				}
				.tools_item_keys {
					font-size: 26rpx;
					color: #262626;
					line-height: 1.2;
				}
			}
		}

		// 为你推荐  线条
		.title {
			display: flex;
			padding: 0 0.5rem;
			align-items: center;
			
			.line {
				flex: 1 1 auto;
				height: 0.05rem;
				background-color: #ccc;
			}

			.text {
				flex: 0 1 auto;
				position: relative;
				padding: 0 0.75rem;
				height: 1.5rem;
				line-height: 1.5rem;
				color: #999;
				font-size: 0.9rem;
			}
		}
	}
</style>
