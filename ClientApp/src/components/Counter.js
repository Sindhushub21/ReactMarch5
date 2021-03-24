import React from 'react';
import { connect } from "react-redux";

class Counter extends React.Component {
    static displayName = Counter.name;

    increment = () => {
        console.log("Increment here ");
        this.props.dispatch({ type: "INCREMENT" });
    }
    decrement = () => {
        console.log("Decrement here ");
        this.props.dispatch({ type: "DECREMENT" });
    }

    render() {
        return (
            <div className="counter">
                <h1>Welcome to Counter Page!</h1>
                <h1>Counter</h1>
                <div>
                    <button onClick={this.decrement}>-</button>
                    <span>{this.props.count}</span>
                    <button onClick={this.increment} >+</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {
        count: state.count
    }
);

export default connect(mapStateToProps)(Counter);