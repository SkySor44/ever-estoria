<template>
  <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="flex flex-column align-items-center mb-6">
      <div class="text-900 text-4xl mb-4 font-medium text-center">
        Your cart total is ${{ cartStore.subTotal }}
      </div>
      <p class="text-600 font-medium text-xl mt-0 mb-4">FREE SHIPPING</p>
      <Button label="Check Out" @click="goToCheckout"></Button>
    </div>
    <ul class="list-none p-0 m-0">
      <li
        class="
          flex flex-column
          md:flex-row
          py-6
          border-top-1 border-bottom-1
          surface-border
          md:align-items-center
        "
        v-for="{ id, name, price, summary, images, quantity } in cartStore.cart"
        :key="id"
      >
        <img
          :src="images[0].url"
          class="w-12rem flex-shrink-0 mx-auto md:mx-0"
        />
        <div class="flex-auto py-5 md:pl-5">
          <div
            class="
              flex flex-wrap
              align-items-start
              sm:align-items-center
              sm:flex-row
              sm:justify-content-between
              surface-border
              pb-6
            "
          >
            <div class="w-full sm:w-6 flex flex-column">
              <span class="text-900 text-xl font-medium mb-3">{{ name }}</span>
              <span class="text-600">{{ summary }}</span>
            </div>
            <div
              class="
                w-full
                sm:w-6
                flex
                align-items-start
                justify-content-between
                mt-3
                sm:mt-0
              "
            >
              <div>
                <Dropdown
                  :modelValue="quantity"
                  @change="cartStore.updateQuantity(id, $event)"
                  :options="quantityOptions"
                ></Dropdown>
              </div>
              <div class="flex flex-column sm:align-items-end">
                <span class="text-900 text-xl font-medium mb-2 sm:mb-3"
                  >${{ price * quantity }}</span
                >
                <span
                  class="
                    cursor-pointer
                    text-pink-500
                    font-medium
                    text-sm
                    hover:text-pink-600
                    transition-colors transition-duration-300
                  "
                  tabindex="0"
                  @click="cartStore.removeFromCart(id)"
                  >Remove</span
                >
              </div>
            </div>
          </div>
          <!-- <div class="flex flex-column">
            <span class="inline-flex align-items-center mb-3">
              <i class="pi pi-envelope text-600 mr-2"></i>
              <span class="text-600 mr-2">Order today.</span>
            </span>
            <span class="inline-flex align-items-center mb-3">
              <i class="pi pi-send text-600 mr-2"></i>
              <span class="text-600 mr-2"
                >Delivery by <span class="font-bold">Dec 23.</span></span
              >
            </span>
            <span class="flex align-items-center">
              <i class="pi pi-exclamation-triangle text-600 mr-2"></i>
              <span class="text-600">Only 8 Available.</span>
            </span>
          </div> -->
        </div>
      </li>
    </ul>
    <div class="flex">
      <div class="w-12rem hidden md:block"></div>
      <ul class="list-none py-0 pr-0 pl-0 md:pl-5 mt-6 mx-0 mb-0 flex-auto">
        <li class="flex justify-content-between mb-4">
          <span class="text-xl text-900">Subtotal</span>
          <span class="text-xl text-900">${{ cartStore.subTotal }}</span>
        </li>
        <li class="flex justify-content-between mb-4">
          <span class="text-xl text-900">Shipping</span>
          <span class="text-xl text-900">Free</span>
        </li>
        <!-- <li class="flex justify-content-between mb-4">
          <span class="text-xl text-900">Taxes</span>
          <span class="text-xl text-900">$8.00</span>
        </li> -->
        <li
          class="
            flex
            justify-content-between
            border-top-1
            surface-border
            mb-4
            pt-4
          "
        >
          <span class="text-xl text-900 font-bold text-3xl">Total</span>
          <span class="text-xl text-900 font-bold text-3xl"
            >${{ cartStore.subTotal }}</span
          >
        </li>
        <li class="flex justify-content-end">
          <Button
            label="Check Out"
            class="ever-estoria-button"
            @click="goToCheckout"
          ></Button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "@/store/cart";

const cartStore = useCartStore();

const quantityOptions = useState("quantityOptions", () =>
  Array.from(new Array(10), (_, i) => i + 1)
);

const goToCheckout = () => {
  const router = useRouter();

  router.push("checkout");
};

definePageMeta({
  pageTransition: false,
  layoutTransition: false,
});
</script>

<style lang="scss">
@import "../variables.scss";
:deep(.p-button) {
  background: $ever-estoria-light-brown !important;
}
</style>
