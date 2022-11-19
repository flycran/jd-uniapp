<script lang="ts" setup>
import {OrderStore} from '../../store/order'
import {computed} from 'vue'

const orderStore = OrderStore()

const orderList = computed(() => {
  const {list} = orderStore
  const nr = []
  list.forEach(e => {
    const commoditys = e.commoditys.filter(e => e.selected)
    if(commoditys.length)
      nr.push(({
        ...e,
        commoditys
      }))
  })
  console.log(nr)
  return nr
})
// commodity: {id: 58, name: "联想拯救者R9000P 电竞游戏笔记本电脑", price: "9199.00", stock: 489454,…}
// cover: "09f57d999b9a300fdfcb45e31c7977ba.jpg"
// createdAt: "2022-06-22T11:35:56.000Z"
// discount: 100
// id: 58
// name: "联想拯救者R9000P 电竞游戏笔记本电脑"
// price: "9199.00"
// specification: ["16G内存 512G固态 标配版", "16G内存 1TB固态 升级版", "32G内存 512G固态 升级版", "32G内存 1TB固态 升级版", "64G内存 1TB固态 升级版",…]
// stock: 489454
// tags: []
// id: 66
// number: 1
// selected: 1
// specification: "16G内存 512G固态 标配版"
</script>

<template>
  <uni-card v-for="item in orderList" :key="item.id" :title="item.name">
    <view class="goods" v-for="goods in item.commoditys">
      <img class="img" :src="'http://jds.flycran.xyz/image/' + goods.commodity.cover" />
      <view class="info">
        <view class="name">
          {{goods.commodity.name}}
        </view>
        <view class="specification">
          {{goods.specification}}
        </view>
        <view class="priceb">
          <view class="price">
            <text style="font-size: 12px;">
              ￥
            </text>
            <text style="font-size: 16px;font-weight: bold">
              {{goods.commodity.price}}
            </text>
          </view>
          <view class="count">
            x {{goods.number}}
          </view>
        </view>
      </view>
    </view>
  </uni-card>
</template>

<style lang="scss" scoped>
.goods {
  display: flex;
  margin-bottom: 16rpx;
  .img {
    width: 200rpx;
    height: 200rpx;
  }
  .info  {
    flex: 1;
    width: 0;
    flex-shrink: 0;
    padding-left: 16rpx;
    .name {
      font-weight: bold;
      font-size: 16px;
      color: #1a1a1a;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      height: 44rpx;
      line-height: 44rpx;
    }
    .specification {
      font-size: 12px;
    }
    .priceb {
      display: flex;
      justify-content: space-between;
      .price {
        color: red;
      }
      .count {

      }
    }
    .count {

    }
  }
}
</style>
<script lang="ts">
export default {name: 'Settlement'}
</script>