<template>
<div>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
    <b-table class="text-center justify-content-center" id="my-table" caption-top bordered hover fixed no-border-collapse table-variant="light" head-variant="dark" :fields="fields" :items="customers" :per-page="perPage" :current-page="currentPage">
        <template #table-caption>{{ customers.length }} customers found</template>
        <template #cell(view)>
        <b-button v-on:click="goToCustomer()">View Customer</b-button>
      </template>
    </b-table>
    
  </div>
</template>

<script>
import router from "../router";
import axios from 'axios';
  export default {
    data() {
      return {
        perPage: 3,
        currentPage: 1,
        fields: ['view','fullName', 'birthDate', 'addressLine1', 'postCode', 'customerNumber', 'storeNumber']
      }
    },
    props: {
      customers: Array
    },
    computed: {
      rows() {
        return this.customers.length
      }


    },
    methods: {
    async goToCustomer() {
      const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.$store.state.jwtToken
      }
      await axios.get("http://localhost:8082/searchCustomer",{headers: headers})
            .then(response => {
              console.log(response.data);
              this.$store.dispatch('setCustomer',response.data);
              router.push('customer/details')
                })
            .catch(response => {console.log(response)});
      
    }
  }
  }
</script>

<style scoped>

caption{
  color: --primary;
}

</style>