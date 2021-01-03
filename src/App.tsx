import React from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import { counterMinus, counterPlus } from "./redux/actions/actions";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import { initialStateType } from "./type/initialState";

function App() {
	const dispatch = useDispatch();
	const counter = useSelector((state: any) => state.rootReducer.counter);
	console.log(counter, "state");
	return (
		<div className="App">
			<Button
				className="increment"
				variant="text"
				color="default"
				onClick={() => dispatch(counterPlus(1))}
			>
				Increment
			</Button>
			<Button
				className="decrement"
				variant="text"
				color="default"
				onClick={() => dispatch(counterMinus(1))}
				// onClick={() => console.log("test")}
			>
				Decrement
			</Button>
			<Typography variant="h1" color="initial">
				Counter: {counter}
			</Typography>
		</div>
	);
}

export default App;
