<template>
     <b-form @submit.prevent="search" inline class="py-5">
    
    <label class="sr-only" for="firstLine">First Line</label>
    <b-form-input
      id="firstLine"
      v-model="searchCriteria.firstLine"
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder="First Line"
    ></b-form-input>

    <label class="sr-only" for="secondLine">Second Line</label>
    <b-form-input
      id="secondLine"
      v-model="searchCriteria.secondLine"
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder="Second Line"
    ></b-form-input>
    
    <label class="sr-only" for="birthDate">Town</label>
    <b-form-input
      id="town"
       v-model="searchCriteria.town"
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder="Town"
    ></b-form-input>
    
    <label class="sr-only" for="county">County</label>
    <b-form-input
      id="customerID"
       v-model="searchCriteria.customerID"
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder="County"
    ></b-form-input>
    
    <label class="sr-only" for="postCode">Post Code</label>
    <b-form-input
      id="postCode"
       v-model="searchCriteria.postCode"
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder="Post Code"
    ></b-form-input>
    
    <b-button type="submit" variant="secondary">SEARCH</b-button>
  
  
  </b-form>
</template>

<script>
export default {
    name: "AddressLookupForm",
    data(){
        return{
            searchCriteria: {
                firstLine: "",
                secondLine: "",
                town: "",
                county: "",
                postCode: ""
            }

        }
    }
    
    
}
</script>

<style scoped>

</style>