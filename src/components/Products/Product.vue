<script setup lang="ts">
import {Product} from "@/interfaces/Product";

interface Props {
  product: Product
}

const {product} = defineProps<Props>();
</script>

<template>
  <div class="card">
    <img
        v-bind:src="product.item.images.icon"
        alt="@/img/icons/favicon-16x16.png"
        style="width: 100%"
    />
    <p class="price">${{product.store.cost}}</p>
    <h1>{{product.item.name}}</h1>
    <p><button @click="addToCart({product})">Add to cart</button></p>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {mapActions}      from "vuex";

export default defineComponent(
    {
      name: "Product",
      methods: {
        ...mapActions(['addToCart'])
      }
    }
)
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
}

.price {
  color: grey;
  font-size: 22px;
}

.card button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

.card button:hover {
  opacity: 0.7;
}
</style>