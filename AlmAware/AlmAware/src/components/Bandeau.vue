<script lang="ts" setup>
  import arrowBackIcon from './icons/arrow-back.vue';
  
  const props = defineProps<{
    backLink : string;
  }>();
</script>

<template>
  <div class="sdgLine">
    <router-link v-if="backLink!=''" :to="'/home'"><arrowBackIcon></arrowBackIcon></router-link>
    <p>Hi NAME !</p>
    <!-- <router-link to="/badges/"><img src="../assets/medias/pictos/badge.svg" alt="badges"></router-link> -->
  </div>
</template>

<style scoped>
div{
  background-color: var(--principal);
  display:flex;
  justify-content: flex-end;
  align-items: center;
  height : 5vh;
  width:100%;
  
  position:sticky;
  top :0;
  left:0;
  /* SDG_line implement in style.css*/
  border-bottom : var(--sdgLine-width) solid;
  
  /* box-shadow : X Y blur Spreat Color */
  box-shadow: var(--box-shadow);

}

p{
  font-weight: var(--bold);
  width : 100%;
  text-align: center;
}

@media (min-width: 1250px) {

}

 
</style>
