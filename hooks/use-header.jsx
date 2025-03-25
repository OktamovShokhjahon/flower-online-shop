import { create } from "zustand";

const useHeader = create((set) => ({
    menuId: 1,
    setMenuId: (id) => set({ menuId: id }),
}));

export default useHeader