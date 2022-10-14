<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/products">Products</router-link>

<!--    <button-->
<!--        type="button"-->
<!--        class="btn"-->
<!--        @click="showModal"-->
<!--    >Cart</button>-->

<!--    <Modal-->
<!--        v-show="isModalVisible"-->
<!--        @close="closeModal"-->
<!--    >-->
<!--      <template v-slot:header>-->
<!--        This is a new modal header.-->
<!--      </template>-->

<!--      <template v-slot:body>-->
<!--        This is a new modal body.-->
<!--      </template>-->

<!--      <template v-slot:footer>-->
<!--        This is a new modal footer.-->
<!--      </template>-->
<!--    </Modal>-->
  </div>
</template>

<script>
import {defineComponent} from "vue";
import Modal from "@/components/Modal";

export default defineComponent(
    {
      name: 'Navbar',
      components: {
        Modal
      },
      setup() {
        return {
          isModalVisible: false
        };
      },
      methods: {
        showModal() {
          this.isModalVisible = true;
        },
        closeModal() {
          this.isModalVisible = false;
        }
      }
    }
)
</script>

<style scoped>
#nav {
  list-style-type: none;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  margin: -1rem;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

#nav a {
  float: left;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

#nav a:hover {
  background: #111;
}

#nav a.router-link-exact-active {
  background: #04AA6D;
}
</style>