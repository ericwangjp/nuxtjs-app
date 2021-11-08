import Vue from 'vue'
import moment from 'moment'

let dateFormat = {
  install(Vue) {
    Vue.prototype.$dateFormat = {
      moment: (date) => {
        let newMoment = new moment(date)
        newMoment.locale('zh-cn') // moment.js 默认为英文，可通过此方法设置中文
        return newMoment
      },
    }
  },
}
