 <template>
  <div class="table">
    <div class="product" v-for="(product, index) in carList" :key="index">
      <img @click="navDetail(product.id)" :src="product.photo" />
      <div @click="navDetail(product.id)" class="model">
        {{ product.modelName }}
      </div>
      <div @click="navDetail(product.id)" class="city">
        {{ product.location.cityName }}
      </div>
      <div @click="navDetail(product.id)" class="price">
        {{ product.priceFormatted }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    carList: {
      type: Array,
      default: [],
    },
  },
  methods: {
    navDetail(id) {
      return navigateTo({
        path: `/${id}`,
      });
    },
  },
};
</script>
<style scoped>
@media only screen and (min-width: 768px) {
  /* For desktop: */
  .product {
    height: 100px;
    width: 95%;
    border-style: groove;
    border-width: medium;
    margin-left: 30px;
    padding: 10px;
  }
  .table {
    background: mintcream;
    border-radius: 25px;
    border: 2px solid #73ad21;
    padding: 20px;
  }
  .product > img {
    height: 100%;
    width: 95px;
    float: left;
  }

  .product > div {
    padding-left: 10px;
    vertical-align: top;
    line-height: 65px;
    font-size: 15px;
    float: left;
  }

  .product > div.price {
    float: right;
    font-size: 18px;
  }
  .model {
    margin-left: 30px;
    font-family: "Courier New", Courier, monospace;
    font-weight: 700;
  }
  .city {
    padding-left: 300px;
  }
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .product {
    height: 100px;
    margin: 1px;
    width: 100%;
    border-style: groove;
    border-width: medium;
  }
  .table {
    background: mintcream;
    border-radius: 25px;
    border: 2px solid #73ad21;
    padding: 20px;
    height: 100%;
  }
  .product > img {
    height: 100px;
    width: 20%;
    float: left;
  }
  .city {
    width: 79%;
    height: 33%;
    margin-left: 1%;
  }
  .price {
    font-size: 18px;
    width: 79%;
    height: 33%;
    margin-left: 1%;
  }

  .model {
    margin: 1px;
    width: 79%;
    height: 33%;
    margin-left: 1%;
    font-family: "Courier New", Courier, monospace;
    font-weight: 700;
  }
}
</style>