import {createStore}        from 'vuex'
import {ProductService}     from "@/services/products.service";
import QueryData, {Product} from "@/interfaces/Product";
import Cart                 from "@/interfaces/Cart";

export interface State {
  queryData?: QueryData;
  cart: Cart[];
}

type ChangeQuantityProps = {
  product: any;
  value: number;
}

export default createStore<State>(
  {
    state: {
      queryData: undefined,
      cart: []
    },
    mutations: {
      getDataSuccess(state, data) {
        state.queryData = data;
      },
      addToCartSuccess(state, product) {
        let productIndex = state.cart.findIndex((cart: Cart) => product.product.itemId == cart.product.itemId);
        if (productIndex != -1) {
          state.cart[productIndex].quantity += 1;
        } else {
          state.cart.push(
            {
              product: product.product,
              quantity: 1
            }
          );
        }
      },
      removeFromCartSuccess(state, {product}) {
        state.cart = state.cart.filter((cart: Cart) => cart.product != product.product);
      },
      clearCartSuccess(state) {
        state.cart = [];
      },
      changeQuantitySuccess(state, props: ChangeQuantityProps) {
        let productIndex = state.cart.findIndex((cart: Cart) => props.product.product.itemId === cart.product.itemId);
        state.cart[productIndex].quantity += props.value;
      }
    },
    actions: {
      getProducts({commit}) {
        ProductService.getProducts().then((queryData: QueryData) => commit('getDataSuccess', queryData));
      },
      addToCart({commit}, {product}) {
        commit('addToCartSuccess', {product});
      },
      removeFromCart({commit}, {product}) {
        commit('removeFromCartSuccess', {product});
      },
      clearCart({commit}) {
        commit('clearCartSuccess');
      },
      changeQuantity({commit}, props: ChangeQuantityProps) {
        commit('changeQuantitySuccess', props);
      }
    },
  })
