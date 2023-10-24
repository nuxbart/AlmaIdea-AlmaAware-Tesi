<script setup>
import Button from '../components/CustomButton.vue'

</script>

<template>
  <main>
    <div class="header">
      <h1>AlmAware</h1>
    </div>
      
      <div class="footer sdgLine">
        <router-link to="/signin/"><Button name="Sign in" type="btn-unibo" ></Button></router-link>
        <router-link to="/signup/"><Button name="Sign up" type="btn-unibo-outline" ></Button></router-link>
      </div>

  </main>
</template>

<style lang="css" scoped>
main {
  background-image: url(../assets/medias/bubble/Flower.svg);
  background-repeat: no-repeat;
  background-position: left top; 
  background-size:25vh;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.header{
  width : 100%;
  height : 60vh;
  text-align: center;

  /* add the mascotte */
  background-image: url(../assets/medias/Mascotte.svg);
  background-repeat: no-repeat;
  background-size: 30vh;
  background-position: center bottom;
}

.header h1{
  margin-top : 15vh;
}

.footer{
  background-color : var(--principal);
  height : 40vh;
  width : 100%;
  border-top : var(--sdgLine-width) solid;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: url(../assets/medias/bubble/connexion_bubble.svg);
  background-repeat: no-repeat;
  background-position: right bottom; 
  background-size:100vw;
}
.footer button{
  margin-top : 5vh;
  width:60vw;
  height : 7vh;
}

</style>
