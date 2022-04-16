import { defineStore } from "pinia";

export const useCollectionStore = defineStore("collections", {
  state: () => {
    return {
      collections: [],
    };
  },
  actions: {
    setCollections(collections) {
      this.collections = collections;
    },
    async initCollections() {
      const supabase = useSupabaseClient();
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

      this.collections = data;
    },
  },
});
