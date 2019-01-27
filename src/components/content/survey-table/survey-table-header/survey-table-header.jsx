import React from "react";
import '../survey-table.scss';
import SurveyTableHeaderItem from "./survey-table-header-item/survey-table-header-item";


const SurveyTableHeader = ({headers, sorted}) => {
    return (
        <div className="survey-table-header">
            {headers.map((h, i) => <SurveyTableHeaderItem key={i} sorted={sorted} headerItem={h} index={i}/>)}
        </div>
    );
};

export default SurveyTableHeader