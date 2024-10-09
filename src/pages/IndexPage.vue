<template>
  <q-page class="flex flex-center">
    <div>
      Item List
      <div>
        <ItemCard
          v-for="item in itemList"
          :key="`${item.id}`"
          :id="item.id"
          :itemName="item.item_name"
          :imageLink="item.image_link"
          :description="item.description"
          :sellerName="item.seller_name"
          :price="item.price"
          :rating="item.rating"
          :reviewNumber="item.review_number"
        />
      </div>
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
    };
  },
  async mounted() {
    const response = await this.$api("/db");
    this.itemList = response.data.items;
  },
});
</script>

<style></style>
