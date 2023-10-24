<script lang="ts" setup>
import { inject } from 'vue'

  const props = defineProps<{
    image: string;
    subtitle?: string;
    id: string;
    type : string;
    name : string;
  }>();
  // interaction card with pop-up
  import Modal from "../components/popUpItems/PopUp.vue";
  import { ref } from "vue";
  const showModal = ref(false);

  const publicPath = inject('publicPath')
</script>

<template>
  <div class="action-item">
    <button
      id="show-modal"
      @click="showModal = true"
      :style="{
        'background-color': 'var(--sdg' + props.id + ')',
        'background-image':
          'url('+publicPath+'/assets/medias/badges/icons/' + props.image + '.svg',
      }"
    ></button>
    <p>{{ subtitle }}</p>
  </div>

  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <modal
      :show="showModal"
      @close="showModal = false"
      title=""
      type="action"
      :color="props.id"
      :picto="props.image"
      :badgeName = "name"
    >
    </modal>
  </Teleport> 
</template>

<style lang="css" scoped>
button {
  width: 90px;
  height: 90px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 65%;
  margin: 2% auto;
}
h2 {
  font-size: var(--text-font);
  text-align: center;
  margin: 0;
}
p {
  text-align: center;
  margin: 0;
}

.action-item {
  width: 30vw;
}
</style>
