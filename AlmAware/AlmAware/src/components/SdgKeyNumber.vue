<script lang="ts" setup>
    const props = defineProps<{
        sdg : string;
        number : string;
        unit? : string;
        text : string;
    }>();
    const color = 'var(--sdg'+ props.sdg + ')'
</script>
<template>
    <div class="sdgNumber" :style="{'background-color':  color  }">
        <h3 > {{number}}</h3>
        <p class="unit">{{unit}}</p>
        <p>{{text}}</p>
    </div>
</template>
<style scoped>
.sdgNumber {
  height : calc(90vw / 3);
  width : calc(90vw / 3);
  color: white;
  margin: 1%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
}
.sdgNumber h3{
  font-family: var(--number-font);
  font-size: 20px;
  text-align: center;
  color : white;
  margin: 0;
  padding : 0;
  /* text-shadow: v-bind(color) 3px 3px, v-bind(color)-3px 3px, v-bind(color) -3px -3px, v-bind(color) 3px -3px; */
}

.sdgNumber .unit {
  font-size: 15px;
  text-align: center;
  padding: 0;
  font-weight: bold;
}

.sdgNumber p{
    margin :0;
    font-size: var(--text-font);
}

@media (min-width: 1250px) {
    .sdgNumber{
    width: 25vh;
    height: 25vh;
    margin: 0;
    padding : 1%;
  }

  .sdgNumber h3 {
    font-size: 7rem;
    margin-bottom : 0;
  }

  .sdgNumber .unit {
    font-size: 45px;
    margin-bottom: 5%;;
  }
  .sdgNumber p {
    font-size: 25px;
    margin-bottom: 5%;
  }
}
</style>