<template>
  <div class="section">
    <div class="todo" v-if="task !== false">
      <SingleTaskBox :task=task></SingleTaskBox>
    </div>
    <div v-else>
      Loading
    </div>
  </div>
</template>

<script>
import { db } from '@/firebaseConfig'
import SingleTaskBox from '@/components/SingleTaskBox.vue'

export default {
  props: ['id'],
  data: function() {
    return {
      task: false
    }
  },
  firestore: function() {
    return {
      task: db.collection("tasks").doc(this.id)
    }
  },
  beforeUpdate: function() {
    if (this.task === null) {
      this.$router.replace({name: '404'})
    }
  },
  components: {
    SingleTaskBox
  }


}
</script>

<style scoped>

</style>
