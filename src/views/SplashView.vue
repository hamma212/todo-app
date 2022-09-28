<template>
  <div class="splash">
    <div class="section">
      <h1 class="is-size-1">Welcome</h1>
      <h2 class="is-size-2">Please Sign In To Continue!</h2>
    </div>
  </div>
</template>

<script>
import { auth } from "@/firebaseConfig";

export default {
  beforeCreate: function() {
    auth.onAuthStateChanged(user => {
      if (user) {        
        this.$router.push('/todos')
      }
    });
  }
};
</script>

