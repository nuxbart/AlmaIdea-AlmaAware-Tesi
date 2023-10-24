<script lang="ts" setup>
import CustomButton from '../../CustomButton.vue';
import {ref} from 'vue';
import Icon from './Icon.vue';


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
    const iconID = ref(counter.value.toString())

    function incrementcounter(){
      // value of counter
      if(counter.value <props.numberActions){
        counter.value = counter.value +1 
        iconID.value = String(counter.value)
        // change the color of the icon 
        const icon = document.getElementById(iconID.value)
        icon?.classList.remove("icon-unvalidated")
        icon?.classList.add("icon-validated")

        // disabled the button when the maximum of action is validate
        if(counter.value === props.numberActions){
          btnDisabled.value = true
        }
      }
       // adapt the legend of counter
      if(counter.value ==2){
        legend.value = legend.value + "s"
      }
    }

    const iconWidth = ref()
    // determine the size of the icon in case of the number of action
    if (props.numberActions <10){
      iconWidth.value = "40px"
    }else{
      iconWidth.value = "25px"
    }
   
</script>

<template>
  <div class="modal-body">
    <div class="action-images" >
      <Icon class="action-icon icon-unvalidated" v-for=" action in numberActions" :icon="picto" :id="action.toString()"></Icon>
    </div>
    <div class="action-container" :style="{'background-color':'var(--sdg'+sdg+')'}"> 
      <span>{{ counter }}</span>
      <p>{{legend}}</p>
    </div>
    <CustomButton :sdg="sdg" :name="'Add a ' +actionName " type="btn-background" @click="incrementcounter()" :disabled="btnDisabled"></CustomButton>
  </div>
</template>

<style lang="css" scoped>
.icon-validated{
  fill : v-bind(color);
}

button {
  font-size: 14px;
  width : 32vw !important;
}
.action-icon{
  width : v-bind(iconWidth);
  height : auto;
  margin : 0 0 2% 0;
}

.icon-unvalidated{
  fill:rgb(88,88,88);
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
