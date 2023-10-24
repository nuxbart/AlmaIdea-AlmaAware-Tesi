<script lang="ts" setup>

import CustomButton from '../../CustomButton.vue';
import {ref} from 'vue';


  const props = defineProps<{
  text?: string;
  sdg?: string;
  picto?: string;
  actionName?: string;
  }>();
  
const color = "var(--sdg" + props.sdg + ")"; 

 
</script>

<template>
  <div class="modal-body">
    <p>{{ text }}</p>
    <form>
      <label :for ="picto">
      <input type="checkbox" :id="picto" > 
      <span :style="{'border-color' : color }"></span>
      {{actionName}} 
    </label>
    <CustomButton name="validated" type="btn-background" :sdg="sdg"></CustomButton>
    </form>
    
  </div>
</template>

<style lang="css" scoped>
button {
  font-size: 14px;
  width : 32vw !important;
}

form{
  width : 90%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;


}
label{
  display: flex;
  align-items: center;
  font-size: 14px;
}

label input{
  display : none;
}

label span{
  width : 25px;
  height : 20px;
  border-radius : 5px;
  border : 2px solid;
  margin-right : 5%;
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
