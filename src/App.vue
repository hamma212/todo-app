<template>
  <div id="app">
    <nav class="navbar is-dark">
      <a class="navbar-burger" data-target="navbar-example" :class="{ 'is-active': isActive }" @click="isActive = !isActive">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
      </a>
      <div class="navbar-menu" :class="{ 'is-active': isActive }">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/todos">My Todos</router-link>
          <router-link class="navbar-item" to="/done">My Dones</router-link>
        </div>
        <div class="navbar-end">
          <LoginButton></LoginButton>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import LoginButton from '@/components/LoginButton.vue'
import { auth } from '@/firebaseConfig'

export default {
  components: { LoginButton },
  beforeCreate: function() {
    auth.getRedirectResult().then(result=>{
      if (result.user) {
        this.$router.push("/todos")
      }
    }).catch(() => {
      this.$router.push("/")
    })
  },
  data: function() {
    return {
      isActive: false
    }
  }
}
</script>


<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
html {
  background-color: lightgray;
}
.navbar-menu {
  text-align: left;
}
</style>
