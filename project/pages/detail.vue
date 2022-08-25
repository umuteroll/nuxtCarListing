<template>
<div>
<NuxtLink to="/detail"></NuxtLink>
<div class="bigTable">
    <div class="photo">
     <DetailSlider></DetailSlider>
    </div>
     
    
    <div class="info">

    </div>

    <div class="description">

    </div>
   
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

@media only screen and (min-width: 768px) {
  /* For desktop: */

.bigTable{
    height: 100vh;
    width: 100vw;    
}
.photo{
    width: 65%;
    height: 70%;
    float: left;
}
.info{
    width: 35%;
    height: 100%;
    float:right;
    background: midnightblue;
}
.description{
    width: 65%;
    height: 30%;
    float:left;
    background: black;
}

}
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .bigTable{
    height: 100vh;
    width: 100vw;  
   position: relative;

  }
  .photo{
    width: 100%;
    height: 50%;
}
.description{
     width: 100%;
    height: 20%;
    background: black;
}
  .info{
    width: 100%;
    height: 30%;
    background: midnightblue;
    position: absolute;
    bottom: 0;
}
  
  
  
  }

</style>