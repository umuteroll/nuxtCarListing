<template>
  <Carousel>
    <Slide v-for="image in imageArray" :key="image">
      <div class="carousel__item"><img :src="image" /></div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";
export default {
  props: {
    imageArray: {
      type: Array,
      default: [],
    },
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {};
  },
};
</script>

<style>
.carousel__item {
  height: 56vh;
  width: 100%;
  background-color: white;
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */

  .carousel__item {
    height: 35vh;
    width: 100%;
    background-color: white;
    color: var(--vc-clr-white);
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>