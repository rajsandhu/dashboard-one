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
            <p>This is some text for Calendar Widget: {props.text}</p>
            <p>This is some hardcoded calendar data:</p>
            <p>2019-11-01</p>
            <p>2019-11-03</p>
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