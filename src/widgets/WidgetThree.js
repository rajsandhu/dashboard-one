import React, {Component} from 'react'
import WidgetTwo from "./WidgetTwo";

const WidgetTitle = () => {
    return (
        <div className="title">
            <h1>This is the Title of Widget Three</h1>
        </div>
    )
}

const WidgetText = () => {
    return (
        <div className="text">
            This is some text for widget three
        </div>
    )
}

class WidgetThree extends Component {
    render() {
        return (
            <>
                <WidgetTitle />
                <WidgetText />
            </>
        )
    }
}

export default WidgetThree