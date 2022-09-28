<template>
  <div class="task-box">
    <div class="card is-size-4">
      <div class="card-content">
        {{task.summary}}
      </div>
      <div class="card-footer">
        <a class="button card-footer-item is-danger-light" @click="deleteTask(task)">
          <span>Delete</span>
          <span class="icon is-small">
            <i class="fas fa-trash"></i>
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import {db} from '@/firebaseConfig'

export default {
    name: 'DoneTaskBox',
    props: ['task'],
    firestore: function() {
        return {
            tasks: db.collection("tasks")
        }
    },
    methods: {
        deleteTask: function(task) {
            db.collection("tasks").doc(task.id).delete()
        }
    }
}
</script>

<style scoped>
.card-content {
  max-height: 5em;
  overflow: auto;
}
.card:hover {
    box-shadow: 0 0 11px #00d1b2; 
}
.task-box {
  margin-bottom: 1em;
}
</style>
