<!-- eslint-disable vue/multi-word-component-names -->
<script setup>

</script>

<template>
  <div id="main" class="flex items-center">
    <div id="img" class="flex-1"></div>
    <div id="form" class="flex-1 flex flex-col">
      <input
        id="username"
        :class="{ error: error.status }"
        type="text"
        placeholder="Username"
        v-model="login.username"
      />
      <p class="error-text text-center" v-if="error.status">{{ error.text }}</p>
      <input
        id="password"
        type="password"
        placeholder="Password"
        v-model="login.password"
      />
      <div class="text-center">
        <button @click="signIn" type="submit">Sign In</button>
        <button @click="signUp" type="submit">Sign Up</button>
      </div>
      <p class="forgot-pass text-center">Forgot Password?</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: {
        username: "",
        password: "",
      },
      error: {
        text: "",
        status: false,
      }
    }
  },
  methods: {
    signIn() {
      console.log(this.login);
      if(this.login.username.length <6 ||this.login.username.length >18) {
        this.error = {
          text: "Look failed! Username must be 6-18 character.",
          status: true,
        }
      } else {
        this.error = {
          text: "",
          status: false,
        }
      }     
    }
  },
};
</script>

<style scoped>
#main {
  max-width: 1000px;
  height: 500px;
  background-color: white;
  border-radius: 30px;
  margin: 4.5em auto;
  font-size: 1.3em;
}
#img {    
  height: 100%;
  background-image: url(../assets/h1.jpg);
  background-position: center;
  background-repeat: no-repeat;
  -webkit-border-radius: 30px;
}
#form {
        
}
input {
  margin: 0.5em 3em;
  padding: 0.5em;
  border: 2px solid white;
  border-bottom-color: rgb(61, 61, 61);
}
input.error {
  border-color:red ;
  border-radius: 10px;
}
.error-text {
  color: red;
  font-size: 0.8em;
  margin: 0 3em;
  background-color: yellow;
  border-radius: 5px;
}
button {
  border: 2px solid #000;
  padding: 0.8em 1.5em;
  margin: 1em 2em;
  border-radius: 15px;
}
.forgot-pass {
  padding-top: 1em;
}
</style>
