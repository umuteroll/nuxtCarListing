<template>
  <div class="container">
    <NuxtLink to="/"></NuxtLink>
    <div class="navbar">
      <div class="navbarTitle">
        UMUT OTOMOTİV
        <hr />

        <div class="line"></div>
      </div>
    </div>
    <div class="btnContainer">
      <select v-model="selected" @change="getListDataApi" class="btn">
        <option>20</option>
        <option>50</option>
      </select>
      <select class="btn" @change="setSort($event.target.selectedIndex)">
        <option>Fiyat</option>
        <option>Tarih</option>
        <option>Model</option>
      </select>
    </div>
    <ListingRow :carList="this.listData"></ListingRow>
  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      listData: [],
      selected: 20,
      sort: 0,
    };
  },
  mounted() {
    this.getListDataApi();
  },
  computed: {
    ...mapGetters(["getListData"]),
  },
  methods: {
    ...mapActions(["setListDataFromApi"]),
    async getListDataApi() {
      try {
        const response = await axios.get(
          `http://sandbox.arabamd.com/api/v1/listing?sort=${this.sort}&sortDirection=0&take=${this.selected}`
        );
        this.listData = response.data;
      } catch (error) {
        console.log("servisten veriyi alırken bir zorluk yaşandı");
      }
    },
    setSort(param) {
      this.sort = param;
      this.getListDataApi();
    },
  },
};
</script>
<style>
@media only screen and (min-width: 768px) {
  /* For desktop: */
  .container {
    height: 100%;
    width: 100%;
  }
  .btnContainer {
    margin: 20px;
    height: 100px;
  }
  .btn {
    background-color: white;
    color: black;
    border: 2px solid #4caf50; /* Green */
    margin: 5px;
    height: 50%;
    width: 10%;
  }
  .navbar {
    width: 100%;
    height: 70px;
    background: #ede4e4;
    text-align: center;
  }
  .navbarTitle {
    width: 30%;
    height: 100%;
    font-weight: 700;
    font-size: 210%;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }
  hr {
    border: none;
    height: 4px;
    background: black;
  }
}
@media only screen and (max-width: 768px) {
  .navbar {
    background: wheat;
  }
  .navbarTitle {
    font-size: 100%;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    justify-content: center;
    align-items: center;
    margin: 10px;
    margin-top: 5px;
  }
  .btnContainer {
    height: 20px;
    margin-bottom: 50px;
  }
  .btn {
    background-color: white;
    color: black;
    border: 2px solid #4caf50; /* Green */
    margin: 5px;
    height: 100%;
    width: 100%;
  }
}
</style>