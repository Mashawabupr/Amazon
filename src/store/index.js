import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { basketReducer } from "./basketSlice";
import { filterReducer } from "./filterSlice";
import { sidebarReducer } from "./sidebarSlice";
import { reviewReducer } from "./reviewSlice";
import { productDetailsReducer } from "./productSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["sidebar"],
};
const rootReducer = combineReducers({
  basket: basketReducer,
  filter: filterReducer,
  productDetails: productDetailsReducer,
  sidebar: sidebarReducer,
  review: reviewReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
