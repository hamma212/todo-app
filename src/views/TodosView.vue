<template>
  <div class="section">
    <h1 class="is-size-1">My Todos</h1>
    <div class="columns">
      <div class="column is-one-fifth"></div>
      <div class="column is-three-fifths">
        <AddTask></AddTask>
        <ul v-if="tasks !== false">
          <li class="is-size-2" v-for="task in tasks" :key="task.id">
            <TaskBox :task=task></TaskBox>
          </li>
        </ul>
        <div v-else>
          LOADING
        </div>
      </div>
      <div class="column is-one-fifth"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { db, auth } from '@/firebaseConfig'
import AddTask from '@/components/AddTask.vue'
import TaskBox from '@/components/TaskBox.vue'

export default {
  name: 'TodosView',
  data: function() {
    return {
      tasks: false
    }
  },
  firestore: function() {
    return {
      tasks: db.collection("tasks").where('user', '==', auth.currentUser.uid).where('status', '==', 'todo').orderBy('created')
    }
  },
  components: {
    AddTask,
    TaskBox,
  }
}
</script>

<style scoped>
a {
  color: black;
}
</style>