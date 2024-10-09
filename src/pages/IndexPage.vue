<template>
  <q-page class="flex flex-center q-pa-md">
    <div ref="itemLayout" class="row full-width item-layout">
      <q-intersection
        v-for="item in itemList"
        :key="`${item.id}`"
        :root="itemLayout"
        transition="scale"
      >
        <ItemCard
          class="item-card"
          :id="item.id"
          :itemName="item.item_name"
          :imageLink="item.image_link"
          :description="item.description"
          :sellerName="item.seller_name"
          :price="item.price"
          :rating="item.rating"
          :reviewNumber="item.review_number"
        />
      </q-intersection>
    </div>
  </q-page>
</template>

<script>
import ItemCard from "src/components/ItemCard.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    ItemCard,
  },
  data() {
    return {
      itemList: [],
      itemLayout: null,
    };
  },
  async mounted() {
    const response = await this.$api("/db");
    this.itemList = response.data.items;
  },
});
</script>
