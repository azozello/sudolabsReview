import React from "react";
import '../../../survey-table.scss';

function SurveyTableRowItemText(props) {
    let className = 'survey-table-item-text';
    className += props.first && props.first === true ? ' first' : '';
    return (
        <div>
            <p className={className}>
                {props.children}
            </p>
        </div>
    );
}

export default SurveyTableRowItemText