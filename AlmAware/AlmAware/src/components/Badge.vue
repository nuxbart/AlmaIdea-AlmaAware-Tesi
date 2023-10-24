<script lang="ts" setup>
  import Modal from "../components/popUpItems/PopUp.vue";
  import { ref } from "vue";

  const showModal = ref(false);

  const props = defineProps<{
    name: string;
    sdg: string;
    subtitle: string;
    description: string;
    state: string;
    image: string;
  }>();
</script>
<template>
  <div id="show-modal" @click="showModal = true" class="badge">
    <img
      :src="'../assets/medias/badges/' + state + '/' + image + '.svg'"
      :alt="name"
    />
  </div>

  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <modal
      :show="showModal"
      @close="showModal = false"
      type="badge"
      :subtitle="subtitle"
      :title="name"
      :description="description"
      :color="sdg"
      :picto="image"
    >
    </modal>
  </Teleport>
</template>

<style lang="css" scoped>
  .badge {
    width: calc(95vw / 4);
    text-align: center;
    box-sizing: border-box;
    margin-bottom: 3%;
  }

  img{
    width : 95%;
    height : 95%;
  }
 
  .badge h2 {
    font-size: var(--text-font);
    margin: 0;
    font-weight: 100;
    width: 90%;
  }
</style>
