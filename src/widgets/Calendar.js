import React, {Component} from 'react'

const WidgetTitle = () => {
    return (
        <div className="title">
            <h1>This is the Title of Calendar Widget</h1>
        </div>
    )
}

const WidgetText = () => {
    return (
        <div className="text">
            This is some text for Calendar Widget
        </div>
    )
}

class Calendar extends Component {
    render() {
        return (
            <>
                <WidgetTitle />
                <WidgetText />
            </>
        )
    }
}

export default Calendar