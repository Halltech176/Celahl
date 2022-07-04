import {createSlice} from '@reduxjs/toolkit'

const user = JSON.parse(window.localStorage.getItem('user'))
const initialState = {
    user: null
}
const UserSlice = createSlice({
    name : 'fullname',
    initialState,
    reducers : {
        UserDetails : (state, action) => {
            const {firstName, lastName} = action.payload
            state.firstName = firstName
            state.lastName = lastName
            // state.lastName = action.payload.lastName
            state = action.payload
        }
    }
})

export const UserReducer = UserSlice.reducer
export const {UserDetails} = UserSlice.actions