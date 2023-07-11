import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './message/greetingSlice';

const store = configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});

export default store;
