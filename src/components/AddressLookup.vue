<template>
<b-modal size="huge"
        header-bg-variant = "secondary" 
        header-text-variant = "light"
        body-bg-variant = "primary" 
        body-text-variant = "light"
        centered scrollable id="addressLookup" title="Address Lookup">
    <AddressLookupForm />
  </b-modal>
    

</template>

<script>
import AddressLookupForm from './AddressLookupForm'

export default {
    name: "AddressLookup",
    components:{
        AddressLookupForm
    }
}
</script>