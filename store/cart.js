import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => {
    return {
      cart: [],
    };
  },
  actions: {
    addToCart(product) {
      const idsInCart = this.cart.map(({ id }) => id);

      if (idsInCart.includes(product.id)) return;
      this.cart = [...this.cart, product];
    },
    removeFromCart(id) {
      this.cart = this.cart.filter((product) => id !== product.id);
    },
  },
  getters: {
    isInCart: (state) => {
      const idsInCart = state.cart.map(({ id }) => id);
      return (id) => idsInCart.includes(id);
    },
  },
});
