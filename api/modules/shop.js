import http from '@/api'

// * 获取购物车列表
export const getShopApi = () => http.get('/api/shopping-cart/list')
// 登录
export const getloginApi = (data) => http.post('/api/user/login',data)