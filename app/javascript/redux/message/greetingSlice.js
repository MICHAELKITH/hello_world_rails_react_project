import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = 'http://localhost:3000/api/messages';

const initialState = {
  greeting: [],
  isLoading: false,
  hasError: false,
  isFetched: false,
};

export const fetchGreeting = createAsyncThunk('greeting/fetchGreetings', async () => {
  try {
    const response = await fetch(baseUrl);
    const data = await response.json();
    return data[0].message;
  } catch (error) {
    return error;
  }
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGreeting.pending, (state) => {
      const isLoading = true;
      return { ...state, isLoading };
    });
    builder.addCase(fetchGreeting.fulfilled, (state, action) => {
      const isLoading = false;
      const isFetched = true;
      const greeting = action.payload;
      return {
        ...state, greeting, isFetched, isLoading,
      };
    });
    builder.addCase(fetchGreeting.rejected, (state) => {
      const isLoading = false;
      const hasError = true;
      return {
        ...state,
        isLoading,
        hasError,
      };
    });
  },
});

export default greetingSlice.reducer;
