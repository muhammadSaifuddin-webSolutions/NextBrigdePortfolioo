// src/store/index.js
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { venueApi } from '@/services/venues/api';
import { itemsApi } from '@/services/items/api';
import venueReducer from '@/store/slices/venueSlice';

import storage from 'redux-persist/lib/storage'; // default = localStorage for web
import { persistReducer, persistStore } from 'redux-persist';
import { categoriesApi } from '@/services/categories/api';
import { removalIngredientsApi } from '@/services/menu-removal-ingredients/api';
import { venueHoursApi } from '@/services/venue-hours/api';
import { bookingsApi } from '@/services/bookings/api';
import { orderApi } from '@/services/orders/api';
import { notificationApi } from '@/services/notifications/api';
import { specialHoursApi } from '@/services/special-hours/api';

// Combine all reducers
const rootReducer = combineReducers({
  venue: venueReducer,
  [venueApi.reducerPath]: venueApi.reducer,
  [itemsApi.reducerPath]: itemsApi.reducer,
  [categoriesApi.reducerPath]: categoriesApi.reducer,
  [removalIngredientsApi.reducerPath]: removalIngredientsApi.reducer,
  [venueHoursApi.reducerPath]: venueHoursApi.reducer,
  [bookingsApi.reducerPath]: bookingsApi.reducer,
  [orderApi.reducerPath]: orderApi.reducer,
  [notificationApi.reducerPath]: notificationApi.reducer,
  [specialHoursApi.reducerPath]: specialHoursApi.reducer,
});

// Persist config (only persist venue slice)
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['venue'], //  Only persist "venue"
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // needed for redux-persist
    })
      .concat(venueApi.middleware)
      .concat(itemsApi.middleware)
      .concat(categoriesApi.middleware)
      .concat(removalIngredientsApi.middleware)
      .concat(bookingsApi.middleware)
      .concat(venueHoursApi.middleware)
      .concat(notificationApi.middleware)
      .concat(specialHoursApi.middleware)
      .concat(orderApi.middleware),
});

export const persistor = persistStore(store);
