<script lang="ts" setup>
  const props = defineProps<{
    number?: string;
    title?: string;
    text?: string;
    color?: string;
    picto?: string;
  }>();

  import { inject } from 'vue'

  const publicPath = inject('publicPath')

  const bubbleLink = "url("+publicPath+"assets/medias/bubble/popUp_bubble.svg)";
  const bubbleLine = "url("+publicPath+"assets/medias/bubble/popUp_bubble_line.svg)";
  const pictoLink = "url("+publicPath+"assets/medias/pictos/" + props.picto + ".svg)";

  console.log(pictoLink)
  console.log(bubbleLink)
</script>

<template>
  <div class="modal-header">
    <h2>{{ number }}</h2>
    <h3>{{ title }}</h3>
  </div>
  <div class="modal-body">
    <p>{{text}}</p>
  </div>
</template>

<style lang="css" scoped>
.modal-header {
  margin: 5vh auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.modal-header::before {
  width: 50vw;
  height: 23vh;
  display: block;
  position: relative;
  top: 0;
  left: 0;

  content: "";
  /*** COLOR BUBBLE *****/
  background-color: v-bind(color); /* adapt with the sdg*/

  -webkit-mask-image: v-bind(bubbleLink);
  mask-image: v-bind(bubbleLink);
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  /*** LINE BUBBLE *****/
  background-image: v-bind(bubbleLine),
    v-bind(pictoLink);
  background-position: center, center;
  background-size: contain, 7vh;
  background-repeat: no-repeat;
}
.modal-header h2 {
  text-align: center;
  font-family: var(--number-font);
  font-size: var(--number-size);
  margin: 0;
}
.modal-header h3 {
  font-family: var(--text-font);
  font-size: var(--subtitle-size);
  font-weight: 300;
  margin: 0;
}
</style>
