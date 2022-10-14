<template>
  <div class="container">
    <div class="header">
      <h3 class="heading">Shopping Cart</h3>
      <h3 class="action" @click="clearCart">Remove All</h3>
    </div>

    <div v-if="cart.length === 0">
      <h3>No items on carts yet</h3>
    </div>

    <div class="items" v-else v-for="(item) in cart">
      <div class="box">
        <img
            v-bind:src="item.product.item.images.icon"
            alt="@/img/icons/favicon-16x16.png"
            style="height: 120px"
        />
      </div>
      <div class="about">
        <h1 class="title">{{ item.product.item.name }}</h1>
        <h3 class="subtitle">{{ item.product.item.description }}</h3>
      </div>
      <div class="counter">
        <button class="btn" v-if="item.quantity > 1" @click="this.changeQuantity({product: item, value: -1})">-</button>
        <div class="count">{{ item.quantity }}</div>
        <button class="btn" @click="this.changeQuantity({product:item, value: 1})">+</button>
      </div>
      <div class="prices">
        <div class="amount">{{ item.product.store.cost * item.quantity }} &euro;</div>
        <div class="remove" @click="removeFromCart({product:item})"><u>Remove</u></div>
      </div>
    </div>

    <hr>
    <div class="checkout">
      <div class="total">
        <div>
          <div class="subtotal">Sub-Total</div>
          <div class="items">{{ cart.length }} items</div>
        </div>
        <div class="amount">{{ this.totalPrice() }} &euro;</div>
      </div>
      <button class="btn">Checkout</button>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent}      from "vue";
import {mapActions, mapState} from "vuex";
import Cart                   from "@/interfaces/Cart";

export default defineComponent(
    {
      name: "Cart",
      computed: {
        ...mapState(['cart'])
      },
      methods: {
        ...mapActions(['changeQuantity', 'removeFromCart', 'clearCart']),
        totalPrice(): number {
          let totalPrice = 0;
          this.cart.forEach((product: Cart) => {
            totalPrice += product.quantity * product.product.store.cost;
          });

          return totalPrice;
        }
      }
    }
);
</script>

<style scoped>
.container {
  width: 70%;
  height: 85%;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 25px 40px #1687d933;
}

.container .header {
  margin: auto;
  width: 90%;
  height: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.container .header .heading {
  font-size: 20px;
  font-family: 'Open Sans';
  font-weight: 700;
  color: #2F3841;
}

.container .header .action {
  font-size: 14px;
  font-family: 'Open Sans';
  font-weight: 600;
  color: #E33C4C;
  cursor: pointer;
  border-bottom: 1px solid #E44C4C;
}

.container .items {
  margin: auto;
  width: 90%;
  height: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.container .items .box {
  width: 15%;
  text-align: center;
}

.container .items .about {
  height: 100%;
}

.container .items .about .title {
  padding-top: 5px;
  line-height: 10px;
  font-size: 32px;
  font-family: 'Open Sans';
  font-weight: 800;
  color: #202020;
}

.container .items .about .subtitle {
  line-height: 10px;
  font-size: 18px;
  font-family: 'Open Sans';
  font-weight: 600;
  color: #909090;
}

.container .items .counter {
  width: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.container .items .counter .btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #d9d9d9;
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-family: 'Open Sans';
  font-weight: 900;
  color: #202020;
  cursor: pointer;
}

.container .items .counter .count {
  font-size: 20px;
  font-family: "Open Sans";
  font-weight: 9000;
  color: #202020;
}

.container .items .prices {
  height: 100%;
  text-align: right;
}

.container .items .prices .amount {
  padding-top: 20px;
  font-size: 26px;
  font-family: 'Open Sans';
  font-weight: 800;
  color: #202020;
}

.container .items .prices .remove {
  padding-top: 5px;
  font-size: 14px;
  font-family: 'Open Sans';
  font-weight: 600;
  color: #E44C4C;
  cursor: pointer;
}

.container hr {
  width: 66%;
  float: right;
  margin-right: 5%;
}

.container .checkout {
  float: right;
  margin-right: 5%;
  width: 28%;
}

.container .checkout .total {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.container .checkout .total .subtotal {
  font-size: 22px;
  font-family: "Open Sans";
  font-weight: 700;
  color: #202020;
}

.container .checkout .total .items {
  font-size: 16px;
  font-family: "Open Sans";
  font-weight: 500;
  color: #909090;
  line-height: 10px;
}

.container .checkout .amount {
  font-size: 36px;
  font-family: "Open Sans";
  font-weight: 900;
  color: #202020;
}

.container .checkout .btn {
  margin-top: 5px;
  width: 100%;
  height: 40px;
  border: none;
  background: linear-gradient(to bottom right, #B8D7FF, #8EB7EB);
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  font-family: "Open Sans";
  font-weight: 600;
  color: #202020;
}
</style>