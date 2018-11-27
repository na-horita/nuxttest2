<template>
  <div>
    <h2>ログインページ</h2>
    <p>
      <button type="button" @click="login">ログインする.</button><br>
      <nuxt-link to="/">トップへ</nuxt-link>
    </p>
  </div>
</template>

<script>
import Cookies from 'universal-cookie'
export default{
  methods:{
    login(){
      const cookies = new Cookies()
      cookies.set('credential','true',{maxAge:7200})
      this.$router.push('/')
    }
  }
}
</script>