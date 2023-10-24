<script setup lang="ts">

const props= defineProps<{
  
  name: string;
  sdg?: string;
  /* btn-background / btn-outline / btn-grey*/
  type : string;
}>();

const color = "var(--sdg"+props.sdg+")";

</script>

<template>
  <button :class="type" class="button">{{ name}}</button>
</template>

<style scoped>
.button {
  border-radius: 25px;
  width: 100px;
  height: 30px;
  text-decoration: none;
  cursor: pointer;
}
.button:disabled{
  opacity : 0.55;
  color : var(--principal);
}
.btn-background {
  background-color : v-bind(color);
  color : white;
  border: none;
}

.btn-outline {
  background: transparent;
  border: 1.5px solid;
  color : v-bind(color);

}
.btn-grey {
  background-color: var(--principal);
  color: black;
  border : none;
  font-weight: bold;
}

.btn-unibo {
  background-color: var(--unibo);
  border : none;
  color:white;
  font-weight: bold;
}

.btn-unibo-outline {
  border : 1.5px solid var(--unibo);
  color:var(--unibo);
  font-weight: bold;
  background-color: transparent;
}
</style>
