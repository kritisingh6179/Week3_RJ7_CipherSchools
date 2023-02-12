import React, { useReducer } from "react";
import ChildComponent from "./ChildComponent";
import ErrorBoundary from "./ErrorBoundary";

export const countReducer = (state, action) => {
    switch (action.type) {
        case "increment":
            if (state.count + action.payload >= 3) {
                throw new Error("Count caanot be greater than 3");
            }
            return { count: state.count + action.payload };
        case "decrement":
            return { count: state.count - action.payload };
        default:
            return state;
    }
};

const CounterComponent = ({ name }) => {
    const [state, dispatch] = useReducer(countReducer, { count: 0 });
    return (
        <>
            <ErrorBoundary>
                <h1>The count is {state.count}</h1>
                <button onClick={() => dispatch({ type: "increment", payload: 2 })}>
                    Increase
                </button>
                <button onClick={() => dispatch({ type: "decrement", payload: 2 })}>
                    Decrease
                </button>
            </ErrorBoundary>

            <div>
                <ChildComponent name={name} />
            </div>
        </>
    );
};

export default CounterComponent;
