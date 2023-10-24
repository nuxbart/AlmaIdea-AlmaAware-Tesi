<script lang="ts" setup>
import { getSdgData } from "../assets/data/service";
import Button from "../components/CustomButton.vue";
import SdgDesc from "../components/SdgDesc.vue";
import SdgTitle from "../components/SdgTitle.vue";
import Bandeau from "../components/Bandeau.vue";
import { useRoute } from "vue-router";

/* responsive param */
import { useMq } from "vue3-mq";
const mq = useMq();

const route = useRoute();
const id = route.params.id;

const data = getSdgData(id);
</script>

<template>
  <Bandeau backLink="/home" v-if="mq.mobile === true"></Bandeau>
  <main>
    <SdgTitle :title="data?.title"></SdgTitle>
    <SdgDesc
      :sdg="id.toString()"
      :subtitle="data?.subtitle"
      class="description"
    ></SdgDesc>
    <div class="button-container">
      <router-link :to="id + '/unibo/'">
        <Button
          :sdg="id.toString()"
          type="btn-outline"
          name="What Unibo do?"
        ></Button>
      </router-link>
      <router-link :to="id + '/student/'">
        <Button
          :sdg="id.toString()"
          type="btn-background"
          name="What we can do?"
        ></Button>
      </router-link>
    </div>
  </main>
</template>

<style lang="css" scoped>
main {
  justify-content: space-between;
  align-content: space-between;
}
.button-container {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-bottom: 4vh;
}

.button{
  width : 35vw;
}
</style>
