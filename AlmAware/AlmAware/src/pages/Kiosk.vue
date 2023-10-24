<script lang="ts" setup>
import Menu from "../components/Menu.vue";
import { useRoute } from "vue-router";
import KeyCardsGroup from "../components/KeyCardsGroup.vue";
import ActionList from "../components/ActionList.vue";

import { getSdgTitle, getSdgData } from "../assets/data/service.js";
import SdgKeyNumberGroup from "../components/SdgKeyNumberGroup.vue";
const route = useRoute();
const id = route.params.id;

const background_url =
  "url(../assets/medias/sdgs_background/sdg" + id + ".jpg)";
const icon_url = "url(../assets/medias/sdgs_icons/sdg" + id + ".png)";
const color = "var(--sdg" + id + ")";
</script>

<template>
  <main>
    <div class="test"></div>
    <Menu></Menu>
    <div class="sdg-container">
      <div
        class="sdg-item"
        :style="{ 'background-image': background_url }"
      >
        <p> {{ getSdgData(id)?.img_author }}</p>
      </div>
      <h1>{{ id }} - {{ getSdgTitle(id) }}</h1>
      <p class="kiosk-desc">
        <span :style="{ color: color }">{{ getSdgData(id)?.subtitle }}</span>
        {{ getSdgData(id)?.desc_kiosk }}
      </p>
      <SdgKeyNumberGroup :id="id.toString()"></SdgKeyNumberGroup>
    </div>
    <div class="actions sdgLineVertical">
      <div>
        <h2>Cosa fa UNIBO?</h2>
        <p>
          Scopri cosa fa UNIBO dal 2016. Se vuoi vedere di più sul
           numero, tocca la carta.
        </p>
        <KeyCardsGroup :id="id.toString()"></KeyCardsGroup>
      </div>
      <div>
        <h2>Cosa puoi fare tu?</h2>
        <ActionList :id="id.toString()"></ActionList>
      </div>
    </div>
  </main>
</template>

<style lang="css" scoped>
main {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 5vw 70vw 25vw;
  grid-template-areas: "Menu Sdg Action";
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-align: center;

  background-repeat: no-repeat;
  background-position: left top;
  background-size: 50%;
}

main::after {
  content: "";
  background-color: v-bind(color);

  width: 20vw;
  height: 25vh;
  padding: 0;
  position: absolute;
  bottom: 0;
  right: 0;

  /*** COLOR BUBBLE *****/
  -webkit-mask-image: url(../assets/medias/bubble/kiosk_bubble_bottom.svg);
  mask-image: url(../assets/medias/bubble/kiosk_bubble_bottom.svg);
  -webkit-mask-size: cover;
  mask-size: cover;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;

  /*** LINE BUBBLE *****/
  background-image: url(../assets/medias/bubble/kiosk_bubble_bottom_line.svg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

h1 {
  font-size: 60px;
}
h2 {
  font-size: 40px;
}
p,
span {
  font-size: 24px;
}

span {
  font-weight: bold;
  margin-bottom : 1%;
}

.kiosk-desc{
  display: flex;
  flex-direction: column;
  width : 80%;
  margin : 0 auto 1% auto;
  box-sizing: border-box;
}
.sdg-container {
  grid-area: Sdg;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: relative;
}

.test {
  width: 100vw;
  height: 35vh;
  display: block;
  position: absolute;
  box-sizing: border-box;
  top: 0;
  left: -30vw;
  z-index: -10000;
  /*** COLOR BUBBLE *****/
  background-color: v-bind(color); /* adapt with the sdg*/

  -webkit-mask-image: url(../assets/medias/bubble/kiosk_bubble_top.svg);
  mask-image: url(../assets/medias/bubble/kiosk_bubble_top.svg);
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  /*** LINE BUBBLE *****/
  background-image: url(../assets/medias/bubble/kiosk_bubble_top_line.svg);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}

.sdg-item {
  width: 80%;
  margin: 8% auto 0 auto;
  height: 30vh;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items:end;
  box-sizing: border-box;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.sdg-item p {
  color : white;
  font-size : 14px;
  margin : 0 1% 1% 0;
}

.sdg-item::before {
  content: "";
  background-image: v-bind(icon_url);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: block;
  width: 25vh;
  height: 100%;
  position: absolute;
  top: 0;
  left: 5%;
}
.actions {
  grid-area: Action;
  background-color: var(--principal);
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  /* add sgd border */
  border-left: var(--sdgKioskLine-width) solid;
  border-top: none;

  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: 100%;

  padding: 2%;
}
</style>
