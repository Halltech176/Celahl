import {configureStore} from '@reduxjs/toolkit'
import {UserReducer } from './UserSlice'
const Store = configureStore({
    reducer : {
        celahel : UserReducer
    }
})
export default Store