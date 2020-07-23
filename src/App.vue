<template>
  <v-app>
    <v-card>
      <v-toolbar id="nav">
        <v-toolbar-title>Hands-On Serverless</v-toolbar-title>
        <v-spacer/>
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
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
