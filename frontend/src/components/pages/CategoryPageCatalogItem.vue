<template>
  <div>
    <div class="col">
      <div class="card">
        <img class="card-img-top" :src="require('@/assets/images/products/' + product.image).default" alt="">
        <div class="card-body d-flex justify-content-between flex-lg-row flex-column">
          <a :href="'@/assets/images/products/' + product.id" class="card-name card-link stretched-link">{{ product.name }}</a>
          <p class="card-price text-nowrap">{{ product.price }} ₽</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "CategoryPageCatalogItem",
  props: {
    product: {
      type: Object
    }
  }
}

</script>

<style lang="scss">

</style>
