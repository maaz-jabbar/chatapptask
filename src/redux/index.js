// import { createStore, applyMiddleware } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist'

// import thunk from 'redux-thunk';
// import allReducers from './reducers/index';
// import AsyncStorage from '@react-native-community/async-storage';
// import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';


// const persistConfig = {
//     key: "root",
//     storage: AsyncStorage,
//     stateReconciler: autoMergeLevel2,
//     timeout: null,
    
//   };

// const persistedReducer = persistReducer(persistConfig, allReducers);
// export const store = createStore(persistedReducer, {}, applyMiddleware(thunk));

// export const persistor = persistStore(store);
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import combineReducer from './reducers';
const store = createStore(
    combineReducer,
    {},
    applyMiddleware(thunk)
);

export default store;