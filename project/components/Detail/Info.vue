<template>
 <div class="infoContainer">
   <div class="head">
        <span>Kullanıcı Bilgileri</span>
        <span>Kullanıcı Bilgileri</span>
        <span>Kullanıcı Bilgileri</span>
   </div>
   <div class="infoList">
     <ul class="list">
      <DetailInfoRow></DetailInfoRow>
      <DetailInfoRow></DetailInfoRow>
      <DetailInfoRow></DetailInfoRow>
      <DetailInfoRow></DetailInfoRow>
      <DetailInfoRow></DetailInfoRow>
      <DetailInfoRow></DetailInfoRow>
      <DetailInfoRow></DetailInfoRow>
      <DetailInfoRow></DetailInfoRow>
     </ul>
   </div>
   <div class="infoUser">
     <span>Kullanıcı Bilgileri</span>
       <ul class="list">
      <DetailInfoRow></DetailInfoRow>
      <DetailInfoRow></DetailInfoRow>
      <DetailInfoRow></DetailInfoRow>
     </ul>
   </div>
 </div>
</template>

<script>

export default {
 
 data() {
  return {
  
  }
 },
 
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
.infoContainer{
   border-style: groove;
  border-width: medium;
}

.infoUser{
  margin: 5%;
   border-style: groove;
  border-width: medium;
  text-align: center;
  margin-top: 40%;
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */


  
  
  }

</style>