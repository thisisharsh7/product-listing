import { configureStore } from "@reduxjs/toolkit"
import productReducer from './reducers/index';
//from this file we are managing the store


export default configureStore({
    reducer: {
        productReducer,
    }
}, window._REDUX_DEVTOOLS_EXTENSIONS && window._REDUX_DEVTOOLS_EXTENSIONS())