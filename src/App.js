import React, { useReducer } from "react";
import reducer, { initialState } from "./reducers/index";
import { CHANGE_OPERATION, applyNumber, CLEAR } from "./actions/index";
import "./App.css";
import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";

function App() {
	const [state, dispatch] = useReducer(reducer, {
		total: initialState.total,
		memory: initialState.memory,
		operation: initialState.operation,
	});

	const handleState = value => e => {
		e.preventDefault();
		switch (value) {
			case "+":
				dispatch({ type: CHANGE_OPERATION, payload: "+" });
				break;
			case "-":
				dispatch({ type: CHANGE_OPERATION, payload: "-" });
				break;
			case "*":
				dispatch({ type: CHANGE_OPERATION, payload: "*" });
				break;
			case "CE":
				dispatch({ type: CLEAR });
				break;
			default:
				dispatch(applyNumber(value));
				break;
		}
	};

	return (
		<div className="App">
			<nav className="navbar navbar-dark bg-dark">
				<a className="navbar-brand" href="#n">
					<img
						width="40px"
						src="./Lambda-Logo-Red.png"
						alt="lambda"
					/>
					Lambda Reducer Challenge
				</a>
			</nav>

			<div className="container row mt-5">
				<div className="col-md-12 d-flex justify-content-center">
					<form name="Cal">
						<TotalDisplay value={state.total} />
						<div className="row details">
							<span id="operation">
								<b>Operation:</b>
								{state.operation}
							</span>
							<span id="memory">
								<b>Memory:</b> {state.memory}
							</span>
						</div>

						<div className="row">
							<CalcButton value={"M+"} />
							<CalcButton value={"MR"} />
							<CalcButton value={"MC"} />
						</div>

						<div className="row">
							<CalcButton value={1} buttonClick={handleState} />
							<CalcButton value={2} buttonClick={handleState} />
							<CalcButton value={3} buttonClick={handleState} />
						</div>

						<div className="row">
							<CalcButton value={4} buttonClick={handleState} />
							<CalcButton value={5} buttonClick={handleState} />
							<CalcButton value={6} buttonClick={handleState} />
						</div>

						<div className="row">
							<CalcButton value={7} buttonClick={handleState} />
							<CalcButton value={8} buttonClick={handleState} />
							<CalcButton value={9} buttonClick={handleState} />
						</div>

						<div className="row">
							<CalcButton value={"+"} buttonClick={handleState} />
							<CalcButton value={"*"} buttonClick={handleState} />
							<CalcButton value={"-"} buttonClick={handleState} />
						</div>

						<div className="row ce_button">
							<CalcButton
								value={"CE"}
								buttonClick={handleState}
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default App;
