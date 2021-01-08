import React from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import { counterMinus, counterPlus } from "./redux/actions/actions";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import { initialStateType } from "./type/initialStateType";
import { decrease, increase } from "./redux/counter";

function App() {
	const dispatch = useDispatch();
	const counter = useSelector((store: any) => store.rootReducer.counter);
	const counter2 = useSelector((store: any) => store.counter.counter);
	const state = useSelector((state) => state);
	console.log(counter, "state", state);
	return (
		<div className="App">
			<Button
				className="increment"
				variant="text"
				color="default"
				onClick={() => dispatch(counterPlus(5))}
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
			</Button>{" "}
			<Button
				className="increment"
				variant="text"
				color="default"
				onClick={() => dispatch(increase())}
			>
				Increment
			</Button>
			<Button
				className="decrement"
				variant="text"
				color="default"
				onClick={() => dispatch(decrease(1))}
				// onClick={() => console.log("test")}
			>
				Decrement
			</Button>
			<Typography variant="h1" color="initial">
				Counter: {counter}
			</Typography>
			<Typography variant="h1" color="initial">
				Slice Counter: {counter2}
			</Typography>
		</div>
	);
}

export default App;
