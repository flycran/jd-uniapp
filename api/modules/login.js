import http from '@/api'
// 登录
export const getloginApi = (data) => http.post('/api/user/login',data)
// 登录
export const getinfor = (data) => http.get('/api/user/me',data)