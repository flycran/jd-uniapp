import {defineStore} from "pinia"
import { getinfor, getloginApi } from "../api/modules/login"

export const UserStore=defineStore('UserStore',{
	// 数据
	state: () => ({
		// 用户头像
		avatarUrl: uni.getStorageSync('USERINFO') || '',
		// token信息
		token:  uni.getStorageSync('TOKEN') || '',
		// 用户信息
		userinfo: {}
	}),
	// 函数
	actions: {
		// * 保存用户授权信息【头像】
		// saveUserProFile(info) {
		// 	this.avatarUrl = info
		// 	uni.setStorageSync('USERINFO', info)
		// },
		// * 用户登录
		async login(user) {
			// 1. 发起请求
			const data = await getloginApi(user)
			// 2. 存储token数据
			this.token = data.token
			console.log(this.token);
			uni.setStorageSync('TOKEN', data.token)
			// 3. 拉取用户信息
			// this.getUserinfo()
		},
		// // * 获取用户信息
		// async getUserinfo() {
		// 	const { data } = await getinfor()
		// 	console.log(data);
		// 	this.userinfo = data
		// },
	},
	// 计算属性
	getters: {}
})
