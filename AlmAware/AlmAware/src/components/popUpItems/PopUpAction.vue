<script lang="ts" setup>
import { getBadgeByName } from '../../assets/data/service';
import {ref} from'vue';
import Header from './ActionsItems/Header.vue';
import Multicheckbox from './ActionsItems/Multicheckbox.vue';
import Checkbox from './ActionsItems/Checkbox.vue';
import Input from './ActionsItems/Input.vue';


  const props = defineProps<{
  text?: string;
  sdg?: string;
  picto?: string;
  badgeName?: string;
  }>();
  
  const color = "var(--sdg" + props.sdg + ")";  

  const badge = getBadgeByName(props.badgeName);
  const numberActions= ref(0)
  const actionName= ref()
  const badgeType = ref()

    if (badge !== undefined && badge.Checkbox !== undefined){
      numberActions.value = badge.Checkbox
    } 

    if (badge !== undefined && badge.actionName !== undefined){
      actionName.value = badge.actionName
    } 

    if (badge !== undefined && badge.Type !== undefined){
      badgeType.value = badge.Type
    }

</script>

<template>
  <Header title="" :color="color" :picto="picto"></Header>
  <Multicheckbox v-if="badgeType =='MultiCheckbox'" :text="text" :sdg="sdg" :picto="picto" :actionName="actionName" :numberActions="numberActions"></Multicheckbox>
  <Checkbox v-if="badgeType =='Checkbox'" :text="text" :sdg="sdg" :picto="picto" actionName="actionName" :color="color"></Checkbox>
  <Input v-if="badgeType =='Input'" :text="text" :sdg="sdg" :picto="picto" actionName="actionName" :color="color"></Input>
</template>

<style lang="css" scoped>

</style>
