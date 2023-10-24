<script setup>
import KeyCard from "../components/KeyCard.vue";
import { useRoute } from "vue-router";
import Bandeau from "../components/Bandeau.vue";
import KeyCardsGroup from "../components/KeyCardsGroup.vue";
// tak the SDG number and data
const route = useRoute();
const id = route.params.id;

const bubbleColor = "url(../assets/medias/bubble/colorBubble"+id + ".svg";


</script>

<template>
  <Bandeau :backLink="'/sdg/'+id"></Bandeau>
  <main>
    <div class="title">
      <h1>What Unibo do?</h1>
      <p>
        Discover what unibo do since 2016. If you want to see more about the
        number, tap on the case.
      </p>
    </div>

    <KeyCardsGroup :id="id"></KeyCardsGroup>
    
  </main>
</template>

<style ang="css" scoped>
main {
  background-image: url(../assets/medias/bubble/unibo_bubble.svg), v-bind(bubbleColor), url(../assets/medias/bubble/unibo_bubble_bottom.svg);
  background-repeat: no-repeat;
  background-position: left top , 20px -15px, left 72vh; 
  background-size:40vh,55vh, 45vw;
}
.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
}
p {
  text-align: center;
}

</style>
