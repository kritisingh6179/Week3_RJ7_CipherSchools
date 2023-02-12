import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./actions/CounterAction";
import { Link } from "react-router-dom";

const ReduxCounter = ({ increment: inc, decrement: dec, reset: res }) => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();
    return (
        <>
            <div>ReduxCounter</div>
            <h2>The count is : {count}</h2>
            {/* <button onClick={(e) => inc()}>Increase</button>
            <button onClick={(e) => dec()}>Decrease</button>
            <button onClick={(e) => res()}>Reset</button> */}

            <button onClick={(e) => dispatch(increment())}>Increase</button>
            <button onClick={(e) => dispatch(decrement())}>Decrease</button>
            <button onClick={(e) => dispatch(reset())}>Reset</button>

            {/* <Link to={"/check-counter"}>Check Counter</Link> */}
        </>
    );
};

// const mapStateToProps = (state) => ({ count: state.count });
// const mapDispatchToProps = (dispatch) => ({
//     increment: () => dispatch(increment),
//     decrement: () => dispatch(decrement),
//     reset: () => dispatch(reset),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ReduxCounter);

export default ReduxCounter;
