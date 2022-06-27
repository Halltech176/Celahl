import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    firstName : ''
}
const UserSlice = createSlice({
    name : 'celahel',
    initialState,
    reducer : {
        UserDetails : (state, action) => {
            state.firstName = action.payload
        }
    }
})

export const UserReducer = UserSlice.reducer
export const {UserDetails} = UserSlice.actions