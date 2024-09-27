// <========================== file to create the store for the application ======================>

// importing the required modules
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counter from "../slice/counterSlice";
import theme from "../slice/themeSlice";
import todo from "../slice/todoSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const rootReducer = combineReducers({
  count: counter,
  theme: theme,
  todo: todo,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
