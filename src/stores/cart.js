import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: [],
  }),
  getters: {
    showCart: (state) => state.cart,
  },
  actions: {
    addToCart(item) {
      this.cart.push(item);
    },
    removeFromCart(id) {
      this.cart = this.cart.filter((item) => item.id !== id);
    },
  },
});
