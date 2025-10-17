import { create } from "zustand";

export const useCommandesStore = create((set) => ({
  commandes: [],

  setCommandes: (newCommandes) => set({ commandes: newCommandes }),

  addCommandes: (newCommande) =>
    set((state) => ({ commandes: [...state.commandes, newCommande] })),

    loadProducts: (productsArray) => set({ products: productsArray }),

  clearCommandes: (id) =>
    set((state) => ({
      commandes: state.commandes.filter((c) => c.id !== id),
      
    })),
      updateProduct: (id, updatedData) =>
    set((state) => ({
      products: state.products.map((p) =>
        p.id === id ? { ...p, ...updatedData } : p
      ),
      })),
}));
