<template>
  <div>
    <NuxtLink to="/detail"></NuxtLink>
    <div class="bigTable">
      <div class="topBar">UMUT OTOMOTİV</div>
      <div class="mainBar">
        <div class="photo">
          <DetailSlider></DetailSlider>
        </div>

        <div class="info">
          <DetailInfo> </DetailInfo>
        </div>

        <div class="description">
           asdgasdfasdgklasgjkldfasgjkldasdgjkjkadsgjkglasdkjlgasdjklgasdjklsdgjklgasdjkldgjklsjklsgdgjksjklasdgjklsdgjklsdgajklsdgjkasdgjklasdgjklsdgjkljklsdgjklsg
        </div>
      </div>
      <div class="rightBar"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
    width: 24.67%;
    height: 100%;
    float: right;
    background:mintcream;
     border-style: groove;
    border-width: medium;
  }
  .description {
    width: 74.69%;
    height: 30%;
    float: left;
    border-style: groove;
    border-width: medium;
    background: mintcream;
    word-wrap: break-word;
    padding: 10px;

  }
  .descText{
      margin:10px;
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
  .descText{
      margin:10px;
      width: 50px;
  }
}
</style>