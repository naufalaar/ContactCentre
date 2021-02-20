<template>
<b-nav pills fill align="center" class="py-3 mytabs">
                        <b-nav-item to="/customer/details" exact exact-active-class="active">CUSTOMER DETAILS</b-nav-item>
                        <b-nav-item to="/customer/address" exact exact-active-class="active">ADDRESSES</b-nav-item>
                        <b-nav-item to="/customer/stores" exact exact-active-class="active">STORES</b-nav-item>
                        <b-nav-item to="/customer/schemes" exact exact-active-class="active">SCHEMES</b-nav-item>
                        <b-nav-item to="/customer/banks" exact exact-active-class="active">BANKS</b-nav-item>
                        <b-nav-item to="/customer/packs" exact exact-active-class="active">PACKS</b-nav-item>
                        <b-nav-item to="/customer/payments" exact exact-active-class="active">PAYMENTS</b-nav-item>
                        <b-nav-item to="/customer/requests" exact exact-active-class="active">REQUESTS</b-nav-item>
                        
            </b-nav>
</template>

<style scoped>
.nav-pills .nav-link.active, .nav-pills .show > .nav-link {
  background-color: #00693b !important;
}
</style>