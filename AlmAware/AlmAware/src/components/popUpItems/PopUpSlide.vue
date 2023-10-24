<script lang="ts" setup>
  // Carousel import
  import { defineComponent } from "vue";
  import "vue3-carousel/dist/carousel.css";
  import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";

  import { inject } from 'vue'

  const publicPath = inject('publicPath')
  const bubbleLink = "url("+publicPath+"/assets/medias/bubble/popUp_bubble.svg)";
  const bubbleLine = "url("+publicPath+"/assets/medias/bubble/popUp_bubble_line.svg)";
  const pictoProject = "url("+publicPath+"/assets/medias/pictos/project.svg)";

  import { getTESTProjet } from "../../assets/data/service.js";
  import { useRoute } from "vue-router";
  import Project from "../Project.vue";

  defineComponent({
    name: "Basic",
    components: {
      Carousel,
      Slide,
      Pagination,
      Navigation,
    },
  });

  const props = defineProps<{
    color?: string;
  }>();

  const route = useRoute();
  const id = route.params.id;

  const projects = getTESTProjet(id);
</script>
<template>
  <Carousel class="carousel">
    <Slide v-for="project in projects" :key="project.id">
      <Project
        :sdg="id.toString()"
        :name="project.name"
        :link="project.link"
        :words="project.keyWords"
      ></Project>
    </Slide>

    <template #addons>
      <!--  <Navigation /> -->
      <Pagination class="page" />
    </template>
  </Carousel>
</template>

<style>
.carousel {
  border: 2px solid white;
  position: relative;
  margin: 3vh auto 0;
}
.carousel__item {
  height: 45vh;
  width: 100%;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}

/* .carousel__prev,
.carousel__next {
  box-sizing: content-box;
} */

/*** redesign carousel pagination from square to circle */
.carousel__pagination {
  margin: 0;
  padding: 0;
}
.carousel__pagination-button {
  border-radius: 50%;
}
.carousel__pagination-button::after {
  border-radius: 50%;
  height: 10px;
  width: 10px;
}

.carousel__pagination-button:hover::after,
.carousel__pagination-button--active::after {
  background-color: v-bind(color);
}

.carousel::before {
  width: 100%;
  height: 18vh;
  display: block;
  position: relative;

  content: "";
  /*** COLOR BUBBLE *****/
  background-color: v-bind(color); /* adapt with the sdg*/

  -webkit-mask-image: v-bind(bubbleLink);
  mask-image: v-bind(bubbleLink);
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  /*** LINE BUBBLE *****/
  background-image: v-bind(bubbleLine), v-bind(pictoProject);
  background-position: center, center;
  background-size: contain, 7vh;
  background-repeat: no-repeat;
}
</style>

