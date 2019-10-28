import React, {Component} from 'react'
import Calendar from "./Calendar";

const WidgetTitle = () => {
    return (
        <div className="title">
            <h1>This is the Title of Deutsche Bahn Widget</h1>
        </div>
    )
}

const WidgetText = props => {
    return (
        <div className="text">
            This is some text for the Deutsche Bahn Widget: {props.text}
        </div>
    )
}

class DeutscheBahn extends Component {
    render() {
        return (
            <>
                <WidgetTitle />
                <WidgetText text="props text for DB" />
            </>
        )
    }
}

export default DeutscheBahn