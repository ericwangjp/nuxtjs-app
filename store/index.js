// 默认情况下，vuex在开发模式下启用严格模式，在生产模式下关闭模式
// 禁用严格模式：export const strict = false

// 您可以将其他插件添加到 store（在模块模式下），将其放入store/index.js文件中
// import myPlugin from 'myPlugin'
// export const plugins = [myPlugin]

// state的值应该始终是function
export const state = () => ({
  someValue: '',
})

export const actions = {
  // nuxt约定的服务端初始化时调用的钩子函数
  // Nuxt.js 调用它的时候会将页面的上下文对象作为第 2 个参数传给它（服务端调用时才会酱紫哟）
  // 异步nuxtServerInit操作必须返回 Promise 来通知nuxt服务器等待它们
  // actions: {
  //   async nuxtServerInit({ dispatch }) {
  //     await dispatch('core/load')
  //   }
  // }
  nuxtServerInit(store, context) {
    // 如在服务端将用户数据传递给客户端的状态树
    // 如果你使用状态树模块化的模式，只有主模块（即 store/index.js）适用设置该方法（其他模块设置了也不会被调用）
    // nuxtServerInit 方法接收的上下文对象和 fetch 的一样，但不包括 context.redirect() 和 context.error()
    // if(context.req.session.user){
    //   store.commit('user',context.req.session.user)
    // }
  },
  setSomeValue({ commit }) {
    const newValue = 'whatever'
    commit('changeSomeValue', newValue)
  },
}

export const mutations = {
  changeSomeValue(state, newValue) {
    state.someValue = newValue
  },
}
