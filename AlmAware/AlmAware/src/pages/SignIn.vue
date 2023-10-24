<script setup>
import Button from '../components/CustomButton.vue'
import TextInput from '../components/formItems/FormInput.vue'


</script>

<template>
  <main>
      <h1>Welcome Back</h1>
      <form>
        <TextInput  placeholder="Email" type="mail"/>
        <TextInput placeholder="Password" type="password" />
        <router-link to="#" class="link">Forgotten password ?</router-link>
      </form>

      <router-link to="/home/"><Button name="Sign in" type="btn-unibo" ></Button></router-link>
      <div class="link-container">
        <p class="link">Not account yet?</p> <router-link to="/signup/" class="sign-link">  Sign up</router-link>
      </div>
      
  </main>
</template>

<style ang="css" scoped>
main {
  background-image: url(../assets/medias/bubble/Flower.svg);
  background-repeat: no-repeat;
  background-position: left top; 
  background-size:30vh;
  height: 100vh;
  display : flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
}
.sign-link{
  font-weight: bold;
  color:var(--unibo);
  text-decoration: none;
}
.link{
  color : black;
  text-decoration: underline;
  padding:0;
  margin:0;
}

.link-container{
  display: flex;
  align-content: center;
}
form{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-height : 40vh;
}

</style>
