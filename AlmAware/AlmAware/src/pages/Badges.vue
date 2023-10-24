<script lang="ts" setup>
import { ref } from "vue";
import Bandeau from "../components/Bandeau.vue";
import BadgesList from "../components/BadgesList.vue";
import {
  getAllBadges,
  getBadgesBySDG,
  getBadgesByState,
} from "../assets/data/service";

const validated = "validated";
const unvalidated = "unvalidated";

let btnValidated = false;
let btnUnvalidated = false;

const list = ref(getAllBadges());

function filterByState(state) {
  const btnVal = document.getElementById("validated");
  const btnUnval = document.getElementById("unvalidated");
  if(btnVal != null && btnUnval != null){
    if (state == validated) {
      if (btnValidated == false) {
        list.value = getBadgesByState(state);
        btnValidated = true;
        btnVal.classList.add("filter-active");
        btnUnval.classList.remove("filter-active")
      } 
      else {
        list.value = getAllBadges();
        btnValidated = false;
        btnVal.classList.remove("filter-active");
      }
    } else {
      if (btnUnvalidated == false) {
        list.value = getBadgesByState(state);
        btnUnvalidated = true;
        btnUnval.classList.add("filter-active")
        btnVal.classList.remove("filter-active");
      } 
      else{
        list.value = getAllBadges();
        btnUnvalidated = false;
        btnUnval.classList.remove("filter-active")
      }
    }
  }
}

function filterBySdg(sdg) {
  const sdgNumber = sdg.target.value;
  if (sdgNumber == "all") {
    list.value = getAllBadges();
  } else {
    list.value = getBadgesBySDG(sdgNumber);
  }
}
</script>

<template>
  <Bandeau backLink="/profil/"></Bandeau>
  <main>
    <h1>Badges</h1>
    <div class="filter">
      <button
        class="filter-item"
        @click="filterByState(validated)"
        id="validated"
      >
        Validated
      </button>
      <button
        class="filter-item"
        @click="filterByState(unvalidated)"
        id="unvalidated"
      >
        Unvalidated
      </button>
      <select class="filter-item" @change="filterBySdg($event)">
        <option value="all">all sdg</option>
        <option v-for="sdg in 17" :value="sdg">sdg {{ sdg }}</option>
      </select>
    </div>
    <BadgesList :listBadges="list"></BadgesList>
  </main>
</template>

<style ang="css" scoped>
main {
  background-image: url(../assets/medias/bubble/badges_bubble_left.svg),
    url(../assets/medias/bubble/badges_bubble_right.svg);
  background-repeat: no-repeat;
  background-position: left top, right top;
  background-size: 30vh, 12vh;

  box-sizing: border-box;
  height: calc(100% + 10vh);
  min-height: 100vh;
}

.filter {
  display: flex;
  justify-content: space-evenly;
  width: 80vw;
  margin-bottom: 4%;
}

.filter-item {
  border: 1.5px solid black;
  background-color: transparent;
  border-radius: 10px;
}

.filter-active {
  background-color: black;
  color: white;
}
</style>
