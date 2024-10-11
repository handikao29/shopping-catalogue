<template>
  <q-btn
    icon="shopping_cart"
    class="card-button"
    color="primary"
    @click="addToCart"
    >Add to Cart</q-btn
  >
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AddToCartButton",
  methods: {
    addToCart() {
      this.$emit("addToCart");
    },
  },
});
</script>
