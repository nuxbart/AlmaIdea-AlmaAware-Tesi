<script lang="ts" setup>
import { getSdgAdvices } from "../assets/data/service";

const props = defineProps<{
  id: string;
}>();

const list = getSdgAdvices(props.id);
const color = 'var(--sdg' + props.id + ')'
</script>

<template>
  <ul>
    <li
      v-for="item in list"
      :style="{ 'border-color': color }"
    >
      {{ item }}
    </li>
  </ul>
</template>

<style lang="css" scoped>
li {
  border-width: 0 0 1.5px 0;
  border-style: solid;
  padding-bottom: 2px;
  margin-bottom: 5%;
  width : 60vw;
}

ul {
  list-style: none;
  padding-left : 2%;
}

li::before {
  content: "";
  background-color: v-bind(color);
  display: inline-block;
  width: 1.5em;
  height : 1.2em;
  margin-left: -1.6em;
  margin-bottom : -0.2em;

    /*** COLOR BUBBLE *****/
-webkit-mask-image: url(../assets/medias/bubble/list_bubble.svg);
  mask-image: url(../assets/medias/bubble/list_bubble.svg);
  -webkit-mask-size: 85%;
  mask-size: 85%;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
}

@media (min-width: 1250px) {
  li {
    font-size: 24px;
    text-align: left;
    box-sizing: border-box;
  }
  ul {
    box-sizing: border-box;
    max-width: 80%;
    margin: 0 auto;
  }
}
</style>
