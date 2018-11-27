export const state = () => ({
    posts: null,
    postsCategories: null
})

export const getters = {
    posts: state => state.posts,
    postsCategories: state => state.postsCategories
}

export const mutations = {
    setposts(state, posts) {
        //console.log(posts)
        state.posts = posts
    },
    setPostsCategories(state, postsCategories) {
        state.postsCategories = postsCategories
    }

}

export const actions = {
    async addPost({ commit }, payload) {
        //console.log(posts)
        await this.$axios.$post('/posts.json', payload)
        const post = await this.$axios.$get('/posts.json')
        commit('setposts', post)
    },
    async posts({ commit }) {
        const posts = await this.$axios.$get('/posts.json')
        commit('setposts', posts)
    },
    async addPostsCategory({ commit }, payload) {
        const newCat = {}
        newCat[payload.slug] = payload
        //console.log(newCat)
        await this.$axios.$patch('/postscategory.json', newCat)
        const postsCategories = await this.$axios.$get('/postscategory.json')
        //const postsCategories = await this.$axios.$get('/postscategory/' + payload.id + '.json')
        commit('setPostsCategories', postsCategories)
    },
    async postsCategories({ commit }) {
        const postsCategories = await this.$axios.$get('/postscategory.json')
        commit('setPostsCategories', postsCategories)
    },

}