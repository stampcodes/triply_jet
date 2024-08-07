import { create } from "zustand";

interface Purchase {
  id: string;
  item: string;
  price: string;
  date: string;
}

interface PurchaseStore {
  purchases: Purchase[];
  addPurchase: (purchase: Purchase) => void;
}

export const usePurchaseStore = create<PurchaseStore>((set) => ({
  purchases: [],
  addPurchase: (purchase) =>
    set((state) => ({
      purchases: [...state.purchases, purchase],
    })),
}));
