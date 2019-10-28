import React, {Component} from 'react'

const WidgetTitle = () => {
    return (
        <div className="title">
            <h1>This is the Title of Widget Three</h1>
        </div>
    )
}

class WidgetThree extends Component {
    render() {
        return (
            <WidgetTitle />
        )
    }
}

export default WidgetThree