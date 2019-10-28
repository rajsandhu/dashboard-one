import React, {Component} from 'react'

const WidgetTitle = () => {
    return (
        <div className="title">
            <h1>This is the Title of Calendar Widget</h1>
        </div>
    )
}

const WidgetText = props => {
    return (
        <div className="text">
            This is some text for Calendar Widget: {props.text}
        </div>
    )
}

class Calendar extends Component {
    render() {
        return (
            <>
                <WidgetTitle />
                <WidgetText text="props text for Calendar" />
            </>
        )
    }
}

export default Calendar