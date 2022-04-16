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
      this.cart = [...this.cart, { ...{ quantity: 1 }, ...product }];
    },
    removeFromCart(id) {
      this.cart = this.cart.filter((product) => id !== product.id);
    },
    updateQuantity(id, event) {
      this.cart = this.cart.map((product) => {
        if (product.id === id) {
          return { ...product, quantity: event.value };
        }
        return product;
      });
    },
  },
  getters: {
    isInCart: (state) => {
      const idsInCart = state.cart.map(({ id }) => id);
      return (id) => idsInCart.includes(id);
    },
    subTotal: (state) => {
      let total = 0;
      state.cart.forEach(({ price, quantity = 1 }) => {
        total += price * quantity;
      });
      return (Math.round(total * 100) / 100).toFixed(2);
    },
  },
});
