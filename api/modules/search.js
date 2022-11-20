import http from '@/api'
// 登录
export const getsearchApi = (data) => http.get('/api/commodity/search',data)