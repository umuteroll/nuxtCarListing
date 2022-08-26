import axios from "axios";
export default {
  setListDataFromApi: async ({ commit }) => {
    const data = await axios.get('http://sandbox.arabamd.com/api/v1/listing?sort=1&sortDirection=0&take=10')
    commit("setListData", data);
    console.log(data);
  },
  setDetailDataFromApi: async ({ commit }, payload) => {
    const data = await axios.get(`http://sandbox.arabamd.com/api/v1/detail?id=${payload.id}`)
    commit("setListData", data);
  }
}