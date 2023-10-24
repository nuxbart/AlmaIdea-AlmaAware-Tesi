<script lang="ts" setup>
  const props = defineProps<{
    /* number / slide / graph */
    type: string;
    number?: string;
    picto: string;
    title?: string;
    color: string /* the number of the sdg */;
  }>();

  // interaction card with pop-up
  import Modal from "../components/popUpItems/PopUp.vue";
  import { ref } from "vue";
  const showModal = ref(false);

  const pictoLink = "url(../assets/medias/pictos/" + props.picto + ".svg)";
</script>

<template>
  <button 
    class="info"
    v-if="type != ''"
    id="show-modal"
    @click="showModal = true"
    
    :style="{ 'background-color': 'var(--sdg' + color + ')' }"
  >
    <h2>{{ number }}</h2>
    <p>{{ title }}</p>
  </button>

  <button
    v-else
    :style="{ 'background-color': 'var(--sdg' + color + ')' }"
  >
    <h2>{{ number }}</h2>
    <p>{{ title }}</p>
  </button>


  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <modal
      :show="showModal"
      @close="showModal = false"
      :subtitle="title"
      :title="number"
      :type="type"
      :color="color"
      :picto="picto"
    >
    </modal>
  </Teleport>
</template>

<style lang="css" scoped>
button {
  display: flex;
  flex-direction: column;
  width: 140px;
  height: 140px;
  margin: 10px;
  justify-content: flex-end;
  align-items: center;
  color: white;
  cursor: pointer;
  border: none;
  position: relative;
}
/** add the info icon */
.info::before {
  content: "";
  background-image: url(../assets/medias/pictos/info.svg);
  background-repeat: no-repeat;
  background-size: contain;
  height: 20px;
  width: 20px;
  display: block;
  position: absolute;
  top: 2%;
  right: 2%;
  box-sizing: border-box;
}

h2 {
  font-family: var(--number-font);
  font-size: var(--number-size);
  text-align: center;
  margin: 0;
  position: relative;
}
h2::before {
  content: "";
  height: 6.5vh;
  width: 140px;
  display: block;
  box-sizing: border-box;
  margin-bottom: 3%;
  background-image:v-bind(pictoLink) ;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

p {
  font-size: 16px;
  text-align: center;
  padding: 0;
  margin: 0 0 10px 0;
}

/* ==== RESPONSIVE === */
@media (min-width: 1250px) {
  button {
    width: 200px;
    height: 200px;
  }

  h2 {
    font-size: 40px;
  }

  h2::before {
    height: 5vh;
    width: 200px;
    margin-bottom: 4%;
  }

  p {
    font-size: 20px;
    margin-bottom: 15px;
  }
}
</style>
