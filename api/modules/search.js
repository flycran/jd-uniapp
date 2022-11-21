import http from '@/api'
// 搜索 
export const getsearchApi = (data) => http.get('/api/commodity/search',data)
// 详情
export const getfromidApi = (data) => http.get('/api/commodity/fromid?',data)