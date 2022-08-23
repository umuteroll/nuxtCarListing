<template>
<div class="container">
  <NuxtLink to="/"></NuxtLink>
home page
<ListingRow
 :src="imageSource"></ListingRow>
</div>

</template>

<script>
 export default {
 data() {
    return {
    imageSource : "https://www.w3schools.com/images/lamp.jpg"
    };
  },



 }
</script>