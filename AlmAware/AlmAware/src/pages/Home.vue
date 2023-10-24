<script setup>
import Card from '../components/SdgCard.vue'
import Bandeau from '../components/Bandeau.vue'
const sdgs= [
  // id (string) = the number of the SDG 
  // desc (string) = the name of the SDG
  { id :'1'},
  { id :'2'},
  { id :'3'},
  { id :'4'},
  { id :'5'},
  { id :'6'},
  { id :'7'},
  { id :'8'},
  { id :'9'},
  { id :'10'},
  { id :'11'},
  { id :'12'},
  { id :'13'},
  { id :'14'},
  { id :'15'},
  { id :'16'},
  { id :'17'},
]
// responsive part 
import { useMq } from "vue3-mq";
const mq = useMq();

useHead({
      title: 'Home',
      meta: [
        {
          name: 'description',
          content: 'Website description',
        },
      ]
  })
</script>

<template>
  <Bandeau v-if="mq.mobile===true" backLink=""></Bandeau>
    <div  class="sdg_container">
      <Card v-for="sdg in sdgs" :id=sdg.id class="sdg_card"></Card> 
    </div>

</template>

<style scoped>

.sdg_container{
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
  margin: 0 ;
  padding:0;
}
.sdg_card{
  margin : 15px 15px 0px 15px;
}
.sdg_card:nth-child(even){
  margin-top:40px;
}

img{
 
}

@media (min-width: 1250px) {
  .sdg_card:nth-child(even){
    margin-top:15px;
  }

  .sdg_container{
    justify-content: flex-start;
    padding:5% 0 ;
    margin-left: 8.5vw;
    background-image: url(../assets/medias/bubble/kiosk_home_bubble_top.svg);
    background-repeat: no-repeat;
    background-size: 40%;
    background-position: right -2%;
  }


  /* add the mascot */
  .sdg_container::after{
    content :"";
    background-image: url(../assets/medias/Mascotte.svg), url(../assets/medias/bubble/kiosk_home_bubble_bottom.svg);
    background-repeat: no-repeat;
    background-position: right bottom, 5vw bottom;
    background-size: auto, 40%;
    width: 100vw;
    height: calc(100vw / 5);
    padding: 0;
    position : absolute;
    bottom :0;
    right : 0;
    z-index: -1;
  }

}
</style>
