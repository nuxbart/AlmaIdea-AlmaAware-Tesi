<script  setup>
  import HomeIcon from '../components/icons/home.vue'
  import UserIcon from '../components/icons/user.vue'
  import BadgesIcon from '../components/icons/badge-check.vue'
  import GreenhouseIcon from '../components/icons/greenhouse.vue'

  import { useMq } from "vue3-mq";
  const mq = useMq();
</script>
<template>
  <nav class="sdgLine">
    <router-link to="/home/"><HomeIcon></HomeIcon></router-link>
    <!--mobile version -->
    <router-link to="/profil/" v-if="mq.mobile===true"><UserIcon></UserIcon></router-link>
    <router-link to="/badges/" v-if="mq.mobile===true"><BadgesIcon></BadgesIcon></router-link>
    <!--kiosk version -->
    <router-link to="/greenhouse/" v-if="mq.mobile===false"><GreenhouseIcon></GreenhouseIcon></router-link>
  </nav>
</template>

<style scoped>
nav{
  background-color: var(--principal);
  display:flex;
  justify-content: space-evenly;
  align-items: center;
  
  /* SDG_line implement in style.css*/
  border-top : var(--sdgLine-width) solid;
  
  /* box-shadow : X Y blur Spreat Color */
  box-shadow: var(--box-shadow);

  position : sticky;
  bottom : 0;
  left : 0;
  width:100%;
  height:8vh;
}

@media (min-width: 1250px) {
  nav{
    flex-direction: column;
    justify-content: flex-start;
    align-items: middle;
    align-content: center;
    padding-top : 2%;
    box-sizing: border-box;
    height:100%;
    width:5vw;
    position : absolute;
    box-sizing: border-box;
    top:0;
    border-right : var(--sdgKioskLine-width) solid;
    border-top:none;
    border-image-source:url(../assets/medias/SGD_lineVertical.svg);
  }

  .icon{
    margin-bottom : 50%;
    height: 125%;
    /*width : 60%;*/
  }
}

 
</style>
