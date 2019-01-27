import React from "react";
import './survey-table-row-shadow-text.scss';


function SurveyTableTowShadowText(prors) {
    return (
        <div className="col-auto">
            <p className="mb-0 mt-12">
                {prors.children}
            </p>
        </div>
    );
}

export default SurveyTableTowShadowText