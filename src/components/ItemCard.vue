<template>
  <q-card class="card">
    <q-img
      :src="imageLink"
      class="cursor-pointer"
      @click="$router.push(`/detail/${id}`)"
    >
    </q-img>

    <q-card-section>
      <div>
        <div class="text-h6">{{ itemName }}</div>
        <div class="text-subtitle2">{{ sellerName }}</div>
      </div>
    </q-card-section>

    <q-separator />

    <q-card-section class="ellipsis-3-lines">
      {{ description }}
    </q-card-section>

    <q-card-section>
      <div class="price-tag">
        {{ `Rp. ${Intl.NumberFormat("id-ID").format(price)},-` }}
      </div>
      <div>
        <q-rating
          v-model="ratingModel"
          size="1.5em"
          color="orange"
          readonly
          icon="star_border"
          icon-selected="star"
          icon-half="star_half"
        />
        {{ rating.toFixed(1) }} ({{ reviewNumber }} review(s))
      </div>
    </q-card-section>

    <q-card-actions align="center">
      <DetailButton @goToDetail="$router.push(`/detail/${id}`)" />
      <AddToCartButton @addToCart="addToCart" />
    </q-card-actions>
  </q-card>
</template>

<script>
import { defineComponent } from "vue";
import AddToCartButton from "src/components/AddToCartButton.vue";
import DetailButton from "./DetailButton.vue";

export default defineComponent({
  name: "ItemCard",
  components: {
    AddToCartButton,
    DetailButton,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
    reviewNumber: {
      type: Number,
      default: 0,
    },
    itemName: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    sellerName: {
      type: String,
      default: "",
    },
    imageLink: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      ratingModel: 0,
    };
  },
  mounted() {
    this.ratingModel = this.rating;
  },
  methods: {
    addToCart() {
      this.$q.notify({
        message: "Item added to the cart",
        color: "positive",
        badgeColor: "positive",
        badgeTextColor: "dark",
        badgeClass: "shadow-3 glossy my-badge-class",
      });
    },
  },
});
</script>

<style>
.card {
  width: 100%;
  max-width: 400px;
  min-width: 250px;
}
</style>
