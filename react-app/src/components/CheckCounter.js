import React from "react";
import { connect } from "react-redux";

function CheckCounter() {
    return <div>CheckCounter {this.props.count}</div>;
}

export default connect((state) => ({ count: state.count }))(CheckCounter);
