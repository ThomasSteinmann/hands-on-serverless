<template>
  <div class="home">
    <v-row>
      <v-col align="center">
        <v-card width="80%">
          <v-card-title >
            <h1 class="primary--text">Tasks</h1>
          </v-card-title>
          <v-card-text>
            <v-simple-table>
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
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="task in tasks" :key="task.name">
                    <td><v-img contain max-width="50" :src="task.img"></v-img></td>
                    <td>{{ task.name }}</td>
                    <td>{{ task.description }}</td>
                    <td>{{ task.status }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
import tasks from "@/assets/tasks.json"

export default {
  name: "Home",
  data: function() {
    return {
      tasks: []
    }
  },
  mounted() {
    this.tasks = this.getTasks()
  },
  methods: {
    getTasks: function() {
      return tasks
    }
  },
};
</script>
