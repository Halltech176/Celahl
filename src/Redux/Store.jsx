import {configureStore} from '@reduxjs/toolkit'
import {UserReducer } from './UserSlice'
const Store = configureStore({
    reducer : {
        userDetails : UserReducer
    }
})
export default Store