<script lang="ts" setup>

import CustomButton from '../../CustomButton.vue';
import {ref} from 'vue';


  const props = defineProps<{
  text?: string;
  sdg?: string;
  picto?: string;
  actionName?: string;
  numberActions : number;
  }>();
  
const color = "var(--sdg" + props.sdg + ")"; 

    const counter = ref(0)
    const legend = ref(props.actionName)
    const btnDisabled = ref(false)

    function incrementcounter(){
     
      
      // value of counter
      if(counter.value <2){
        counter.value = counter.value +1 
      }else{
        counter.value = counter.value +1 
        btnDisabled.value = true
      }
       // legend of counter
      if(counter.value ==2){
        legend.value = legend.value + "s"
      }
    }

    const iconSize = ref()
    // determine the size of the icon in case of the number of action
    if (props.numberActions <10){
      iconSize.value = "40px"
    }else{
      iconSize.value = "25px"
    }
   
</script>

<template>
  <div class="modal-body">
    <div class="action-images" >
      <img v-for=" action in numberActions" :src="'../../../assets/medias/badges/icons/'+ picto+'.svg'" :alt="picto">
    </div>
    <div class="action-container" :style="{'background-color':'var(--sdg'+sdg+')'}"> 
      <span>{{ counter }}</span>
      <p>{{legend}}</p>
    </div>
    <CustomButton :sdg="sdg" :name="'Add a ' +actionName " type="btn-background" @click="incrementcounter()" :disabled="btnDisabled"></CustomButton>
  </div>
</template>

<style lang="css" scoped>
button {
  font-size: 14px;
  width : 32vw !important;
}
img{
  border : 2px solid red;
  width : v-bind(iconSize);
  background-color: red;
  margin : 0;
}
.action-images{
  width : 90%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap ;
}
.action-container{
  width : 30vw;
  height : 30vw;
  color : white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.action-container span{
  font-size: var(--number-size);
  font-weight: bold;
  margin:0;
}
.action-container p{
  font-size: var(--subtitle-size);
  margin:0;
}
.modal-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height : 55%;
  margin:0;
}

</style>
