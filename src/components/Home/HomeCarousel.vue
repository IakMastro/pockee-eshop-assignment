<template>
  <carousel
      :autoplay="2000"
      :settings="settings"
  >
    <slide v-for="i in images.length" :key="i">
      <img
          v-bind:src="images[i]"
          v-bind:alt="`image ${i}`"
          width=1280
          height=720
      />
    </slide>

    <template #addons>
      <navigation/>
      <pagination/>
    </template>
  </carousel>
</template>

<script lang="ts">
import {Carousel, Navigation, Pagination, Slide} from "vue3-carousel";
import {defineComponent}                         from "vue";

export default defineComponent(
    {
      name: 'HomeCarousel',
      setup() {
        const images = [
          'https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg',
          'https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg',
          'https://cdn.pixabay.com/photo/2015/05/15/14/27/eiffel-tower-768501_1280.jpg',
          'https://cdn.pixabay.com/photo/2016/12/04/19/30/berlin-cathedral-1882397_1280.jpg'
        ]

        const settings = {
          itemsToShow: 1,
          snapAlign: 'center'
        }

        return {
          images,
          settings
        }
      },
      components: {
        Carousel,
        Slide,
        Pagination,
        Navigation
      },
    }
)
</script>