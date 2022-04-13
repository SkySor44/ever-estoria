<template>
  <div
    class="surface-section px-4 py-4 md:px-6 lg:px-8"
    v-for="{ id, name, products } in collections"
    :key="'collection-' + id"
  >
    <div class="text-900 font-medium text-4xl mb-7">{{ name }} Collection</div>
    <div class="grid -mt-3 -ml-3 -mr-3">
      <div
        class="col-12 md:col-6 lg:col-3 mb-5"
        v-for="{ id, name, summary, price, images } in products"
        :key="id"
      >
        <div class="p-2">
          <div class="relative">
            <div class="h-full w-full bg-white flex align-items-start">
              <img :src="getPrimaryImageUrl(images)" class="w-full" />
            </div>

            <button
              :disabled="cartStore.isInCart(id)"
              type="button"
              v-ripple
              class="
                border-1 border-white border-round
                py-2
                px-3
                absolute
                text-white
                inline-flex
                align-items-center
                justify-content-center
                transition-colors transition-duration-300
                p-ripple
              "
              style="bottom: 1rem; left: 1rem; width: calc(100% - 2rem)"
              :class="{
                'ever-estoria-light-brown disabled': cartStore.isInCart(id),
                'bg-black-alpha-30 cursor-pointer hover:bg-black-alpha-40':
                  !cartStore.isInCart(id),
              }"
              @click="() => addToCart({ id, name, summary, price })"
            >
              <i
                class="pi pi-shopping-cart mr-3 text-base"
                v-if="!cartStore.isInCart(id)"
              ></i>
              <span class="text-base">{{
                cartStore.isInCart(id) ? "Added to Cart!" : "Add to Cart"
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
import { useCollectionStore } from "@/store/collections";
const cartStore = useCartStore();
const { addToCart } = cartStore;
const { setCollections, collections } = useCollectionStore();
const supabase = useSupabaseClient();

try {
  // Get active collections
  const { data, error } = await supabase
    .from("collections")
    .select(
      `id, name, description, products(id, name, price, summary, images(id, description, url, is_primary))`
    )
    .eq("active", true);

  if (error) {
    console.error(error.message);
  }

  setCollections(data);
} catch (error) {
  console.error(error.message);
  throw error;
}

const getPrimaryImageUrl = (images) => {
  const primary = images.find((image) => image.is_primary);
  if (primary) return primary.url;
  return images?.[0]?.url || "";
};
</script>
