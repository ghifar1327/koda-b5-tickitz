import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"
import persistCombineReducers from "redux-persist/es/persistCombineReducers";
import persistStore from "redux-persist/es/persistStore";
import authSliceReduser from "./slices/authForm.slice.js"
import moviesSliceReducer from "./slices/fetchMovie.slice.js"
const persistConfig= {
    key: 'koda-redux',
    storage,
}
const persistedReducer = persistCombineReducers(persistConfig,{
    authentication : authSliceReduser,
    movies : moviesSliceReducer
})
const store = configureStore({
    reducer: persistedReducer   
})
export const persistedStore = persistStore(store)
export default store
