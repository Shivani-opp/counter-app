import "./index.css"
import { Component } from "react"


class Counter extends Component {
    state = { count: 0 }
    onIncrement = () => {
        return this.setState((prevState) => ({ count: prevState.count + 1 }))
    }
    onDecrement = () => {
        return this.setState((prevState) => ({ count: prevState.count - 1 }))
    }
    onReset = () => {
        return this.setState(() => ({ count: 0 }))
    }

    render() {
        const { count } = this.state
        const counterClass = count > 0 ? "greenColor" : count === 0 ? "blackColor" : "redColor"

        return (
            <div className="bg-container">
                <div className="card">
                    <h1 className="heading">Counter</h1>
                    <p className={counterClass}>{count}</p>
                    <div className="button-container">
                        <button className="increase-button" onClick={this.onIncrement}>Increase</button>
                        <button className="decrease-button" onClick={this.onDecrement}>Decrease</button>
                        <button className="reset-button" onClick={this.onReset}>Reset</button>
                    </div>
                </div>

            </div>

        )
    }
}
export default Counter