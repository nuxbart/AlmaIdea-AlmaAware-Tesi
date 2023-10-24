<script setup>
  import { useRoute } from "vue-router";

  import Bandeau from "../components/Bandeau.vue";
  import ActionCard from "../components/ActionCard.vue";
  import ActionList from "../components/ActionList.vue";
  import { getBadgesBySDG } from "../assets/data/service";
  const route = useRoute();
  const id = route.params.id;

  const bubbleColor =
    "url(../assets/medias/bubble/colorBubble" + id + ".svg";

  const badgesActions = getBadgesBySDG(id);
</script>

<template>
  <Bandeau :backLink="'/sdg/' + id"></Bandeau>
  <main>
    <h1>What we can do ?</h1>
    <ActionList :id="id"></ActionList>

    <div class="actions_containter">
      <ActionCard
        v-for="badge in badgesActions"
        :id="id"
        :image="badge.Image"
        :subtitle="badge.Subtitle"
        :type="badge.Type"
        :name="badge.Badge"
      ></ActionCard>
    </div>
  </main>
</template>

<style lang="css" scoped>
main {
  background-image: url(../assets/medias/bubble/student_bubble.svg),
    v-bind(bubbleColor), url(../assets/medias/bubble/student_bubble_bottom.svg);
  background-repeat: no-repeat;
  background-position: left top, 20px 0px, right 72vh;
  background-size: 17vh, 50vh, 35vh;
}

.actions_containter {
  display: flex;
  justify-content: space-around;
  width: 90vw;
  margin-bottom: 13%;
}
</style>
