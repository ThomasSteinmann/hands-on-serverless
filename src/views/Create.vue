<template>
  <div class="about">
    <v-row>
      <v-col align="center">
        <v-card width="80%">
          <v-card-title>
            <h1 class="primary--text pa-7">Create new Task</h1>
          </v-card-title>
          <v-card-text>
            <v-list class="px-10">
              <v-list-item>
                <v-list-item-content>
                  <v-text-field v-model="name" label="Name"/>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-text-field v-model="description" label="Description" />
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-select v-model="status" :items="['ToDo', 'Doing', 'Done']" label="Status" />
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="secondary" to="/" class="mx-5 mb-5">Submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// import axios from 'axios' // HTTP client


export default {
  name: "Create",
  data: function () {
    return {
      name: null,
      description: null,
      status: null,
    };
  },
  methods: {
    submit: function(){
      // TODO: Send task to cloud function
      // axios.post()
    }
  }
};
</script>
