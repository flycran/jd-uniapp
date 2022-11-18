import http from '@/api'

// * 获取购物车列表
export const getShopApi = () => http.get('/api/shopping-cart/list')
// 登录
export const getloginApi = (data) => http.post('/api/user/login',data)
// 购物车选中
export const getselectApi = (id,selected) => http.get(`/api/shopping-cart/select/shop?id=${id}&selected=${selected}`)
// 商品
export const gethsdhsApi = (data) => http.get(`/api/shopping-cart/select`, data)
// 全部
export const gewholeApi = (data) => http.get(`/api/shopping-cart/select/all`, data)