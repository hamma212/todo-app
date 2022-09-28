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
        <a class="button card-footer-item is-danger-light" @click="formActive = !formActive">
          <span>Edit</span>
          <span class="icon is-small">
            <i class="fas fa-pencil"></i>
          </span>
        </a>
        <a class="button card-footer-item is-success-light" @click="updateTask(task)">
          <span>Done</span>
          <span class="icon is-small">
            <i class="fas fa-check"></i>
          </span>
        </a>
      </div>
      <div :class="{ 'is-active': formActive }" id="form-modal" class="modal">
        <div class="modal-background" @click="formActive = false" />
          <div class="modal-content p-5">
            <div class="card has-background-white">
              <header class="card-header">
                <p class="card-header-title is-size-3">Edit Task:</p>
              </header>
              <div class="card-content">
                <div class="control is-expanded">
                    <input v-model="newSummary" class="input is-dark" type="text" placeholder="Task"  @keyup.enter="editTask(task) ; formActive = !formActive">
                </div>
              </div>
              <footer class="card-footer">
                <div class="field card-footer-item">
                  <div class="control">
                    <button @click="editTask(task); formActive = !formActive" class="button is-dark">Save Changes</button>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        <button @click="formActive = false" class="modal-close is-large" aria-label="close"></button>
      </div>
    </div>
  </div>
</template>

<script>
import {db} from '@/firebaseConfig'

export default {
    name: 'SingleTaskBox',
    props: ['task'],
    data() {
      return {
        formActive: false,
        newSummary: this.task.summary,
      }
    },
    firestore: function() {
        return {
            tasks: db.collection("tasks")
        }
    },
    methods: {
        deleteTask: function(task) {
            db.collection("tasks").doc(task.id).delete();
            this.$router.replace({name: 'todos'})
        },
        editTask: function(task) {
            db.collection("tasks").doc(task.id).update({
              'summary': this.newSummary
            });
        },
        updateTask: function(task) {
            db.collection("tasks").doc(task.id).update({
              'status': 'done'
            });
            this.$router.replace({name: 'done'})
        }
    }
}
</script>

<style scoped>
.task-box {
    margin: auto;
    width: 70%;
}
.card {
  overflow: auto;
}
.task-box {
  margin-bottom: 1em;
}
</style>
