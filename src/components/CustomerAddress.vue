<template>
  <b-container fluid>
  <b-form>
  <b-card-group deck >
    <b-card bg-variant="primary" text-variant="light">
      <b-card-text>
        
        <b-form-group id="Address-group" label="Home Address">
      <b-row>
        <b-col>
          <b-form-group id="firstLine-group" description="Address Line 1">
            <b-form-input id="firstLine" v-model="activeCustomer.homeAddress.firstLine" type="text" required></b-form-input>
          </b-form-group>
        </b-col>
       
        <b-col>
          <b-form-group id="secondLine-group" description="Address Line 2">
            <b-form-input id="secondLine" v-model="activeCustomer.homeAddress.secondLine" type="text"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
         <b-form-group id="town-group" description="Town">
            <b-form-input id="town" v-model="activeCustomer.homeAddress.town" type="text" ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
       <b-row>
      
      
         <b-col>
          <b-form-group id="county-group" description="County">
            <b-form-input id="county" v-model="activeCustomer.homeAddress.county" type="text"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
         <b-form-group id="country-group" description="Country">
            <b-form-input id="country" v-model="activeCustomer.homeAddress.country" type="text" required></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
         <b-form-group id="postcode-group" description="Postcode">
            <b-form-input id="postcode" v-model="activeCustomer.homeAddress.postCode" type="text" required></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        
        <b-col>
          <b-button v-b-modal.addressLookup variant="secondary">Address Lookup</b-button>
        </b-col>
        <b-col cols="4" >
          <b-button variant="secondary">Save Home Address</b-button>
        </b-col>
      </b-row>
        </b-form-group>
         
      
    
      </b-card-text>

    </b-card>

    <b-card bg-variant="primary" text-variant="light">
      <b-card-text>
        
        <b-form-group id="Address-group" label="Delivery Address">
      <b-row>
        <b-col>
          <b-form-group id="firstLine-group" description="Address Line 1">
            <b-form-input id="firstLine" v-model="activeCustomer.deliveryAddress.firstLine" type="text" required></b-form-input>
          </b-form-group>
        </b-col>
       
        <b-col>
          <b-form-group id="secondLine-group" description="Address Line 2">
            <b-form-input id="secondLine" v-model="activeCustomer.deliveryAddress.secondLine" type="text"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
         <b-form-group id="town-group" description="Town">
            <b-form-input id="town" v-model="activeCustomer.deliveryAddress.town" type="text" ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
       <b-row>
      
      
         <b-col>
          <b-form-group id="county-group" description="County">
            <b-form-input id="county" v-model="activeCustomer.deliveryAddress.county" type="text"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
         <b-form-group id="country-group" description="Country">
            <b-form-input id="country" v-model="activeCustomer.deliveryAddress.country" type="text" required></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
         <b-form-group id="postcode-group" description="Postcode">
            <b-form-input id="postcode" v-model="activeCustomer.deliveryAddress.postCode" type="text" required></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
        <b-row>
        <b-col>
          <b-button v-b-modal.addressLookup variant="secondary">Address Lookup</b-button>
        </b-col>
        <b-col cols="4" >
          <b-button variant="secondary">Save Delivery Address</b-button>
        </b-col>
      </b-row>
        </b-form-group>
      </b-card-text>

    </b-card>

  </b-card-group>
  </b-form>
  
  <AddressLookup />
  
</b-container>
</template>

<script>

import AddressLookup from './AddressLookup'

export default {
  name: "CustomerAddress",
  computed: {
    activeCustomer: function () {
      return this.$store.state.contextCustomer
    }
  },
  components: {
    AddressLookup
  }
}
</script>