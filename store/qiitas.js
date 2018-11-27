import Vuex from 'vuex'

export const state = () =>({
      qiitas:null
})

export const getters = {
      qiitas:(state)=>state.qiitas
}

export const mutations = {
      qiitasMutan(state,{qiitasDatas}){
        state.qiitas = qiitasDatas;
      }
}

export const actions = {
  async qiitasActi({commit}){
    const qiitasDatas = await this.$axios.$get('https://qiita.com/api/v2/items?query=tag:vuex')
    commit('qiitasMutan',{qiitasDatas})
  }
}
