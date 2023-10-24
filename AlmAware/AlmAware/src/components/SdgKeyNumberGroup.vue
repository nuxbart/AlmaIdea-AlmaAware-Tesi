<script lang="ts" setup>
  import { getSdgData} from "../assets/data/service";
  import SdgKeyNumber from "./SdgKeyNumber.vue";
 

  const props=defineProps<{
    id : string;
  }>();
  
const data = getSdgData(props.id)?.description;

</script>
<template>
  <div class="keyNumber_container">
    <SdgKeyNumber v-for="desc in data" 
      :sdg = "id"
      :number="desc.number"
      :unit = "desc.unit"
      :text ="desc.text"
    >
    </SdgKeyNumber>
  </div>
</template>

<style scoped>
.keyNumber_container {
  display: flex;
  flex-wrap: no wrap;
  width: auto;
  justify-content: center;
  padding: 0;
}
@media (min-width: 1250px) {
  .keyNumber_container{
    width:75%;
    height : auto;
    margin : 0 auto 5% auto;
    justify-content: space-between;
    align-content: space-between;
    padding:0;
  }
}
</style>