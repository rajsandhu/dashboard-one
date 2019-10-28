import React, {Component} from 'react'

const WidgetTitle = () => {
    return (
        <div className="title">
            <h1>This is the Title of Server Status Widget</h1>
        </div>
    )
}

const WidgetText = () => {
    return (
        <div className="text">
            This is some text for Server Status widget
        </div>
    )
}

class ServerStatus extends Component {
    render() {
        return (
            <>
                <WidgetTitle />
                <WidgetText />
                </>
        )
    }
}

export default ServerStatus