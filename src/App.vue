<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-btn v-if="isAuthenticated" @click="logout" target="_blank" text>
        logout
      </v-btn>
      <v-btn v-else text href="/">login</v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  beforeCreate() {
    this.$store.commit("initializeStore");
    const access = this.$store.state.access;
    if (access) {
      this.$http.defaults.headers.common["Authorization"] = "JWT" + access;
    } else {
      this.$http.defaults.headers.common["Authorization"] = "";
    }
  },
  data: () => ({
    bool: false,
  }),

  methods: {
    logout() {
      localStorage.removeItem("access");
      this.$store.state.access = "";
      this.$router.push("/");
    },
  },
};
</script>
