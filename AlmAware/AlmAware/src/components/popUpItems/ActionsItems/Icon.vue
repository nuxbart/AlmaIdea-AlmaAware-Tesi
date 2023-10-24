<script lang="ts" setup>
// ===== THIS VUE ALLOWS TO ADD THE MODIFIABLE ICON IN THE MULTICHECKBOX ACTION POP-UP ==== //
// import all the badges icon vue 
import Bag from '../../icons/badges/bag.vue';
import Beach from '../../icons/badges/beach.vue';
import CarbonFootprint from '../../icons/badges/carbonFootprint.vue';
import Carpool from '../../icons/badges/carpool.vue';
import Clothes from '../../icons/badges/clothes.vue';
import Co2 from '../../icons/badges/co2.vue';
import Coffee from '../../icons/badges/coffee.vue';
import Energy from '../../icons/badges/energy.vue';
import Gender from '../../icons/badges/gender.vue';
import Justice from '../../icons/badges/justice.vue';
import Landry from '../../icons/badges/landry.vue';
import Museum from '../../icons/badges/museum.vue';
import Sport from '../../icons/badges/sport.vue';

const props = defineProps<{
    icon? : string;
}>();
</script>

<template>
    <Bag v-if="icon =='bag'"></Bag>
    <Beach v-else-if="icon =='beach'"></Beach>
    <CarbonFootprint v-else-if="icon =='carbonFootprint'"></CarbonFootprint>
    <Carpool v-else-if="icon =='carpool'"></Carpool>
    <Clothes v-else-if="icon =='clothes'"></Clothes>
    <Co2 v-else-if="icon =='co2'"></Co2>
    <Coffee v-else-if="icon =='coffee'"></Coffee>
    <Energy v-else-if="icon =='energy'"></Energy>
    <Gender v-else-if="icon =='gender'"></Gender>
    <Justice v-else-if="icon =='justice'"></Justice>
    <Landry v-else-if="icon =='landry'"></Landry>
    <Museum v-else-if="icon =='museum'"></Museum>
    <Sport v-else-if="icon =='sport'"></Sport>
</template>


<style lang="css" scoped>


</style>