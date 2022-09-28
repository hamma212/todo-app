<template>
  <div class="auth">
        <template v-if="!user">
            <div class="navbar-item">
                <a class="button is-primary" @click="signInWithGoogle"> Sign in with Google </a>
            </div>
        </template>
        <template v-if="user">
            <div class="navbar-item">
                <div class="buttons">
                    <a class="button is-primary" @click="signOut">Sign Out</a>
                    <figure class="image is-32x32">
                        <img class="is-rounded" :src="user.photoURL" alt="avatar" referrerpolicy="no-referrer">
                    </figure>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
import { auth, provider } from "@/firebaseConfig";

export default {
    components: {},
    name: "LoginButton",
  data() {
    return {
      user: null
    };
  },
  beforeCreate: function() {
    auth.onAuthStateChanged(user => {
      if (user) {        
        this.user = user;
      } else {
        this.user = null;
      }
    });
  },
  methods: {
    signInWithGoogle: function() {
      auth.signInWithRedirect(provider)
        .then(result => {
          this.user = result.user;
          this.$router.replace({name: 'todos'})
        })
        .catch(err => console.log(err));
    },
    signOut: function() {
      auth.signOut()
        .then(() => {
          this.user = null;
          this.$router.replace({name: 'splash'})
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style>

</style>