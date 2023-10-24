<script lang="ts" setup>
    const props = defineProps<{
    options: Array<string>;
    placeholder: string;
    label?: string;
    id?: string;
    }>();
</script>
<template>
  <label :for="id">{{ label }}</label>
  <select :id="id">
    <option value="">{{ placeholder }}</option>
    <option v-for="option in options" :value="option">{{ option }}</option>
  </select>
</template>

<style lag="css" scoped>
select {
  border: 1.5px solid var(--principal);
  border-radius: 50px;
  height: 40px;
  width: 73vw;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  margin-bottom: 4%;
}

label {
  margin-bottom: 1%;
  font-family: var(--text--font);
  font-weight: 300;
}
</style>
