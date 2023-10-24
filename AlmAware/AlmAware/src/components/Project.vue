<script lang = "ts" setup>
  import Cloud from '../components/graphs/Cloud.vue'
  import Button from '../components/CustomButton.vue'
  
/* 
  const name = getProjectName(2) */
  const props = defineProps<{
    sdg : string;
    name : String;
    link : string;
    words : object;
  }>();
    
  </script>

<template>
  <div class="project">
    <h1>{{ name }}</h1>
    <Cloud :sdg="sdg" :words="words"></Cloud>
    <a v-if="link!='#'" :href="link" target='_bank'><Button type="btn-background" name="see more" :sdg="sdg" ></Button></a>
  </div>
  
</template>

<style lang="css" scoped>
.project{
  background-color: var(--principal);
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  margin : 0 auto;
  height : 300px;
  width:100%;
}
</style>