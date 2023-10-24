<script lang="ts" setup>
import CustomButton from "../../CustomButton.vue";
import { ref } from "vue";
import FormInput from "../../formItems/FormInput.vue";

const props = defineProps<{
  text?: string;
  sdg?: string;
  picto?: string;
  actionName?: string;
}>();

const color = "var(--sdg" + props.sdg + ")";
</script>

<template>
  <div class="modal-body">
    <p>{{ text }}</p>
    <form>
      <FormInput
        placeholder="your score"
        type="text"
        :label="actionName"
        :id="picto"
      ></FormInput>

      <CustomButton
        name="validated"
        type="btn-background"
        :sdg="sdg"
      ></CustomButton>
    </form>
  </div>
</template>

<style lang="css" scoped>
button {
  font-size: 14px;
  width: 32vw !important;
}

form {
  width: 90%;
  height: 50%;
  
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.modal-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 55%;
  margin: 0;
}
</style>
