import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import algorithmReducer from './slices/algorithmSlice';
import singleAlgorithmReducer from './slices/singleAlgorithmSlice'
const reducer = combineReducers({
    authState: authReducer,
    algorithmState: algorithmReducer,
    singleAlgorithmState:singleAlgorithmReducer
});

const store = configureStore({
    reducer,
    
});

export default store;
