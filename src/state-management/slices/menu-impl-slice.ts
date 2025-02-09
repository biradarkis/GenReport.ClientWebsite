// store/slices/navbarSlice.ts
import { container } from '@/utils/di/inversify.config';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface NavbarState {
    menuItems: MenuItem[];
    access: boolean;
    loading: boolean;
    error: string | null;
    shadowScreenVisible: boolean; // New state
}

const initialState: NavbarState = {
    menuItems: [],
    access: true,
    loading: false,
    error: null,
    shadowScreenVisible: false, // Default to hidden
};

export const navbarSlice = createSlice({
    name: 'navbar',
    initialState,
    reducers: {
        setAccess: (state, action: PayloadAction<boolean>) => {
            state.access = action.payload;
        },
        showShadowScreen: (state) => {
            state.shadowScreenVisible = true;
        },
        hideShadowScreen: (state) => {
            state.shadowScreenVisible = false;
        },
    },
});



export const { setAccess, showShadowScreen, hideShadowScreen } = navbarSlice.actions;
export default navbarSlice.reducer;

interface MenuItem {
  id: number;
  label: string;
  link?: string;
  children?: MenuItem[];
}