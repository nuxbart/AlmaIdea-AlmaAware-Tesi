<script lang="ts" setup>
    const props = defineProps<{
        title?: string;
        color?: string;
        picto?: string;
    }>();

    const bubbleLink = "url(../assets/medias/badges/bubbles/"+props.picto+".svg"
</script>

<template>
    <div class="modal-header">
    <h2 v-if="title != null">{{ title }}</h2>
  </div>
</template>

<style lang="css" scoped>
.modal-header {
  margin: 5vh auto 3% auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.modal-header::before {
  width: 50vw;
  height: 23vh;
  display: block;
  position: relative;
  top: 0;
  left: 0;
  
  content: "";

  /*** COLOR BUBBLE *****/
  background-image: v-bind(bubbleLink);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat; 
}
.modal-header h2 {
  text-align: center;
  font-family: var(--number-font);
  font-size: var(--number-size);
  margin: 0;
}
.modal-header h3 {
  font-family: var(--text-font);
  font-size: var(--subtitle-size);
  font-weight: 300;
  margin: 0;
}
</style>