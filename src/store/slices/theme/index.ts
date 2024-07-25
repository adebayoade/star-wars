import { createSlice } from '@reduxjs/toolkit';

export interface ThemeState {
  value: string;
}

const initialState: ThemeState = {
  value: 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchTheme: state => {
      if (state.value === 'light') {
        state.value = 'dark';
      } else {
        state.value = 'light';
      }
    },
  },
});

export const { switchTheme } = themeSlice.actions;

export default themeSlice.reducer;
