<script lang="ts" setup>
import Plante from "../../components/customFlower/Plante.vue";
import Pot from "../../components/customFlower/Pot.vue";

  const props = defineProps<{
    color?: string;
  }>();
</script>
<template>
  <div class="flower">
    <Plante></Plante>
    <Pot :color="color"></Pot>
  </div>
</template>
<style lang="css" scoped>
.flower {
  width : 150px;
  height : 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (min-width: 1250px) {
 /* param for the flower in the greenhouse*/
 .flower {
  width : 9vw;
  height : 9vw;

}
}

</style>