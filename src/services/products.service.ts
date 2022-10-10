import axios from "axios";
import Data  from "@/interfaces/Product";

const getProducts = async (): Promise<Data> => {
  const {data} = await axios.get("https://fortnite-api.theapinetwork.com/store/get");
  return data;
}

export const ProductService = {
  getProducts
}
