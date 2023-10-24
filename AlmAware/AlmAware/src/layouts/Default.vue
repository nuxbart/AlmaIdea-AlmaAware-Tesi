<script setup>
import Menu from "../components/Menu.vue";
</script>


<template>
    <!-- injection des composants dans le slot -->
    <router-view></router-view>
  
  <Menu></Menu>
</template>


<style scooped>

</style>