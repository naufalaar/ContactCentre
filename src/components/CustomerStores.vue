<template>
   <b-container>
  <b-form>
        <b-row align-h="end" class="py-3">
          <b-col cols="4">
        <b-button variant="secondary">Transfer Customer</b-button>
        </b-col>
        </b-row>
        
        <b-table class="text-center justify-content-center" id="my-table" bordered hover fixed no-border-collapse table-variant="light" head-variant="dark" :fields="fields" :items="storeList">
        <template #cell(Status)="data">
        {{ data.item.type }}
      
      </template>
    </b-table>
  </b-form>
</b-container>
</template>

<script>
export default {
  name: "CustomerStores",
  computed: {
    storeList: function () {
      return this.$store.state.contextCustomer.stores
    }
  },
  data(){
    return{
      fields: ['storeNumber','storeName', 'addressLineOne', 'postCode', 'Status']
    }
  },
  components: {
  }
}
</script>