<template>
  <div class="surface-section px-4 py-6 md:px-6 lg:px-8">
    <div class="text-900 font-medium text-4xl mb-7">Spring Collection</div>
    <div class="grid -mt-3 -ml-3 -mr-3">
      <div
        class="col-12 md:col-6 lg:col-3 mb-5"
        v-for="{ id, name, summary, price } in products"
        :key="id"
      >
        <div class="p-2">
          <div class="relative">
            <img
              src="https://s.cornershopapp.com/product-images/2758863.jpg?versionId=W6IRRGiRWD_dknK1GvRnLCmDa8a4jkWk"
              class="w-full"
            />
            <button
              :disabled="isInCart(id)"
              type="button"
              v-ripple
              class="
                border-1 border-white border-round
                py-2
                px-3
                absolute
                bg-black-alpha-30
                text-white
                inline-flex
                align-items-center
                justify-content-center
                hover:bg-black-alpha-40
                transition-colors transition-duration-300
                cursor-pointer
                p-ripple
              "
              style="bottom: 1rem; left: 1rem; width: calc(100% - 2rem)"
              :class="{
                'ever-estoria-light-brown': isInCart(id),
                disabled: isInCart(id),
              }"
              @click="() => addToCart({ id, name, summary, price })"
            >
              <i
                class="pi pi-shopping-cart mr-3 text-base"
                v-if="!isInCart(id)"
              ></i>
              <span class="text-base">{{
                isInCart(id) ? "Added to Cart!" : "Add to Cart"
              }}</span>
            </button>
          </div>
          <div
            class="flex align-items-center justify-content-between mt-3 mb-2"
          >
            <span class="text-900 font-medium text-xl">{{ name }}</span>
            <span class="text-900 text-xl ml-3">${{ price }}</span>
          </div>
          <span class="text-600">{{ summary }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "@/store/cart";
const { addToCart, cart, isInCart } = useCartStore();
const products = useState("products", () => {
  return [
    {
      id: 1,
      name: "Woman",
      summary: "This is a summary",
      price: 14.99,
    },
    {
      id: 2,
      name: "Woman",
      summary: "This is a summary",
      price: 14.99,
    },
  ];
});
// const products = useState([
//   {
//     id: 1,
//     name: "Woman",
//     summary: "This is a summary",
//     price: 14.99,
//   },
// ]);

// const supabase = useSupabaseClient();
// try {
//   const { data, error } = supabase.from("products").select();
//   if (error) {
//     console.error(error.message);
//   }

//   products.value = data;
// } catch (error) {
//   throw error;
// }
</script>
