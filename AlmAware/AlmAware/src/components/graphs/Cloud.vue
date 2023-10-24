<script lang="ts" setup>
  import Cloud from 'vue-d3-cloud'
  import WordCloud from './wordCloud.vue'
    
    const fontSizeMapper = word => word.value * 15
    const props = defineProps<{
    sdg : string;
    words : Object;
  }>();

  </script>

<template>
    <div>
      <WordCloud :data="words" :fontSizeMapper="fontSizeMapper" :sdg="sdg"/>
    </div>
</template>