<!-- eslint-disable vue/multi-word-component-names -->
<script setup>

</script>

<template>
  <div id="main" class="flex items-center">
    <div id="img" class="flex-1"></div>
    <div id="form" class="flex-1 flex flex-col">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <div class="text-center">
        <button @click="signIn" type="submit">Sign In</button>
        <button @click="signIn" type="submit">Sign Up</button>
      </div>
      <p class="text-center">Forgot Password?</p>
    </div>
  </div>
</template>

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
        
        margin: 1.2em 3em;
        border-bottom: 2px solid rgb(50, 50, 50);

    }
   button {
    border: 2px solid #000;
    padding: 0.8em 1.5em;
    margin: 1em 2em;
    border-radius: 15px;
   }
   #form>p {
    padding-top: 1em;
   }
</style>
