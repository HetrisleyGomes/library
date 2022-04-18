<template>
<div class="container">
  <Navbar />
  <div class="container c2">
  <router-view/>
  </div>
  <Footer />
</div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  components:{
    Navbar, Footer
  }
}
</script>

<style>
.container{
  background-color: #fff; padding: 2px 10px;
}
.c2 {
  padding: 15px;
}
</style>


