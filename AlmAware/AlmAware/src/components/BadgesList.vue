<script lang="ts" setup>
import Badge from './Badge.vue';
/* import { getAllBadges } from "../assets/data/service";

const listBadges= getAllBadges() */
const props = defineProps<{
  listBadges : Array<string>;
}>();

</script>

<template>
     <div class="badges-container">
      <Badge v-for="badge in listBadges" :name="badge.Badge" :sdg="badge.SDG" :subtitle="badge.Subtitle" :description="badge.Description" :state="badge.State"  :image="badge.Image" >
      </Badge>
    </div>
</template>

<style>
.badges-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  box-sizing: border-box;
} 
 

</style>