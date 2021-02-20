<template>
  <b-form @submit.prevent="search" inline class="py-5">
    <label class="sr-only" for="firstName">First Name</label>
    <b-form-input
      id="firstName"
      v-model="searchCriteria.firstName"
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder="First Name"
    ></b-form-input>

    <label class="sr-only" for="surname">Surname</label>
    <b-form-input
      id="surname"
      v-model="searchCriteria.lastName"
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder="Surname"
    ></b-form-input>

    <label class="sr-only" for="birthDate">Birth Date</label>
    <b-form-input
      id="birthDate"
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder="Birth Date"
    ></b-form-input>

    <label class="sr-only" for="customerID">Customer ID</label>
    <b-form-input
      id="customerID"
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder="Customer ID"
    ></b-form-input>

    <label class="sr-only" for="storeNumber">Store Number</label>
    <b-form-input
      id="storeNumber"
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder="Store Number"
    ></b-form-input>

    <label class="sr-only" for="postCode">Post Code</label>
    <b-form-input
      id="postCode"
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder="Post Code"
    ></b-form-input>

    <b-button type="submit" variant="secondary">SEARCH</b-button>
  </b-form>
    
</template>

<script>
import axios from 'axios';

export default{
  name: "SearchPanel",
  data(){
    return{
      content: {
        display: false,
        customers: []
      },
      searchCriteria: {
        firstName: '',
        lastName: ''
      }
    }
  },
  methods:{
    async search(){
      const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.$store.state.jwtToken
    }
      console.log(this.searchCriteria);
      await axios.post("http://localhost:8082/searchCustomers",this.searchCriteria,{headers: headers})
            .then(response => {
              console.log(response);
              this.content.display = true;
              this.content.customers = response.data;
                })
            .catch(response => {console.log(response)});
      this.$emit('searchResults',this.content);

      
    }
  }
}

</script>

<style scoped>

</style>