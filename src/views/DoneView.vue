<template>
  <div class="done section">
    <div>
        <h1 class="h is-size-1">My Completed Tasks</h1>
    </div>
    <div class="columns">
      <div class="column is-one-fifth"></div>
      <div class="column is-three-fifths">
        <ul>
          <li class="is-size-2" v-for="task in tasks" :key="task.id">
            <DoneTaskBox :task=task></DoneTaskBox>
          </li>
        </ul>
      </div>
      <div class="column is-one-fifth"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { db, auth } from '@/firebaseConfig'
import DoneTaskBox from '@/components/DoneTaskBox.vue'

export default {
  name: 'TodosView',
  data: function() {
    return {
      tasks: false
    }
  },
  firestore: function() {
    return {
      tasks: db.collection("tasks").where('user', '==', auth.currentUser.uid).where('status', '==', 'done')
    }
  },
  methods: {

  },
  components: {
    DoneTaskBox
  }
}
</script>

<style scoped>
a {
  color: black;
}
.h {
  margin-bottom: 1em;
}
</style>