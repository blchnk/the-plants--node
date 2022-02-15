<template>
    <div class="container_inner">
        <div class="collections">
            <div class="chapter__title">
                <h2 class="section-title">Коллекции</h2>
            </div>
            <div class="collections__body">
                <CollectionsItem v-for="collection in COLLECTIONS"
                                :key="collection.article"
                                :collection_data = collection>
                </CollectionsItem>
            </div>
        </div>
    </div>
</template>

<script>
import CollectionsItem from "./CollectionsItem";
import {mapGetters} from "vuex";

export default {
    name: "Collections",
    components: {
        CollectionsItem
    },
    computed: {
        ...mapGetters(['COLLECTIONS'])
    }
}
</script>

<style lang="scss">

.collections__body {
    display: flex;
    justify-content: center;
    margin: 0 -15px;
}

@media(max-width: 1024px) {
    .collections__body {
        margin: 0 -10px;
    }
};

@media(max-width: 768px) {
    .collections__body {
        flex-wrap: wrap;
    }

    .collections{
        margin-top: 30px;
    }
};

</style>
