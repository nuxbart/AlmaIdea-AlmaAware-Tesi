<script lang="ts" setup>
import Menu from "../components/Menu.vue";
import Flower from "../components/customFlower/FlowerItem.vue";
import { ref } from "vue";

  // interactive pop-up
  import Modal from "../components/popUpItems/PopUp.vue";
  const showModal = ref(false);
  const showFlower=ref(false)

//const Pot = document.getElementById("pot").style.fill = "var(--sdg12)";
const listOfFlower = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];

const listRow1 = ref([]);
const listRow2 = ref([]);
const listRow3 = ref([]);
console.log(listOfFlower.length);

//add the 4 firsts flower on the 2 first shelf
for (let i = 0; i < 4; i++) {
  if (listOfFlower[i] != null) {
    switch (i % 2) {
      case 0:
        listRow1.value.push(listOfFlower[i]);
        break;
      case 1:
        listRow2.value.push(listOfFlower[i]);
        break;
    }
  }
}
// add the others on the 4 shelfs
for (let i = 4; i < listOfFlower.length; i++) {
  switch (i % 3) {
    case 0:
      listRow3.value.push(listOfFlower[i]);
      break;
    case 1:
      listRow1.value.push(listOfFlower[i]);
      break;
    case 2:
      listRow2.value.push(listOfFlower[i]);
      break;
  }
}
</script>

<template>
  <main>
    <Menu></Menu>
    <div class="greenhouse">
      <div class="shelf-container">
        <div v-for="row in 3" class="shelf">
          <Flower v-if="row == 1" v-for="element in listRow1"  ></Flower>
          <Flower v-if="row == 2" v-for="element in listRow2"></Flower>
          <Flower v-if="row == 3" v-for="element in listRow3"></Flower>
        </div>
      </div>
      <div class="podium">
        <div id="second-item"><Flower></Flower></div>
        <div id="first-item"><Flower></Flower></div>
        <div id="third-item"  ><Flower></Flower></div>
      </div>
    </div>

    <!-- pop up to see a Flower-->
    <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <modal
      :show="showModal"
      @close="showModal = false"
      type="greenhouse"
      color = "var(--unibo)"
      text = "Flower"
    >
    </modal>
  </Teleport>


    <!-- button for add his flower-->
    <button class="mascot" id="show-modal"
    @click="showModal = true">
    </button>

    <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <modal
      :show="showModal"
      @close="showModal = false"
      type="greenhouse"
    >
    </modal>
  </Teleport>

  </main>
</template>

<style lang="css" scoped>
main {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 5vw auto;
  grid-template-areas: "Menu Greenhouse";
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-align: center;
  background-image: url(../assets/medias/background_greenhouse.svg);
  background-repeat: repeat;
  background-size : contain
}
.greenhouse {
  grid-area: Greenhouse;
  display: grid;
  grid-template-areas: "shelfs" "podium";
  margin: 0;
  padding: 0;
  height: 100vh;
  box-sizing: border-box;
}
/****** ====== managment the shelf of the greenhouse ====== ******/
.shelf {
  min-width: 95vw;
  max-width: auto;
  height: calc(74vh / 3);
  display: flex;
  align-items: end;
  border-bottom: 25px solid var(--principal);
  box-shadow: 0px 6px 0px #e5e1db; /*right bottom blurb color */
  box-sizing: border-box;
}
.shelf:nth-child(3) {
  padding-left: 18vw; /* shift of 2 time the width of the flower for start the 3th shielf */
}
.shelf-container {
  grid-area: shelfs;
  box-sizing: border-box;
  height: 70vh;
  margin: 0;
  display: grid;
  align-content: end;
}

/****** ====== managment of the podium ====== ******/
.podium {
  grid-area: podium;
  height: 30vh;
  width: 95vw;
  box-sizing: border-box;
  margin: 0;
  display: flex;
  justify-content: center;
  position: sticky;
}
#first-item,
#second-item,
#third-item {
  box-sizing: border-box;
  height: 100%;
  width: 12vw;
  margin: 0 0.5%;
  display: flex;
  justify-content: center;
  align-items: end;
}
#first-item {
  border-bottom: 10vh solid var(--principal);
}
#second-item {
  border-bottom: 8vh solid var(--principal);
}
#third-item {
  border-bottom: 6vh solid var(--principal);
}

/****** ====== add the mascot ====== ******/
.mascot {
  background-image: url(../assets/medias/Mascotte.svg);
  background-repeat: no-repeat;
  background-position: center;
  width: calc(100vw / 5);
  height: calc(100vw / 4.5);
  padding: 0;
  position: absolute;
  bottom: 0;
  left: 5vw;
}
</style>
