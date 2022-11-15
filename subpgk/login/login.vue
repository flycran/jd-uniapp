<template>
	<view class="login-item">
		<view class="comd-mnin"><image src="../../static/uni.png" mode=""></image></view>
		<view class="conmd-input">
			<uni-forms border>
				<uni-forms-item ><uni-easyinput v-model="username" placeholder="输入账号"></uni-easyinput></uni-forms-item>
				<uni-forms-item ><uni-easyinput type="password" v-model="password" placeholder="输入登录密码" passwordIcon></uni-easyinput></uni-forms-item>
			</uni-forms>
		</view>
		<view><button type="warn" @click="handleInput">登录</button></view>
	</view>
</template>

<script setup>
// vue3小程序生命周期函数
import { onShareAppMessage, onLoad, onShow, onHide } from '@dcloudio/uni-app'
import { reactive, toRefs } from 'vue'
import { getloginApi } from '../../api/modules/shop';
import { UserStore } from '../../store/usre';
const userStore= UserStore()
const state = reactive({
	username: 'admin',
	password: '123456a'
})
const handleInput = async() => {
	if (state.username.length < 2 || state.username.length > 16) return uni.showToast({ title: '账号不能小于2或者大于16', icon: 'none' })
	if (state.password.length < 6 || state.password.length > 16) return uni.showToast({ title: '密码不能小于6或者大于16', icon: 'none' })
	const passwordReg = /^(?![0-9]+$)(?![a-z]+$)[0-9a-z]{6,16}$/
	if(!passwordReg.test(state.password)) return uni.showToast({ title: '密码里面必须要有字母', icon: 'none' })
	console.log(state.username,state.password);
	await userStore.login({username:state.username,password:state.password})
	uni.switchTab({ url: '/pages/my/my' })
}

// 页面加载
onLoad(message => {})

// 页面显示
onShow(() => {})

// 页面隐藏
onHide(() => {})

// 页面分享(不定义该函数 页面将无法分享)
onShareAppMessage(() => {})
const { username, password } = toRefs(state)
</script>

<style lang="scss">
.comd-mnin {
	width: 100%;
	height: 400rpx;
	image {
		width: 100%;
		height: 100%;
	}
}
.conmd-input {
	padding: 0 30rpx;
	.input-1 {
		height: 100rpx;
		border-bottom: 2rpx solid #aa00ff;
		display: flex;
		align-items: center;
	}
}
button {
	margin: 0 20rpx;
	border-radius: 20rpx;
}
</style>
