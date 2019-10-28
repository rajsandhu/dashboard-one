import React, {Component} from 'react'

const WidgetTitle = () => {
    return (
        <div className="title">
            <h1>This is the Title of Widget Two</h1>
        </div>
    )
}

class WidgetTwo extends Component {
    render() {
        return (
            <WidgetTitle />
        )
    }
}

export default WidgetTwo