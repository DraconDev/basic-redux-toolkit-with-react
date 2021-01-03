
const initialState = { // this is your initial state.
	counter: 0, // variable inside your state, too keep track of the count.
};

function rootReducer(state = initialState, action: any) {
	console.log(state, state.counter, action, 'switch')
	switch (action.type) {
		case "Increase":
			return {...state, counter: state.counter + action.payload};
		case "Decrease":
			return {...state, counter: state.counter - action.payload};
		default:
			return state;
	}
}
export default rootReducer