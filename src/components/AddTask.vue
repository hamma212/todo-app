<template>
    <div class="add section">
        <div class="field is-grouped">
            <div class="control is-expanded">
                <input v-model="newTask" class="input is-primary" type="text" placeholder="Add a task" @keyup.enter="addNewTask">
            </div>
            <div class="control">
                <a class="button is-dark" @click="addNewTask">Add</a>
            </div>
        </div>
    </div>
</template>

<script>
import { db, auth } from '@/firebaseConfig'
export default {
    name: 'AddTask',
    data: function() {
        return {
            tasks: false,
            newTask: ""
        }
    },
    firestore: function() {
        return {
            tasks: db.collection("tasks").where('user', '==', auth.currentUser.uid)
        }
    },
    methods: {
        addNewTask: function() {
            let newTask = {
                summary: this.newTask,
                status: 'todo',
                user: auth.currentUser.uid,
                created: new Date()
            };
            this.newTask = ""
            if (newTask.summary != '') {
                db.collection("tasks").add(newTask);
            }
        }
    }

}
</script>