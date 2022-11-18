<template>
	<view class="shop">
		<view class="fomrs">
			<view class="fomrs-lo" ref="shopEl">
				<MyCheckbox :value="all" @change="all = $event"></MyCheckbox>
				<uni-icons type="shop-filled" size="20"></uni-icons>
				<text>{{ props.item.name }}</text>
				<uni-icons type="right" size="16"></uni-icons>
			</view>
			<view class="fomrs-o" v-for="item2 in props.item.commoditys" :key="item2.id">
				<MyCheckbox :value="item2.selected" @change="selectItem(item2, $event)"></MyCheckbox>
				<view class="order-minm">
					<view class="minm-list">
						<view class="list-min"><image :src="'http://jdm.flycran.xyz/image/' + item2.commodity.cover" mode=""></image></view>
						<view class="list-him">
							<view class="him-lo">
								<text>{{ item2.commodity.name }}</text>
							</view>
							<view class="him-poo">{{ item2.specification }}</view>
							<view class="him-gom">
								<text>￥{{ item2.commodity.price }}</text>
								<view class="gom-l">
									<uni-number-box :min="1" :max="9">{{ item2.number }}</uni-number-box>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { onShow } from '@dcloudio/uni-app'
import { onMounted, reactive, toRefs, watch, ref } from 'vue'
import { gethsdhsApi, getselectApi, getShopApi } from '@/api/modules/shop'
import { UserStore } from '../../store/usre'
import {selectAll} from '@/utils/index.js'
import MyCheckbox from '@/components/shopping/MyCheckbox.vue'
const emit = defineEmits(['change'])
const userStore = UserStore()
const state = reactive({
	fullist: [],
	selected: ''
})
const props = defineProps(['item'])
const { commoditys } = toRefs(props.item)
const {selectAll: all} = selectAll({
	selectKey: 'selected',
	data: commoditys
})
async function selectItem(item, value) {
	item.selected = value
	await gethsdhsApi({id: item.id,selected: value})
}

watch(all, (value) => {
	emit('change', value)
}, {
	immediate: true
})
watch(all, async (value) => {
	await getselectApi(props.item.id,value)
})
watch(() => props.item.selected, async (value) => {
	all.value = value
})
const shopEl = ref()
onMounted(() => {
})
</script>

<style lang="scss">
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
</style>
