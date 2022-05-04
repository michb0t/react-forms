import React, {Component} from "react";
import "./Todo.css"

class Box extends Component {
    render() {
        return (
            <div className="Todo">
                <div style={{
                height: `${this.props.height}px`,
                width: `${this.props.width}px`,
                backgroundColor: this.props.color
                }}>
                </div>
                <div className="Todo-btns">
                <button onClick={this.props.removeBox}>X</button>
                </div>
            </div>
        )
    }
}

export default Box;