import http from '@/api'

// * 获取购物车列表
export const getShopApi = () => http.get('/api/shopping-cart/list')
