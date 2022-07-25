<!-- eslint-disable vue/multi-word-component-names -->
<script setup></script>

<template>
  <form @submit.prevent="checkLog" class="main lg:max-h-screen lg:pt-32 xl:pt-24">
    <div class="contain flex flex-col lg:flex-row lg:mx-32 lg:space-x-10 lg:rounded-xl lg:px-11 xl:mx-64 xl:py-8">
      <div class="img text-center w-full lg:flex-1">
        <img
          class="mx-auto mt-6 w-48 sm:w-64 lg:w-72"
          src="../assets/logo.png"
          alt=""
        />
        <p class="font-bold text-orange-500 text-2xl py-3 md:py-5">
          The Best Banking Account Management
        </p>
      </div>
      <div class="lg:flex-1 lg:my-auto">
        <div class="user flex flex-col">
          <label class="mt-2" for="username">Username :</label>
          <input
            class="border rounded-md p-2 mt-1"
            id="username"
            :class="{ error: errorUser.status }"
            type="text"
            placeholder="Username"
            v-model="login.username"
          />
          <p class="error-user text-red-500">{{ errorUser.text }}</p>
        </div>
        <div class="pass flex flex-col">
          <label class="mt-2" for="username">Password :</label>
          <input
            class="border rounded-md p-2 mt-1"
            id="password"
            :class="{ error: errorPass.status }"
            type="password"
            placeholder="Password"
            v-model="login.password"
          />
          <p class="error-pass text-red-500">{{ errorPass.text }}</p>
        </div>
        <div class="mt-6">
          <button
            class="text-center w-full py-2 bg-orange-400 rounded-md text-white font-bold"
            type="submit"
            @click="signIn"
          >
            Sign In
          </button>
        </div>
        <div class="flex flex-row mt-3">
          <p>I don't have account.</p>
          <p class="pl-2 text-orange-500 font-bold">Sign Up</p>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      login: {
        username: "",
        password: "",
      },
      errorUser: {
        text: "",
        status: false,
      },
      errorPass: {
        text: "",
        status: false,
      },
    };
  },
  methods: {
    checkLog() {
      console.log(this.login);
      if (this.login.username.length < 6 || this.login.username.length > 18) {
        this.errorUser = {
          text: "Look failed! Username must be 6-18 character.",
          status: true,
        };
      } else {
        this.errorUser = {
          text: "",
          status: false,
        };
      }
      if (this.login.password.length < 1) {
        this.errorPass = {
          text: "Look failed! You must enter a password.",
          status: true,
        };
      }
      console.log(this.errorPass.status);
    },
    signIn() {
      // if (this.error.status == false) return this.$emit("login");
    },
  },
};
</script>

<style scoped>
input.error {
  border-color: red;
}
@media only screen and (max-width:400px) {
  .main {
    padding: 1em;
  }
}
@media only screen and (max-width:1023px) and (min-width: 401px) {
  .main {
    padding: 2em;
  }
}
@media only screen and (min-width:1024px) {
  .main {
    height: 100vh;
    background-image: url(../assets/bg-login.png);
  }
  .contain {
    background-color: white;
  }
}
</style>
