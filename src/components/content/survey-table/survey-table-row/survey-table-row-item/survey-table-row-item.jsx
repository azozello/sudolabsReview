import React from 'react';
import '../../survey-table.scss';
import SurveyTableRowItemText from "./survey-table-row-item-text/survey-table-row-item-text";


function SurveyTableRowItem(data) {
    const {survey} = data;
    let itemClassName = 'survey-table-item ';
    itemClassName += survey.opened ? 'selected' : '';
    return (
        <div className={itemClassName}>
            {survey.data.map(d =>
                <SurveyTableRowItemText key={d.key} first={d.key === 'title'}>
                    {d.value}
                </SurveyTableRowItemText>
            )}

            <div>
                <div className="survey-table-item-logo">
                    <img src={survey.created_by} alt={'Alt text'} className="img-fluid rounded-circle"/>
                </div>
            </div>
        </div>
    );
}

export default SurveyTableRowItem