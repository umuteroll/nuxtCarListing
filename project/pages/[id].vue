<template>
  <div>
    <NuxtLink to="/detail"></NuxtLink>
    <div class="bigTable">
      <div class="topBar">UMUT OTOMOTİV</div>
      <div class="mainBar">
        <div v-if="detailData" class="photo">
          <DetailSlider :imageArray="detailData.photos"></DetailSlider>
        </div>

        <div v-if="detailData" class="info">
          <DetailInfo
            :carInfos="detailData"
            :mappedProp="mappedProp"
            :userInfo="detailData.userInfo"
          >
          </DetailInfo>
        </div>

        <div
          v-if="detailData"
          v-html="detailData.text"
          class="description"
        ></div>
      </div>
      <div class="rightBar"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      detailDataResponse: {},
      id: this.$route.params.id,
      mappedProp: {},
    };
  },
  computed: {
    detailData() {
      return this.detailDataResponse;
    },
  },
  created() {
    this.getDetailDataApi();
  },
  methods: {
    async getDetailDataApi() {
      try {
        const response = await axios.get(
          `http://sandbox.arabamd.com/api/v1/detail?id=${this.id}`
        );
        this.detailDataResponse = response.data;
        this.mapProportiesArray();
      } catch (error) {
        console.log("servisten veriyi alırken bir zorluk yaşandı");
      }
    },
    mapProportiesArray() {
      let obj = {};
      this.detailData?.properties?.forEach((pr) => {
        obj[pr.name] = pr.value;
      });
      obj = JSON.parse(JSON.stringify(obj));
      this.mappedProp = { ...obj };
    },
  },
};
</script>

<style>
@media only screen and (min-width: 768px) {
  /* For desktop: */

  .topBar {
    width: 100%;
    height: 10%;
    background: #ede4e4;
    display: flex;
    justify-content: center;
    font-weight: 700;
    font-size: 210%;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }
  .mainBar {
    width: 100%;
    height: 90%;
    position: absolute;
    bottom: 0;
  }

  .bigTable {
    height: 98vh;
    width: 99vw;
    display: flex;
    position: relative;
  }
  .photo {
    width: 75%;
    height: 70%;
    float: left;
  }
  .info {
    width: 25%;
    height: 100%;
    float: right;
    background: mintcream;
  }
  .description {
    width: 73.9%;
    height: 30%;
    float: left;
    background: mintcream;
    word-wrap: break-word;
    padding: 10px;
  }
  .descText {
    margin: 10px;
  }
}
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .bigTable {
    height: 100vh;
    width: 100vw;
    position: relative;
  }
  .photo {
    width: 98%;
    height: 48%;
    margin: 2%;
  }
  .description {
    width: 100%;
    height: 20%;
    border-style: groove;
    border-width: medium;
    background: mintcream;
    word-wrap: break-word;
    padding: 10px;
  }
  .info {
    width: 100%;
    border-style: groove;
    border-width: medium;
    background: mintcream;
    position: absolute;
    bottom: 0;
  }
  .mainBar {
    width: 98%;
    height: 88%;
    position: absolute;
    bottom: 0;
    margin: 2%;
  }
  .topBar {
    width: 98%;
    height: 8%;
    margin: 2%;

    background: wheat;
    display: flex;
    justify-content: center;
    font-weight: 700;
    font-size: 210%;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }
  .descText {
    margin: 10px;
    width: 50px;
  }
}
</style>