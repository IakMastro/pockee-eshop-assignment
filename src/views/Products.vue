<template>
  <div
      v-for="(product, index) in queryData.data"
      :key="product.id"
      class="container"
  >
    <product :product="product" v-bind:style="`grid-column: ${(index % 2) + 1}`" />
  </div>
</template>

<script lang="ts">
import {defineComponent}      from 'vue';
import {mapActions, mapState} from "vuex";
import Product                from "@/components/Products/Product.vue";

export default defineComponent(
    {
      name: 'Products',
      components: {Product},
      methods: {
        ...mapActions(['getProducts'])
      },
      created() {
        this.getProducts();
      },
      computed: {
        ...mapState(['queryData'])
      }
    }
)
</script>

<style>
.container {
  margin: 2rem;
  padding: 2rem;
}
</style>