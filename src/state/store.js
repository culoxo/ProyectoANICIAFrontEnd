import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { clientApi } from './api/clientApi'
import clientReducer from './clientSlice'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import { servApi } from './api/servicioApi';
import { facturaApi } from './api/facturaApi';
import { usuarioApi } from './api/usuarioApi';
import facturaReducer from './facturaSlice'
import servicioReducer from './servicioSlice'
import usuarioReducer from './usuarioSlice'


const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['clientApi'],
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_SECRET_KEY,
      onError: function (error) {
        // Handle the error.
      },
    }),
  ],
}
const rootReducer = combineReducers({ 
  [clientApi.reducerPath]: clientApi.reducer,
  [servApi.reducerPath]: servApi.reducer,
  [facturaApi.reducerPath]: facturaApi.reducer,
  [usuarioApi.reducerPath]: usuarioApi.reducer,
  client: clientReducer,
  servicio: servicioReducer,
  factura: facturaReducer,
  usuario: usuarioReducer
})

const persistedReducer = persistReducer(
  persistConfig, rootReducer)

export const store = configureStore(
  {
    reducer: persistedReducer,
    
    middleware: [thunk, clientApi.middleware, servApi.middleware, facturaApi.middleware, usuarioApi.middleware]
},
)

export const persistor = persistStore(store);
