<template>
  <div style="padding-top: 2rem" class="home">
    <h1>Welcome back, {{`${user.name} ${user.surname}`}}!</h1>

    <section class="user-info">
      <h1>Name: {{user.name}}</h1>
      <h1>Surname: {{user.surname}}</h1>
      <h1>Email: {{user.email}}</h1>
      <h1>Phone Number: {{user.phone}}</h1>
    </section>

    <home-carousel />
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import 'vue3-carousel/dist/carousel.css';
import HomeCarousel      from "@/components/Home/HomeCarousel.vue";
import User              from "@/interfaces/User";

export default defineComponent(
    {
      name: 'Home',
      setup() {
        const user: User = {
          name: "John",
          surname: "Doe",
          email: "john.doe@foobar.com",
          phone: "69344612"
        };

        return {
          user
        }
      },
      components: {
        HomeCarousel
      },
    }
);
</script>

<style>
.user-info {
  margin: 2rem;
  padding: 2rem;
  border-radius: 3rem;
  border-style: solid;
  border-color: gray;
}
</style>
