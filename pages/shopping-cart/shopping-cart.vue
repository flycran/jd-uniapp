<template>
	<view class="shop-cart">
		<template v-if="state.top === 'sop'">
			<view class="hom">
				<view class="hom-left">
					<uni-icons type="location" size="16"></uni-icons>
					<text>长沙市岳麓区</text>
				</view>
				<view class="hom-right">
					<text>|</text>
					<text @click="topsop('lop')">编辑</text>
				</view>
			</view>
			<view class="lo">
				<text class="lp">全部({{ fullist.length }})</text>
				<text>跨店满减(0)</text>
			</view>
			<shopping class="fomrs" v-for="item in fullist" :key="item.id" :item="item" @change="changeShop(item, $event)"></shopping>
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
				<view>
					<MyCheckbox :value="all" @change="changeAll"></MyCheckbox>
					<text>全选</text>
				</view>
				<view class="lko">
					<view class="">总计:￥{{ price }}</view>
					<button class="mini-btn" type="warn">领卷结算</button>
				</view>
			</view>
		</template>
		<template v-else>
			<view class="right">
				<text style="color:	DarkGray;">|</text>
				<text @click="topsop('sop')">编辑</text>
			</view>
			<shopping class="fomrs" v-for="item in fullist" :key="item.id" :item="item" @change="changeShop(item, $event)"></shopping>
			<view class="lop"></view>
			<view class="foklo">
				<view>
					<MyCheckbox :value="all" @change="changeAll"></MyCheckbox>
					<text>全选</text>
				</view>
				<view class="lko">
					<button class="mini-btn" type="primary" plain size="mini">移至收藏</button>
					<button class="mini-btn" type="default" plain size="mini" @click="deljiete">删除</button>
				</view>
			</view>
		</template>
	</view>
</template>

<script setup>
import { onShow } from '@dcloudio/uni-app'
import { reactive, ref, toRefs, computed } from 'vue'
import { gewholeApi, getShopApi, getdeletApi } from '@/api/modules/shop'
import MyCheckbox from '../../components/shopping/MyCheckbox.vue'
import { selectAll } from '@/utils/index.js'
import { UserStore } from '../../store/usre'
const userStore = UserStore()
const state = reactive({
	top: 'sop'
})

const price = computed(() => {
	let arr = []
	fullist.value.forEach(item => {
		arr = arr.concat(item.commoditys)
	})
	const lt = arr.filter(item => item.selected == 1)
	const price = lt.reduce((sum, item) => sum + item.number * item.commodity.price, 0)
	return price
})
const fullist = ref([])
const ids=ref([])
const init = async () => {
	if (!userStore.token) return
	const { data } = await getShopApi(userStore.token)
	fullist.value = data
}
function changeShop(item, value) {
	item.selected = value
}
async function changeAll(v) {
	all.value = v
	await gewholeApi({ selected: v })
}
const { selectAll: all } = selectAll({
	selectKey: 'selected',
	data: fullist
})
const topsop = top => {
	state.top = top
}
const deljiete=async()=>{
	console.log(selectGoods.value);
	await getdeletApi({ids: selectGoods.value.map(e => e.id)})
	init()
}
const selectGoods = computed(() => {
	const ar = []
	fullist.value.forEach(item=>{
		item.commoditys.forEach(item=>{
			if(item.selected){
				ar.push(item) 
			}
		})
	})
	return ar
})
onShow(() => {
	init()
})
</script>

<style lang="scss">
.shop-cart {
	background: #f2f2f2;
}
.lop {
	height: 120rpx;
	width: 100%;
	background: #f2f2f2;
}
.right {
	width: 100%;
	text-align: right;
	margin-bottom: 30rpx;
	background: #ffffff;
	text {
		margin-right: 30rpx;
		font-size: 24rpx;
	}
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
		font-size: 24rpx;
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
.foklo {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	height: 140rpx;
	background: #aa00ff;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 30rpx;
	margin-top: 120rpx;
	.lko {
		display: flex;
		justify-content: space-between;
		align-items: center;
		button {
			height: 70rpx;
			line-height: 70rpx;
			border-radius: 20rpx;
			margin-left: 30rpx;
		}
	}
}
</style>
