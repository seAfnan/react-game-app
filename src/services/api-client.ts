import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'b6b7eeadd7c9419d8323a42bf22e3ed2'
  }
})