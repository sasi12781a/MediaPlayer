import {createStore, combineReducers, applyMiddleware} from 'redux';
import userReducer from './reducers';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}
const rootReducer = combineReducers({userReducer});

const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = createStore(persistedReducer,applyMiddleware(thunk))
export const persistor = persistStore(store)