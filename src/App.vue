<template>
  <login @login.once="callback" v-if="!login.isLog"/>
  <home v-if="login.isLog" />
</template>

<script>
import Login from "./components/Login.vue";
import Home from "./components/Home.vue";

export default {
  components: {
    Login,
    Home,
},
  data() {
    return {
      login: {
        isLog: false,
      },
    }
  },
  methods: {
    callback() {
      this.login.isLog = !this.login.isLog;
      console.log(this.login);
    }
  },
}

</script>

<style scoped></style>
