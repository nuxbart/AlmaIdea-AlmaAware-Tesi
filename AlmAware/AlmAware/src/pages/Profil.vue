<script setup>
import Bandeau from '../components/Bandeau.vue';
import Button from '../components/CustomButton.vue'
import Input from '../components/formItems/FormInput.vue'
import Select from '../components/formItems/FormSelect.vue'

const options = [
  "Bologna", "Cesena", "Rimini","Forli","Ravenna"
]

</script>

<template>
  <Bandeau backLink=""></Bandeau> 
  <main>
    <div class="title">
      <img>
      <h1>My profil</h1>
      <form>
        <Input label="Name" placeholder="Name" type="text" id="name"/>
        <Input label="Email address" placeholder="Email" type="mail" id="email"/>
        <Select label="Campus" :options ="options" placeholder="Select your campus" id="campus"></Select>
        <Input label="Password" placeholder="Password" type="password" id="psw"/>
        <Input label="Personal code" placeholder="code" type="text" disabled id="code"/>
      </form>
    </div>
      
    <div class="btn-container">
      <router-link to="/flower/"><Button name="My Flower" type="btn-grey"></Button></router-link>
      <router-link to="/badges/"><Button name="Badges" type="btn-grey"></Button></router-link>
    </div>
   
  </main>
</template>

<style ang="css" scoped>
main {
  background-image: url(../assets/medias/bubble/Flower.svg);
  background-repeat: no-repeat;
  background-position: left top; 
  background-size:30vh;
}
img{
  box-shadow: var(--box-shadow);
  width : 100px;
  height : 100px;
}
.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
}
.btn-container{
  display: flex;
  justify-content: space-evenly;
  width : 100vw;
}

form{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-height : 40vh;
}
</style>
