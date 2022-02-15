<template>
  <div class="container_inner">
    <div class="new-arrivals">
      <div class="chapter__title">
        <h2 class="section-title">Новые поступления</h2>
      </div>
      <div class="cards-grid row row-cols-2 row-cols-lg-4 g-4">
        <NewArrivalsCatalogItem v-for="product in PRODUCTS"
                                :key="product.id"
                                :product_data = product>
        </NewArrivalsCatalogItem>
      </div>
    </div>
  </div>
</template>

<script>
import NewArrivalsCatalogItem from "./NewArrivalsCatalogItem";
import {mapGetters} from 'vuex';

export default {
  name: "NewArrivalsCatalog",
  components: {
    NewArrivalsCatalogItem
  },
  data() {
    return {}
  },
  methods: {},
  computed: {
    ...mapGetters(['PRODUCTS'])
  }
}
</script>

<style lang="scss">

@media(max-width: 1024px) {
  .container_inner{
    padding: 0 15px;
  }
};

</style>

