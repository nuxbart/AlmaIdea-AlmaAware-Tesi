<script lang="ts" setup>
  import { getSdgData} from "../assets/data/service";
  import KeyCard from "./KeyCard.vue";
 

  const props=defineProps<{
    id : string;
  }>();
  
const data = getSdgData(props.id);
</script>
<template>
<div class="keyCard_container">
      <KeyCard
        type="number"
        title="corsi"
        picto="course"
        :color="id"
        :number="data?.course_units"
      ></KeyCard>
      <KeyCard
        type="number"
        picto="publication"
        title="pubblicazioni (Unibo)"
        :color="id"
        :number="data?.publications_Unibo"
      ></KeyCard>
      <KeyCard
        type="slide"
        picto="project"
        title="progetti"
        :color="id"
        :number="data?.project"
      ></KeyCard>

      <!-- key number card with pop-up-->
      <KeyCard
        v-if="data?.key_number!='' && data?.keyNum_popUp=='true' "
        type="graph"
        picto = "keyNumber"
        :title="data?.keyNum_label"
        :color="id"
        :number="data?.key_number"
      ></KeyCard>
      <!-- key number card without pop-up-->
      <KeyCard
        v-if="data?.key_number!='' && data?.keyNum_popUp=='false' "
        type=""
        picto = "keyNumber"
        :title="data?.keyNum_label"
        :color="id"
        :number="data?.key_number"
      ></KeyCard>

    </div>
  </template>

<style scoped>
.keyCard_container {
  display: flex;
  flex-wrap: wrap;
  width: 350px;
  justify-content: center;
  align-content: space-between;
  padding: 0;
}
@media (min-width: 1250px) {
  .keyCard_container{
    width:90%;
    height : 35vh;
    margin : 2% auto 10% auto;
    align-content: center;
  }
}
</style>