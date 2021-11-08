export default function ({ $axios, redirect, route, store }) {
  // 可以配置一些axios默认配置

  // 请求拦截
  $axios.onRequest((config) => {
    // 添加token、公共请求参数等
    return config
  })

  // 响应拦截
  $axios.onResponse((res) => {
    return res
  })

  // 错误处理
  $axios.onError((error) => {
    return error
  })
}
