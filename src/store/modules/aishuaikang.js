let state = {
    headerHeight: 0,
    bannerHeight: 0,
    hotListWrapperTop: 0
}
let mutations = {
    SETHEADERHEIGHT(state, data) {
        state.headerHeight = data
    },
    SETBANNERHEIGHT(state, data) {
        state.bannerHeight = data
    },
    SETHOTLISTWRAPPERTOP(state, data) {
        state.hotListWrapperTop = data
    }
}
let actions = {}
let getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}