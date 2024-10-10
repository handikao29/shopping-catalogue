<template>
  <q-page class="flex q-pa-md">
    <div class="row full-width">
      <div class="col-md-3 col-xs-12 text-left">
        <q-input
          v-model="searchFilter"
          outlined
          dense
          @update:model-value="filterProducts"
        >
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
      <div class="col-md-9 col-xs-12 text-right">
        <span class="q-mx-md">Sort by:</span>
        <q-select
          class="sort-by-select"
          v-model="sortBy"
          :options="sortByOptions"
          @update:model-value="sortProducts"
          outlined
          dense
        />
      </div>
    </div>
    <div v-if="isLoaded" class="row full-width item-layout">
      <ItemCard
        v-for="item in itemList"
        :key="`${item.id}`"
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
    </div>
    <div v-else class="row full-width item-layout">
      <ItemCardSkeleton
        v-for="(item, index) in 10"
        :key="`${index}`"
        class="item-card"
      />
    </div>
  </q-page>
</template>

<script>
import ItemCard from "src/components/ItemCard.vue";
import ItemCardSkeleton from "src/components/ItemCardSkeleton.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    ItemCard,
    ItemCardSkeleton,
  },
  data() {
    return {
      isLoaded: false,
      searchFilter: "",
      itemListMaster: [],
      itemList: [],
      itemLayout: null,
      sortBy: null,
      sortByOptions: [
        {
          label: "Rating",
          value: "rating",
        },
        {
          label: "Review Number",
          value: "review_number",
        },
        {
          label: "Highest Price",
          value: "highest_price",
        },
        {
          label: "Lowest Price",
          value: "lowest_price",
        },
      ],
    };
  },
  async mounted() {
    const response = await this.$api("/db");
    this.itemListMaster = response.data.items;
    this.itemList = this.itemListMaster;

    if (this.sortByOptions.length) {
      this.sortBy = this.sortByOptions[0];
      this.sortProducts();
    }

    this.isLoaded = true;
  },
  methods: {
    filterProducts(keyword) {
      if (keyword !== "") {
        this.itemList = this.itemListMaster.filter((item) =>
          item?.item_name.toLowerCase().includes(keyword.toLowerCase())
        );
      } else {
        this.itemList = this.itemListMaster;
      }
    },
    sortProducts() {
      if (this.sortBy?.value) {
        this.itemList = this.itemList.sort((a, b) => {
          if (this.sortBy?.label === "Highest Price") {
            return a.price < b.price ? 1 : a.price > b.price ? -1 : 0;
          } else if (this.sortBy?.label === "Lowest Price") {
            return a.price > b.price ? 1 : a.price < b.price ? -1 : 0;
          } else {
            return a[this.sortBy?.value] < b[this.sortBy?.value]
              ? 1
              : a[this.sortBy?.value] > b[this.sortBy?.value]
              ? -1
              : 0;
          }
        });
      }
    },
  },
});
</script>
