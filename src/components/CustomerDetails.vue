<template>
<b-container fluid>
  <b-form>
  <b-card-group deck >
    <b-card bg-variant="primary" text-variant="light">
      <b-card-text>
        
          <b-form-group id="Name-group" label="Customer Details">
      <b-row>
        <b-col cols="2">
          <b-form-group id="salutation-group" description="Title">
            <b-form-select id="salutation" v-model="activeCustomer.salutation" :options="salutations" required></b-form-select>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group id="firstName-group" description="First Name">
            <b-form-input id="firstName" v-model="activeCustomer.firstName" type="text" required></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
         <b-form-group id="lastName-group" description="Last Name">
            <b-form-input id="lastName" v-model="activeCustomer.lastName" type="text" required></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="2">
         <b-form-group id="gender-group" description="Gender">
            <b-form-select id="gender" v-model="activeCustomer.gender" :options="genderOptions" required></b-form-select>
          </b-form-group>
        </b-col>
      </b-row>
      </b-form-group>
      <b-form-group id="customerDates-group" label="Important Dates">
      <b-row>
        <b-col>
          <b-form-group id="birthDate-group" description="Birth Date">
            <b-form-input disabled id="birthDate" :value="activeCustomer.birthDate"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group id="nextPackIssueDate-group" description="Next Pack Issue Date">
            <b-form-input disabled id="nextPackIssueDate" :value="activeCustomer.nextPackIssueDate"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group id="nextClensCheckDate-group" description="Next Contact lens Check">
            <b-form-input disabled id="nextClensCheckDate" :value="activeCustomer.clensCheckDate"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      </b-form-group>
      <b-form-group id="store-group" label="Customer Store Details">
          <b-row>
        <b-col>
          <b-form-group id="customerNumber-group" description="Customer Number">
            <b-form-input id="customerNumber" v-model="customerNumber" type="text" required disabled></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
         <b-form-group id="storeNumber-group" description="Store Number">
            <b-form-input id="storeNumber" :value="activeCustomer.activeStore.storeNumber + ' - ' + activeCustomer.activeStore.storeName" type="text" disabled ></b-form-input>
          </b-form-group> 
        </b-col>
        <b-col>
         <b-form-group id="status-group" description="Status">
             <b-form-input id="status" value="Active" type="text" disabled></b-form-input>           
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group id="storeFirstLine-group" description="Address Line 1">
            <b-form-input id="storeFirstLine" :value="activeCustomer.activeStore.addressLine1" type="text" disabled></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group id="storeSecondLine-group" description="Address Line 2">
            <b-form-input id="storeSecondLine" :value="activeCustomer.activeStore.addressLine2" type="text" disabled></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
         <b-form-group id="storeTown-group" description="Town">
            <b-form-input id="storeTown" :value="activeCustomer.activeStore.town" type="text" disabled></b-form-input>
          </b-form-group>
        </b-col>
         <b-col>
          <b-form-group id="storeCounty-group" description="County">
            <b-form-input id="storeCounty" :value="activeCustomer.activeStore.county" type="text" disabled></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
         <b-form-group id="storeCountry-group" description="Country">
            <b-form-input id="storeCountry" :value="activeCustomer.activeStore.country" type="text" disabled></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
         <b-form-group id="storePostcode-group" description="Postcode">
            <b-form-input id="storePostcode" :value="activeCustomer.activeStore.postCode" type="text" disabled></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
         <b-form-group id="storeTelephone-group" description="Telephone">
            <b-form-input id="storeTelephone" :value="activeCustomer.activeStore.telephone" type="text" disabled></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
         <b-form-group id="storeFax-group" description="Fax">
            <b-form-input id="storeFax" :value="activeCustomer.activeStore.fax" type="text" disabled></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
        </b-form-group>
      
      
   
      </b-card-text>

      <!--Right side -->
    </b-card>

    <b-card bg-variant="primary" text-variant="light">
      <b-card-text>
          <b-form-group id="contact-group" label="Contact Details">
      <b-row>
        <!-- <b-col cols="2">
        Email:
        </b-col>  -->
        <b-col cols="6">
          <b-form-group id="email-group" description="Email Address">
            <b-form-input id="email" v-model="activeCustomer.emailAddress" type="text" required></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="3">
        </b-col>
        <b-col cols="3" >
          <b-button variant="secondary">Save Changes</b-button>
        </b-col>
      </b-row>
      <b-row>
        <!-- <b-col cols="2">
        Home Phone:
        </b-col>  -->
        <b-col cols="2">
         <b-form-group id="phoneareacode-group" description="Phone Area Code" >
            <b-form-input id="areacode" v-model="activeCustomer.homePhone.areaCode" type="text" required></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="4">
         <b-form-group id="phonenumber-group" description="Phone Number">
             <b-form-input id="number" v-model="activeCustomer.homePhone.number" type="text" required></b-form-input>           
          </b-form-group>
        </b-col>
        <b-col cols="2">
         <b-form-group id="type-group" description="Phone Type">
            <b-form-select id="type" value="Home" :options="phoneOptions" disabled></b-form-select> 
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <!-- <b-col cols="2">
        Work Phone:
        </b-col>  -->
        <b-col cols="2">
         <b-form-group id="phoneareacode-group" description="Phone Area Code" >
            <b-form-input id="areacode" v-model="activeCustomer.officePhone.areaCode" type="text" required></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="4">
         <b-form-group id="phonenumber-group" description="Phone Number">
             <b-form-input id="number" v-model="activeCustomer.officePhone.number" type="text" required></b-form-input>           
          </b-form-group>
        </b-col>
        <b-col cols="2">
         <b-form-group id="type-group" description="Phone Type">
            <b-form-select id="type" value="Office" :options="phoneOptions" disabled></b-form-select> 
          </b-form-group>
        </b-col>
      </b-row>
       <b-row>
        <!-- <b-col cols="2">
        Mobile:
        </b-col>  -->
        <b-col cols="2">
         <b-form-group id="phoneareacode-group" description="Phone Area Code" >
            <b-form-input id="areacode" v-model="activeCustomer.mobilePhone.areaCode" type="text" required></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="4">
         <b-form-group id="phonenumber-group" description="Phone Number">
             <b-form-input id="number" v-model="activeCustomer.mobilePhone.number" type="text" required></b-form-input>           
          </b-form-group>
        </b-col>
        <b-col cols="2">
         <b-form-group id="type-group" description="Phone Type">
            <b-form-select id="type" value="Mobile" :options="phoneOptions" disabled></b-form-select> 
          </b-form-group> 
        </b-col>
      </b-row>
        </b-form-group>
        <b-form-group id="Address-group" label="Primary Address">
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
  components: {
    AddressLookup
  },
  computed:{
    activeCustomer: function () {
      return this.$store.state.contextCustomer
    }
  },
  data() {
    return{
      genderOptions: ["Male","Female","Unknown"],
      phoneOptions: ["Home","Mobile","Office"],
      salutations: ["Mr.","Mrs.","Mx."]
    }
  }
}
</script>

<style>
.form-text .text-muted {
    color: #fff !important;
}

.modal .modal-huge {
  max-width: 1200px;
  width: 1200px;
}

</style>