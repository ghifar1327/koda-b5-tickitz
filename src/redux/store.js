import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import persistCombineReducers from 'redux-persist/es/persistCombineReducers';
import persistStore from 'redux-persist/es/persistStore';
import authSliceReduser from './slices/authForm.slice.js';
import moviesSliceReducer from './slices/fetchMovie.slice.js';
import purchaseReducer from './slices/purchase.slice.js';
import { FLUSH, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
const persistConfig = {
  key: 'Tickitz',
  storage,
  whiteList: ['Movie'],
};
const persistedReducer = persistCombineReducers(persistConfig, {
  authentication: authSliceReduser,
  movies: moviesSliceReducer,
  purchases: purchaseReducer,
});
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [PERSIST, REHYDRATE, FLUSH, REGISTER, PURGE,],
      },
    }),
});
export const persistedStore = persistStore(store);
export default store;
