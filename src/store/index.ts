import { createStore }  from 'vuex'
import {ProductService} from "@/services/products.service";
import QueryData        from "@/interfaces/Product";

export interface State {
  queryData?: QueryData;
}

export default createStore<State>({
  state: {
    queryData: undefined
  },
  mutations: {
    getDataSuccess(state, data) {
      state.queryData = data;
    }
  },
  actions: {
    getProducts({commit}) {
      ProductService.getProducts().then((queryData: QueryData) => commit('getDataSuccess', queryData));
    }
  },
})
