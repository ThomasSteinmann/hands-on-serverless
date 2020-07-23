<template>
  <v-app>
    <v-card id="nav" name="Toolbar">
      <v-toolbar>
       
        <v-toolbar-title>
          <h2 class="secondary--text" >Hands-On Serverless</h2>
        </v-toolbar-title>

        <v-spacer />

        <v-avatar tile>
          <v-img contain src="firebase.png" />
        </v-avatar>

        <v-avatar class="mx-5" tile>
          <v-img contain src="azure.png" />
        </v-avatar>

        <v-avatar tile>
          <v-img contain src="aws.png" />
        </v-avatar>

        <v-spacer />

        <v-toolbar-title>
          <router-link to="/">Tasks</router-link>|
          <router-link to="/create">Create</router-link>
        </v-toolbar-title>
      </v-toolbar>
    </v-card>

    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>

<style>
#nav a {
  font-weight: bold;
  color: #0065a0;
}
#nav a.router-link-exact-active {
  color: #e9004b;
}
</style>
