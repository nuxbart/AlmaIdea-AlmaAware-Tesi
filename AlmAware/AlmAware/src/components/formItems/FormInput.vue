<script lang="ts" setup>
    const props = defineProps<{
    placeholder: string;
    type: string;
    label?: string;
    id?: string;
    }>();
</script>

<template>
  <label :for="label">{{ label }}</label>
  <input :placeholder="placeholder" :type="type" class="input" :id="id" />
</template>

<style lag="css" scooped>
.input {
  border: 1.5px solid var(--principal);
  border-radius: 50px;
  height: 30px;
  width: 70vw;
  padding: 5px;
  color: black;
  margin-bottom: 3%;
}

label{
  margin-bottom : 1%;
}

@media (min-width: 1250px) {
  .input{
  width : 20vw;
  height : 4vh;
  border-radius : 50px;
  font-size: 25px;
  font-weight: 400;
  border-color : var(--unibo);
  padding : 5px 12px; 
  }
}
</style>
