<template>
  <div class="new-arrivals__item-wrapper">
    <div class="card">
      <img class="card-img-top" :src="require('@/assets/images/products/' + product_data.image)" alt="">
      <div class="card-body d-flex justify-content-between flex-lg-row flex-column">
        <a href="" class="card-name stretched-link card-link">{{ product_data.name }}</a>
        <p class="card-price text-nowrap">{{ product_data.price }} ₽</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "NewArrivalsCatalogItem",
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss">

@media(max-width: 1024px) {
  .card-price, .card-name{
    font-size: 16px;
  }
};

</style>
