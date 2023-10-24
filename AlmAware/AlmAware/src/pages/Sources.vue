<script setup>
import { getSdgData } from '../assets/data/service';


</script>
<template>
    <h1></h1>
    <h2>SDG presentation</h2>
    <p>The description of the sdg come from the <a  target="_bank" href="https://www.eda.admin.ch/agenda2030/en/home/agenda-2030/die-17-ziele-fuer-eine-nachhaltige-entwicklung/ziel-1-armut-in-allen-ihren-formen-und-ueberall-beenden.html">web site of the Swiss Confederation</a></p>
    <p> The key data come from the web site of <a target="_bank" href="https://www.undp.org/sustainable-development-goals">UNDP</a></p>
    <p>The description of the sdg is also based on the <a target="_bank" href="https://sdgs.un.org/goals">official web site of the United Nations</a></p>
    
    <h2>University data</h2>
    <p> All the university data come from the annual report made by The University of Bologna and published the year after. The completed report was avaibled on the university's web site <a href="#">see the repport</a> </p>

    <h2>Pictures and icons</h2>
    <p> The sdg come from the free picture library <a href="https://www.freepik.com/">Freepik</a> </p>
    <ul v-for="sdg in 17">
        <li>SDG {{ sdg }} :  Photo of {{ getSdgData(sdg).img_author }} </li>
        
    </ul>
    <p> The SDG icon come from the official web site of  <a target="_bank" href="https://sdgs.un.org/goals">the United Nations</a> </p>
    <p>All the others icons, badges, logo and the mascot were drawing by Apolline Chenais</p>
</template>
<style scoped></style>