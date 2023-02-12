import { INCREMENT, DECREMENT, RESET } from "../../reducers/CounterReducers";

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const reset = () => ({ type: RESET });
