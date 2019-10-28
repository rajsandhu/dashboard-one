import React, {Component} from 'react'

const WidgetTitle = () => {
    return (
        <div className="title">
            <h1>This is the Title of Widget One</h1>
        </div>
    )
}

const WidgetText = () => {
    return (
        <div className="text">
            This is some text for widget one
        </div>
    )
}

class WidgetOne extends Component {
    render() {
        return (
            <>
                <WidgetTitle />
                <WidgetText />
                </>
        )
    }
}

export default WidgetOne