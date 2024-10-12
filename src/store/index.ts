import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit";
import { apiConfig } from "./api/api.Config";
import { layoutReducer } from "./slices/layoutSlice";

const rootReducer = combineReducers({
  // ticket: ticketReducer,
  layout: layoutReducer,
  [apiConfig.reducerPath]: apiConfig.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.PROD === false,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiConfig.middleware);
  },
});

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
