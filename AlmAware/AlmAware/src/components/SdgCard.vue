<script setup lang="ts">

import { getSdgTitle } from "../assets/data/service";
import { inject } from 'vue'

import { useMq } from "vue3-mq";
const mq = useMq();

const publicPath = inject('publicPath')
const img_url = publicPath + "/assets/medias/sdgs_icons/sdg";
const img_extension = ".png";

const props = defineProps<{
  id : String;
}>();

const getlink = ()=>{
  if (mq.mobile===true) {
    return '/sdg/'+ props.id
  }else{
    return '/kiosk/'+props.id
  }
}
const link = getlink()

</script>

<template>
  <router-link :to="link">
    <div :style="{ 'background-image': 
    'url('+publicPath+'/assets/medias/sdgs_background/sdg'+props.id + '.jpg)' , 'border-color' :'var(--sdg'+id+')' }">
      <img :src="img_url + id + img_extension" :alt="getSdgTitle(id)" />
    </div>
  </router-link>
</template>

<style scoped>
div {
  width: calc(100vw / 2 - 40px);
  height: calc(100vw / 2);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  /*background */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  /*background image is define with the style balise of the object*/
  border-width: 1.5px;
  border-style: solid;
  /*border color is define with with the style balise of the object**/
}

img {
  width: 28vw;
  height: 28vw;
}


@media (min-width: 1250px) {
  div{
    width: calc(100vw / 7 - 30px);
    height: calc(100vw / 7);
  }

  img {
  width: 8vw;
  height: 8vw;
}

}
</style>
