<template>
	<view class="login-item">
		<view class="comd-mnin"><image src="../../static/04994fc1c9ec3d6a635930510fd83f00.jpeg" mode=""></image></view>
		<view class="conmd-input">
			<uni-forms ref="formEl" border :modelValue="state" :rules="rules">
				<uni-forms-item name="username"><uni-easyinput v-model="username" placeholder="输入账号"></uni-easyinput></uni-forms-item>
				<uni-forms-item name="password"><uni-easyinput v-model="password" type="password" placeholder="输入登录密码" passwordIcon></uni-easyinput></uni-forms-item>
			</uni-forms>
		</view>
		<view><button type="warn" @click="handleInput">登录</button></view>
	</view>
</template>

<script setup>
// vue3小程序生命周期函数
import { onShareAppMessage, onLoad, onShow, onHide } from '@dcloudio/uni-app'
import { reactive, toRefs, ref } from 'vue'
import { getloginApi } from '../../api/modules/shop'
import { UserStore } from '../../store/usre'
const formEl = ref()
const userStore = UserStore()
const state = reactive({
	username: 'wsc',
	password: '123456a'
})
const rules = {
	username: {
		rules: [
			{
				required: true,
				errorMessage: '请输入用户名'
			},
			{
				minLength: 2,
				maxLength: 16,
				errorMessage: '用户名在 {minLength} 到 {maxLength} 个字符'
			}
		]
	},
	password: {
		rules: [
			{
				required: true,
				errorMessage: '请输入密码'
			},
			{
				minLength: 6,
				maxLength: 16,
				errorMessage: '密码长度在 {minLength} 到 {maxLength} 个字符'
			},
			{
				pattern: '[0-9]',
				errorMessage: '密码必须包含数字'
			},
			{
				pattern: '[a-z]',
				errorMessage: '密码必须包含字母'
			}
		]
	}
}
const handleInput = async () => {
	formEl.value
		.validate()
		.then(async res => {
			await userStore.login({ username: state.username, password: state.password })
			uni.switchTab({ url: '/pages/my/my' })
		})
		.catch(err => {
		})
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
