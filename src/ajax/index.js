import axios from 'axios';

export const post = (url, params) => {
  return axios.post(url, params);
}
export const postFile = (url, formData, config) => {
  return axios.post(url, formData, {
    ...config,
    'Content-type': 'multipart/form-data'
  });
}
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  return response.data;
}, error => {
  return Promise.reject(error);
})
