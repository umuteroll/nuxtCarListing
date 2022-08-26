<template>
 <div class="infoContainer">
   <div v-if="carInfos" class="head">
        <span v-if="carInfos.title">{{carInfos.title}}</span>
        <span v-if="carInfos.location">{{carInfos.location.cityName}}  {{carInfos.location.townName}}</span>
        <span v-if="carInfos.priceFormatted">{{carInfos.priceFormatted}}</span>
   </div>
   <div class="infoList">
     <ul class="list">
      <DetailInfoRow :carLabel="'Model'" :carValue="carInfos.modelName"></DetailInfoRow>
      <DetailInfoRow :carLabel="'Renk'" :carValue="mappedProp.color"></DetailInfoRow>
      <DetailInfoRow :carLabel="'KM'" :carValue="mappedProp.km"></DetailInfoRow>
      <DetailInfoRow :carLabel="'Yıl'" :carValue="mappedProp.year"></DetailInfoRow>
      <DetailInfoRow :carLabel="'Vites'" :carValue="mappedProp.gear"></DetailInfoRow>
      <DetailInfoRow :carLabel="'Yakıt'" :carValue="mappedProp.fuel"></DetailInfoRow>
     </ul>
   </div>
   <div class="infoUser">
     <span >Kullanıcı Bilgileri</span>
       <ul class="list">
     <DetailInfoRow v-if="userInfo.nameSurname" :carLabel="'Ad Soyad'" :carValue="userInfo.nameSurname"></DetailInfoRow>
      <DetailInfoRow :carLabel="'Numara'" :carValue="userInfo.phoneFormatted"></DetailInfoRow>

     </ul>
   </div>
 </div>
</template>

<script>

export default {
   props: {
    carInfos: {
      type: Object,
      default: {},
    },
     mappedProp: {
      type: Object,
      default: {},
    },
     userInfo: {
      type: Object,
      default: {},
    },
    
    },
 
 data() {
  return {
  }
 },
 created(){
   console.log(this.carInfos, this.mappedProp);
 }
}
</script>

<style>
.list{
flex-direction: column;
display: flex;
clear: both;
list-style: none;
margin-right: 5% ;

}
.line {
  height: 0.7px;
  width:  100%;
}

.infoUser{
  margin: 5%;
   border-style: groove;
  border-width: medium;
  text-align: center;
  margin-top: 40%;
}
.head{
  display:grid;
  justify-content: center;
  text-align: center;
  padding: 10px;
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */


  
  
  }

</style>