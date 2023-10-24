<script setup>
  import FormInput from '../components/formItems/FormInput.vue'
  import {getColorName} from '../assets/data/service.js'
  import Bandeau from '../components/Bandeau.vue';
  import FlowerItem from '../components/customFlower/FlowerItem.vue';
  import CustomButton from '../components/CustomButton.vue'
function chekedColor(id){
    const CheckedElement = document.getElementsByClassName("checked")
    // remove selected style of old element
    if (CheckedElement.length !=0){
      CheckedElement[0].classList.remove("checked")
    }
    // add selected style of new element
      const Color = document.getElementById(id);
      const ColorValue = document.querySelector('input[name=color]:checked').value;
      const Pot = document.getElementById("pot")
      if (Color.checked){
        // selected style
        const Span= Color.nextSibling.firstChild
        Span.classList.add("checked")

        // change flower pot color 
        Pot.style.fill = "var(--sdg" + ColorValue + ")";
      }
}

function chekedPlant(id){
    const CheckedElement = document.getElementsByClassName("checkedPlant")
    if (CheckedElement.length !=0){
      console.log(CheckedElement[0])
      CheckedElement[0].classList.remove("checkedPlant")
    }
      
      const Plant = document.getElementById(id+'plante');
      console.log(Plant)
      if (Plant.checked){
        const Span= Plant.nextSibling.firstChild
        console.log(Span)
        Span.classList.add("checkedPlant")
      }
}
 

</script>

<template>
  <Bandeau backLink="/profil/"></Bandeau>
  <main>
    <h1>My flower</h1>
   <FlowerItem></FlowerItem>
    <div class="form-flower sdgLine">
        <form>
          <div class="form-item">
            <FormInput label ="Name" type="text" placeholder="flower name" id="name"></FormInput>
          </div>
          <div class=" form-item">
            <label>Flower pot color</label>
            <div class="color">
              <div class="radio" v-for="id in 17">
              <input class="colorItem" type="radio" name="color" :value="id" :id="id" @click="chekedColor(id)"/>
              <label :for=id> 
                <span :style="{'background-color':'var(--sdg'+id+')'}" ></span>
                {{ getColorName(id) }}
              </label>
            </div>
            </div>
            </div>
          <div class = "form-item">
            <label for="type ">flower type</label>
            <div class="type">
              <div class="radio" v-for="plant in 5">
                <input  class="typeItem" type="radio" name="type" :value="plant" :id="plant+'plante'" @click="chekedPlant(plant)"/>
                <label :for="plant+'plante'"><span :style="{'background-color':'#FFF'}" ></span></label>
              </div>
            </div>
          </div>

          <CustomButton name="validate" type="btn-outline" ></CustomButton>
        </form>
    </div>

  </main>
</template>
<script>


</script>
<style ang="css" scoped>
.checked, .checkedPlant{
  border:2px solid black;
  transform: scale(1.25);
}

.button{margin : 0 auto;}
main {
  background-image: url(../assets/medias/bubble/badges_bubble_left.svg);
  background-repeat: no-repeat;
  background-position: left top; 
  background-size:30vh;
  justify-content: flex-end;
} 

h1{
  margin-bottom : 10vh;
}
.flower {
  width : 150px;
  height : 150px;
}

.form-flower{
  background-color: var(--principal);
  border-top : var(--sdgLine-width) solid;
  height : 50vh;
  width:100%;
}

.form-item{
  display: flex;
  flex-direction: column;
  margin:1% 0;
  width : 100%;
  justify-content: flex-start;
  box-sizing: border-box;
  padding : 1% 5%;
}
.input{
  background-color: transparent;
  border-color: white;
  width : 90%;
}

label{
  font-weight: var(--bold);
  margin-bottom : 1%;
}

.radio label{
  display: inline-block;
  margin-right: 10px;
  cursor: pointer;
  color : transparent;
  font-size: 3px;
}
.type .radio label:hover span, .color .radio label:hover span{
  transform: scale(1.25); 
}
.radio label span{
  display: block;
  width: 100%;
  height: 100%;
  transition: transform .2s ease-in-out;
}
.color ,  .type{
  display: flex;
  flex-wrap: wrap;
}

.radio input[type="radio"]{
  display: none;
}

.radio input[type="radio"]:cheked + label {
  transform: scale(1.25);
  border: 2px solid black; 
} 
.color .radio input[type="radio"]:cheked + label span{
  border: 2px solid #FFF;
  transform: scale(1.25);
} 

.color .radio label{
  width: 25px;
  height: 25px;
}

.type .radio label{
  width: 50px;
  height: 50px;
}

</style>
