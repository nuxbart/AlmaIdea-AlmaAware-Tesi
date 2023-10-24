<script lang="ts" setup>
import SdgKeyNumberGroup from './SdgKeyNumberGroup.vue';

const props = defineProps<{
  subtitle? : string;
  sdg :string;
}>();
</script>

<template>
    <div >
      <h2>{{ subtitle }}</h2>
      <SdgKeyNumberGroup :id="sdg"></SdgKeyNumberGroup>
    </div>
</template>

<style scoped>
  h2{
    text-align: center;
    font-size: 16px;
    width : 85%;
    margin : 2% auto;
  }

</style>