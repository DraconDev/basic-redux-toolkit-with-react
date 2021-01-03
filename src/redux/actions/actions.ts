import { createAction } from "@reduxjs/toolkit";

//? Have to specify type for typesript to accept argument
export const counterPlus = createAction<Number>('Increase',)
export const counterMinus = createAction<Number>('Decrease',)

// export const increment = createAction<number>('INCREMENT'.?);
// export const decrement = createAction('DECREMENT');

// increment(); // { type: 'INCREMENT' }
// decrement(); // { type: 'DECREMENT' }
// increment(10); // { type: 'INCREMENT', payload: 10 }
// decrement([1, 42]); // { type: 'DECREMENT', payload: [1, 42] }