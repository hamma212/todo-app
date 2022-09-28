<template>
  <div class="task-box">
    <div class="card is-size-4">
      <div class="card-content">
        <router-link :to="{name: 'todo', params: {id: task.id} }"> {{task.summary}} </router-link>
      </div>
      <div class="card-footer">
        <a class="button card-footer-item is-danger-light" @click="deleteTask(task)">
          <span>Delete</span>
          <span class="icon is-small">
            <i class="fas fa-trash"></i>
          </span>
        </a>     
        <a class="button card-footer-item is-success-light" @click="updateTask(task)">
          <span>Done</span>
          <span class="icon is-small">
            <i class="fas fa-check"></i>
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import {db} from '@/firebaseConfig'

export default {
    name: 'TaskBox',
    props: ['task'],
    firestore: function() {
        return {
            tasks: db.collection("tasks")
        }
    },
    methods: {
        deleteTask: function(task) {
            db.collection("tasks").doc(task.id).delete()
        },
        updateTask: function(task) {
            db.collection("tasks").doc(task.id).update({
              'status': 'done'
            })
        }
    }
}
</script>

<style scoped>
.card-content {
  height: 2.7em;
  overflow: hidden;
}
.card:hover {
    box-shadow: 0 0 11px #00d1b2; 
}
.task-box {
  margin-bottom: 1em;
}
</style>
