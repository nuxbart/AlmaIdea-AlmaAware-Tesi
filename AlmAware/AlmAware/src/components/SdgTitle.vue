<script lang="ts" setup>
import { useRoute } from 'vue-router';

const props = defineProps<{
  title?: string;
}>();

const route = useRoute();
const sdg = route.params.id;

//keep the great bubble color switch the sdg 
const bubbleColor = "url(../assets/medias/bubble/colorBubble"+sdg + ".svg";
const bgImage = "url(../assets/medias/sdgs_background/sdg"+sdg + ".jpg";
const color = "var(--sdg"+sdg+")"
const icon_url= "url(../assets/medias/sdgs_icons/sdg"+sdg+".png)";

</script>

<template>
    <div class="title sdgLine" >
      <h1 :class="'icon'+sdg">{{ title }}</h1>
    </div>
</template>

<style scoped>
  h1{
    position:relative;
    margin:0;
    text-align: center;
    width : 70%;
  }
  h1::after{
    content: "";
    background-image: v-bind(icon_url);
    background-size: contain;
    display: block;
    position: absolute;
    bottom: calc(-3vh - 28vw);
    left: calc(50% - 14vw);
    width : 28vw;
    height: 28vw;
  }
  .title{
    background-color: var(--principal);
    height:30vh;
    display : flex;
    align-items: center;
    justify-content: center;
    border-bottom : var(--sdgLine-width) solid;
    background-image: url(../assets/medias/bubble/sdg_bubble.svg), v-bind(bubbleColor), url(../assets/medias/bubble/sdg_bubble_line.svg), v-bind(bgImage);
    background-position: left top ,  left top , 92vw bottom, center ; 
    background-repeat: no-repeat;
    background-size:50vh,50vh,  8vh, cover;
    width:100%;
    z-index: 1000;
  }


 
  /* **** RESPONSIVE **** */ 
  
  @media (min-width: 1250px) {
    h1::after{
      width : 20vh;
      height: 20vh;
      bottom: calc(-3vh - 20vh);
      left: calc(50% - 10vh);
    }
  
}
</style>
