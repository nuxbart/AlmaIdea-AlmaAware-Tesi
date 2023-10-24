<script setup>
import Button from '../components/CustomButton.vue'
import TextInput from '../components/formItems/FormInput.vue'
import Select from '../components/formItems/FormSelect.vue'

const options = [
  "Bologna", "Cesena", "Rimini","Forli","Ravenna"
]

</script>

<template>
  <main>
    <div class="container">
      <h1>Create account</h1>
      <form>
        <TextInput placeholder="Name" type="text"/>
        <TextInput placeholder="Email" type="mail"/>
        <Select :options ="options" placeholder="Select your campus"></Select>
        <TextInput placeholder="Password" type="password"/>
        <TextInput placeholder="Confirm password" type="password"/>
        <div class="checkbox-container">
          <input type="checkbox" id="policies" value="policies" required />
          <label for="policies"> <router-link to="#" class="link">I accept all the policies and therms</router-link></label>
          </div>
      </form>
      
      <router-link to="/home"><Button name="Sign up" type="btn-unibo"></Button></router-link>
      <div class="link-container">
        <p class="link">Always an account?</p> <router-link to="/signin/" class="sign-link">  Sign in</router-link>
      </div>
    </div>
      
      
   
  </main>
</template>

<style ang="css" scoped>
main {
  background-image: url(../assets/medias/bubble/signUp_bubble_top.svg), url(../assets/medias/bubble/signUp_bubble.svg);
  background-repeat: no-repeat;
  background-position: right top, left bottom; 
  background-size:40vh, 40vh;
  height: 100vh;
  display : flex;
  flex-direction: column;
  justify-content: space-evenly;
 
}

.container{
  display : flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  min-height : 70vh;
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

.checkbox-container{
  display: flex;
  align-items: center;
  justify-content: center;
}
.checkbox-container input{
  width:15px;
  height:15px;
}
</style>
