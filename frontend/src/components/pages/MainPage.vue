<template>
  <div class="main-page-template">
    <div class="container_main">
      <div class="intro">
        <Header></Header>
        <div class="intro__main-content main-content">
          <div class="main-content__text-block">
            <h1 class="main-content__title">Цветочный магазин</h1>
            <p class="main-content__text">Принесите немного уюта в свой дом вместе с нашими <br> пышными
              растениями.</p>
            <a href="" class="buy-now-link">
              <button class="button green-btn buy-now-btn">Купить сейчас</button>
            </a>
          </div>
          <div class="main-content__img-wrapper">
            <img class="intro__img" src="@/assets/images/main/intro.png" alt="">
          </div>
        </div>
      </div>
    </div>

    <main>
      <NewArrivalsCatalog></NewArrivalsCatalog>
      <Collections></Collections>

      <div class="container_inner">
        <div class="favourites-block">
          <h2 class="section-title favourites-title">Вам понравится</h2>
          <div class="row">
            <div class="col-lg-7 col-md-12">
              <img class="img-fluid" src="@/assets/images/products/Poppy_DIY_Tablet_EditorialBlock_900x.jpg">
            </div>
            <div class="col-lg-5 pt-lg-0 pt-4">
              <div class="row gy-4 gx-lg-4 gx-2">
                <div class="col-6">
                  <div class="card">
                    <img class="card-img-top img-fluid" src="@/assets/images/products/the-sill_the-day-off-bouquet_variant_02_360x.jpg" alt="">
                    <div class="card-body d-flex justify-content-between">
                      <a href="" class="card-name card-link stretched-link">Name</a>
                      <p class="card-price">Price</p>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="card">
                    <img class="card-img-top img-fluid" src="@/assets/images/products/the-sill_the-day-off-bouquet_variant_02_360x.jpg" alt="">
                    <div class="card-body d-flex justify-content-between">
                      <a href="" class="card-name card-link stretched-link">Name</a>
                      <p class="card-price">Price</p>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="card">
                    <img class="card-img-top img-fluid" src="@/assets/images/products/the-sill_the-day-off-bouquet_variant_02_360x.jpg" alt="">
                    <div class="card-body d-flex justify-content-between">
                      <a href="" class="card-name card-link stretched-link">Name</a>
                      <p class="card-price">Price</p>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="card">
                    <img class="card-img-top img-fluid" src="@/assets/images/products/the-sill_the-day-off-bouquet_variant_02_360x.jpg" alt="">
                    <div class="card-body d-flex justify-content-between">
                      <a href="" class="card-name card-link stretched-link">Name</a>
                      <p class="card-price">Price</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <Footer></Footer>

    <Help></Help>
  </div>
</template>

<script>
import Header from "@/components/layouts/Header/Header";
import NewArrivalsCatalog from "@/components/layouts/NewArrivalsCatalog/NewArrivalsCatalog";
import Collections from "@/components/layouts/Collections/Collections";
import Footer from "@/components/layouts/Footer/Footer";
import Help from "@/components/layouts/Help/Help";

export default {
  name: "MainPage",
  data() {
    return {}
  },
  components: {
    Header,
    NewArrivalsCatalog,
    Collections,
    Footer,
    Help
  },
  computed: {}
}
</script>

<style lang="scss">

.intro {
  background-color: #FBF2EB;
  padding-bottom: 80px;
}

.intro__main-content {
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  padding: 0 40px;
}

.intro__img {
  width: 700px;
  max-width: 100%;
  height: auto;
}

.main-content__text-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 10px;
}

.main-content__text {
  font-size: 20px;
  opacity: 70%;
}

.buy-now-btn {
  margin-top: 25px;
}

.about-baby-plants {
  margin-top: 40px;
}

.about-baby-plants__img {
  max-width: 100%;
}


@media (max-width: 1024px) {
  .intro__main-content {
    flex-direction: column;
  }

  .main-content__text-block {
    padding-bottom: 30px;
  }
}

</style>
