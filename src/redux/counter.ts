import { createSlice } from "@reduxjs/toolkit";
import { initialStateType } from "../type/initialStateType";


const initialState = { // this is your initial state.
	counter: 0, // variable inside your state, too keep track of the count.
} as any;

const counter = createSlice({
name: 'counter',
initialState: initialState,
reducers: {
  increase(state){
    state.counter++
  }, 
  decrease(state, action){
    state.counter -= action.payload
  },
}
})


export const { increase, decrease } = counter.actions
export default counter.reducer;