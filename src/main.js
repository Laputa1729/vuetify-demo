import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
    router,
    vuetify,
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this;  // 安装全局事件总线，$bus就是当前应用的vm
    }
}).$mount('#app')
