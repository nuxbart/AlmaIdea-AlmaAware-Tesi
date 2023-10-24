<script lang="ts" setup>
import CustomButton from '../CustomButton.vue';
import FormInput from '../formItems/FormInput.vue';


</script>

<template>
  <!-- FLOWER CONNEXION POP-UP -->
  <div class="modal-body">
    <p>Enter your code to join the Unibo garden</p>
    <FormInput placeholder="Code" type="text" ></FormInput>
    <div class="btn-container">
      <CustomButton type="btn-unibo-outline" name="Cancel"></CustomButton>
      <CustomButton type="btn-unibo" name="Join the greenhouse"></CustomButton>
    </div>

  </div>

</template>

<style lang="css" scoped>
.modal-body{
  height : 100%;
  margin:0;
  border-radius: 20px;
  background-image: url(../assets/medias/bubble/Flower_popUp_greenhouse.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  font-size: 25px;
  text-align: center;
  
}
.modal-body::before {
  width: 100%;
  height: 30vh;
  display: block;
  position: relative;
  top: 3%;
  left: 0;

  content: "";
  /*** BUBBLE WITH MASCOT *****/
  background-image: url(../assets/medias/bubble/mascot_bubble.svg);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}

.btn-container{
  display: flex;
  justify-content: space-evenly;
  width : 50%;
  margin: 0 auto;
}

.button{
  width : 12.5vw;
  height : 4vh;
  border-radius : 50px;
  font-size: 25px;
  font-weight: 400;
}




</style>
