import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: true,
        showSuggestion: false,
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu: (state) => {
            state.isMenuOpen = false;
        },
        setShowSuggestion: (state, action) => {
            state.showSuggestion = action.payload;
        }
    }
})

export const {toggleMenu, closeMenu, setShowSuggestion} = appSlice.actions;
export default appSlice.reducer;