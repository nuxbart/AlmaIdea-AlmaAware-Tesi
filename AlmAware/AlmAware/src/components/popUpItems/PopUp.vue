<script lang ="ts" setup>
import PopUpNumber from './PopUpNumber.vue'
import PopUpSlide from './PopUpSlide.vue'
import CrossIcon from '../icons/cross.vue'
import PopUpBadge from './PopUpBadge.vue';
import PopUpAction from './PopUpAction.vue';
import PopUpGreenhouse from './PopUpGreenhouse.vue';
const props = defineProps<{
  show: Boolean;
  title?: string;
  subtitle?: string;
  type : string; /** number / slide / badge / action / greenhouse **/
  picto? : string;
  color? : string;
  text? : string;
  badgeName?: string;
}>();
  const colorName = 'var(--sdg'+props.color+')'
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <button class="modal-default-button" @click="$emit('close')"><CrossIcon style="height:2.5vh; z-index:100,"></CrossIcon></button>
        <PopUpNumber v-if="type=='number'" 
          :title="subtitle" 
          :number="title" 
          :color="colorName" 
          :picto="picto">
        </PopUpNumber>

        <PopUpSlide v-else-if="type=='slide'" 
          :title="subtitle" 
          :number="title" 
          :color="colorName">
        </PopUpSlide>

        <PopUpBadge v-else-if="type=='badge'" 
          :subtitle="subtitle" 
          :title="title" 
          :text="text" 
          :sdg="color" 
          :picto="picto">
        </PopUpBadge>

        <PopUpAction v-else-if="type=='action'" 
          :text="text" 
          :sdg="color" 
          :picto="picto"
          :badgeName="badgeName">
        </PopUpAction>

        <PopUpGreenhouse v-else-if="type=='greenhouse'">
        </PopUpGreenhouse>

      </div>
    </div>
  </Transition>
</template>

<style>
button{
  border:none;
  background-color: transparent;
  display:flex;
  justify-content: center;
  align-items: center;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65);
  display: flex;
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 70vw;
  height : 75vh;
  margin: auto;
  padding: 10px 10px;
  background-color: #fff;
  border-radius: 20px;
  border:1.5px solid black;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}


.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-default-button:hover{
    cursor: pointer;
  }

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

@media (min-width: 1250px) {
  .modal-container{
    padding : 0;
  }

}

</style>