<template>
  <div class="full-height">
    <Navigation />
    <b-container fluid>
    <CustomerDetailsNav/>
    
    <router-view />
    </b-container>
  </div>
</template>

<script>
import Navigation from "../components/Navigation"
import CustomerDetailsNav from "../components/CustomerDetailsNav"
export default {
  name: "Customer",
  components: {
    Navigation,
    CustomerDetailsNav
  }  
}
</script>

<style scoped>
</style>