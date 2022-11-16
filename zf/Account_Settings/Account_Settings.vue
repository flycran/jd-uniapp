<template>
	<view class="t">
		<!-- 	<view class="account_section_v2">
			<view class="account_section_title">
				<span class="account_section_title_left">
					管理我的账户
				</span>
			</view>
 -->
		<!-- 登陆状态 -->
		<!-- <view class="account_list">
				<view class="current_account"> -->
		<!--当前登录的图标-->
		<!-- 	<view class=""> </view>
				</view>
			</view>
		</view> -->

		<!-- 收货地址管理 -->
		<view class="account_manage">
			<view class="item">
				收货地址管理
			</view>

			<view class="item" style="color: #999; font-size: 24rpx; left: -40rpx; position: relative;">
				管理我的地址
				<uni-icons customPrefix="iconfont" type="forward" size="24rpx" color="#999"></uni-icons>
			</view>
		</view>

		<view class="vc">
			<!--  账户与安全  -->
			<view class="account_manage" style="margin: 0;">
				<view class="item">
					账户与安全
				</view>

				<view class="item" style="color: #999; font-size: 24rpx; left: -40rpx; position: relative;">
					密码/实名认证等管理
					<uni-icons customPrefix="iconfont" type="forward" size="24rpx" color="#999"></uni-icons>
				</view>
			</view>

			<!-- 线条 -->
			<view style="border: #9999991f solid 1rpx; "></view>

			<!-- 京东支付密码  -->
			<view class="account_manage" style="margin: 0">
				<view class="item">
					京东支付密码
				</view>

				<view class="item" style="color: #999; font-size: 24rpx; left: -40rpx; position: relative;">
					去设置
					<uni-icons customPrefix="iconfont" type="forward" size="24rpx" color="#999"></uni-icons>
				</view>
			</view>

			<view style="border: #9999991f solid 1rpx; "></view>

			<!-- 京东支付密码  -->
			<view class="account_manage" style="margin: 0">
				<view class="item">
					隐私设置
				</view>

				<view class="item" style="color: #999; font-size: 24rpx; left: -40rpx; position: relative;">
					<uni-icons customPrefix="iconfont" type="forward" size="24rpx" color="#999"></uni-icons>
				</view>
			</view>
		</view>

		<!-- 退出登陆 -->
		<view class="msite_foot">
			<view class="logo">
				意见反馈
			</view>
			<view class="openapp logo">
				京东客服端
			</view>
			<view class="login_out logo">
				退出登录
			</view>
		</view>

		<!-- 底部log -->
		<view class="wx_footer">
			<view
				class="jd_logo"
				style="display: block; width: 400rpx; height: 80rpx; margin: 0 auto; background: url('../../static/wd_jd_tp/下载.png') no-repeat; background-size: 100%;"
			>
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
	.t {
		background: #f7f7f7;
		width: 100vw;
		height: 100vh;

		.account_manage {
			display: flex;
			width: 100%;
			background: #fff;
			position: relative;
			margin-bottom: 15rpx;
			height: 88rpx;
			border-radius: 10rpx;
			align-items: baseline;
			justify-content: space-between;

			.item {
				padding: 25rpx;
			}
		}

		// 退出登陆
		.msite_foot {
			display: flex;
			margin-top: 40rpx;
			justify-content: space-around;
			color: #666;
			.logo {
				display: flex;
			}
		}

		//
		.wx_footer {
			
			margin: 85rpx 0 75rpx;
		}
	}

	// 管理帐号
	// .account_section_v2 {
	// 	// background: #fff;
	// 	background: #83ffe5;
	// 	height: 311rpx;
	// 	position: relative;
	// 	border-radius: 0 0 24rpx 24rpx;

	// 	.account_section_title {
	// 		display: flex;
	// 		padding: 18rpx 10rpx 0;
	// 		margin-bottom: 30rpx;
	// 	}

	// 	.account_list {
	// 		position: relative;
	// 		padding: 4rpx 3px 30rpx;
	// 		background: #fff9f9;
	// 		height: 160rpx;
	// 		width: 92.6%;
	// 		left: 16rpx;
	// 		border: 2rpx solid #ff414e;
	// 		// box-sizing: border-box;
	// 		border-radius: 20rpx;
	// 		.current_account {
	// 			padding: 20rpx 15rpx 15rpx;
	// 		}
	// 	}}
</style>
