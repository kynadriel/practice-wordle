import { configureStore } from "@reduxjs/toolkit";
import gameSliceReducer from "./game-slice";

const store = configureStore({
  reducer: {
    game: gameSliceReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
