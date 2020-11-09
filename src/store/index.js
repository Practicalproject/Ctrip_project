import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

let state = {}
let mutations = {}
let actions = {}
let getters = {}

import aishuaikang from "./modules/aishuaikang"

let store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules: {
        aishuaikang
    }
})

export default store