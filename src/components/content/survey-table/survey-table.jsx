import React from "react";
import './survey-table.scss';


class SurveyTable extends React.Component {
    render() {
        let classAnimationName = '';
        if (this.props.opened === 'open') classAnimationName = 'survey-table-down ';
        if (this.props.opened === 'close') classAnimationName = 'survey-table-up ';
        return (
            <div className={classAnimationName + 'survey-table'}>
                {this.props.children}
            </div>
        );
    }
}

export default SurveyTable