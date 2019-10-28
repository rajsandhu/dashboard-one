import React, {Component} from 'react'

const WidgetTitle = () => {
    return (
        <div className="title">
            <h1>This is the Title of Widget One</h1>
        </div>
    )
}

class WidgetOne extends Component {
    render() {
        return (
            <WidgetTitle />
        )
    }
}

export default WidgetOne