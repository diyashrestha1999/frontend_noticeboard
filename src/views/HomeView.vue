<template>
  <div>
    <h1>Home</h1>
    <span :src="user_data">user data: {{ user_data }}</span>
    <v-btn @click="getMe()">click me</v-btn>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user_data: "",
    };
  },
  // mounted() {
  //   this.getMe();
  // },
  methods: {
    getMe() {
      // const config = {
      //   headers: {
      //     Authorization: `JWT ${localStorage.getItem("access")}`,
      //   },
      // };
      this.$http
        .get("api/posts/", this.config)
        .then((response) => {
          console.log(response);
          this.user_data = response.data.username;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
