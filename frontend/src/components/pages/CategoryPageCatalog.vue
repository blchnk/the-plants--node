<template>
  <div class="container_inner">
    <div class="cards-grid row row-cols-2 row-cols-lg-3 g-4">
      <CategoryPageCatalogItem v-for="product in products"
                               :key="product.id"
                               :product="product">
      </CategoryPageCatalogItem>
    </div>
  </div>
</template>

<script>
import CategoryPageCatalogItem from "@/components/pages/CategoryPageCatalogItem";

export default {
  name: "CategoryPageCatalog",
  components: {
    CategoryPageCatalogItem
  },
  data() {
    return {}
  },
  props: {
    products: {
      type: Array
    }
  }
}
</script>

<style lang="scss">

</style>

