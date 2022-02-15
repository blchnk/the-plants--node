<template>
    <div class="collection__item-wrapper">
        <div class="collections__collection-item collection-item">
            <a class="collection-item__img-link" href="#">
                <img :src="require('@/assets/images/main/' + collection_data.image)" class="collection-item__img" alt="">
            </a>
            <div class="collection__title-container">
                <a href="#" class="collection-item__title underline-animation">{{ collection_data.name }}</a>
                <a class="link-icon-arrow-right" href="">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon-arrow-right" width="18" height="10">
                        <title>Learn more</title>
                        <g stroke="#2D2A24" fill="none">
                            <path d="M1 5h15M12 0l5 5-5 5"></path>
                        </g>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CollectionItem",
    props: {
        collection_data: {
            type: Object,
            default() {
                return {}
            }
        }
    }
}
</script>

<style lang="scss">

.collection__item-wrapper {
    flex: 0 1 25%;
    padding: 0 15px;
}

.collection-item__img {
    height: auto;
    width: 100%;
    padding-bottom: 10px;
}

.collection-item__title {
    font-family: PT_Serif, serif;
    font-size: 30px;
}

.link-icon-arrow-right {
    margin-left: 10px;
    margin-top: 5px;
}

.collection__title-container {
    display: flex;
    align-items: center;
}

@media(max-width: 1024px) {
    .collection__item-wrapper {
        padding: 20px 10px;
    }

    .collection-item__title{
        font-size: 24px;
    }
};

@media(max-width: 768px) {
    .collection__item-wrapper {
        flex: 0 1 50%;
    }
};

@media(max-width:425px) {
    .collection__item-wrapper {
        flex: 0 1 100%;
    }
}

</style>
