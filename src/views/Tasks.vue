<template>
  <div class="tasks">
    <v-row>
      <v-col align="center">
        <v-card width="80%">
          <v-card-title>
            <h1 class="primary--text pa-7">Tasks</h1>
          </v-card-title>
          <v-card-text>
            <v-simple-table class="px-10">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th></th>
                    <th class="text-left">
                      <h2>Task Name</h2>
                    </th>
                    <th class="text-left">
                      <h2>Description</h2>
                    </th>
                    <th class="text-left">
                      <h2>Status</h2>
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="task in tasks" :key="task.name">
                    <td>
                      <v-img height="75" width="50" contain :src="task.img"></v-img>
                    </td>
                    <td>{{ task.name }}</td>
                    <td>{{ task.description }}</td>
                    <td>{{ task.status }}</td>
                    <td>
                      <v-btn fab icon small>
                        <v-icon @click="deleteTask(task)" color="primary">mdi-minus</v-icon>
                      </v-btn>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn to="/create" fab color="secondary" class="mx-5 mb-5">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios"; // HTTP client

export default {
  name: "Tasks",
  data: function () {
    return {
      tasks: [],
    };
  },
  mounted() {
    this.getTasks().then((tasks) => (this.tasks = tasks.data));
  },
  methods: {
    getTasks: function () {
      return axios.get(`${process.env.VUE_APP_BACKEND_URL}/tasks`);
    },
    deleteTask: function (deletedTask) {
      this.tasks = this.tasks.filter( task => task.name != deletedTask.name )
      axios.delete(`${process.env.VUE_APP_BACKEND_URL}/tasks/${deletedTask.name}`)
      return deletedTask;
    },
  },
};
</script>
