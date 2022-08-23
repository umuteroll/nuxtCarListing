<template>  
<div class="container">
    <picture>
    <img
      decoding="auto"
      :src="src"
    >
  </picture>
  selam selam
</div>
</template>
<script>
 export default {
 props: {
    src: {
      type: String,
      default: '',
    }, 
    }



 }
</script>