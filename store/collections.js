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
  },
});
