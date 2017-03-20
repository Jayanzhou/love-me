/**
 * Created by jayan on 2017/3/20.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action'
import mutations from './mutations'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    state: {
        loveNum: 0,
        hateNum: 0,
        picNum: 0//图片的下标
    },
    actions,
    mutations,
    strict: debug
});