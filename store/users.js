export const state = () => ({
    isLoggedIn: false,
    users: null
})

export const getters = {
    isLoggedIn: state => state.isLoggedIn,
    users: state => state.users

}

export const mutations = {
    setUsers(state, users) {
        //console.log(users)
        state.isLoggedIn = true
        state.users = users
    },
}

export const actions = {
    async register({ commit }, payload) {
        //console.log(users)
        const users = payload.id
        commit('setUsers', users)
    }
}