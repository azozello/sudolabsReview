import React from "react";
import '../../survey-table.scss';
import SurveyTableTowShadowText from "./survey-table-row-shadow-text/survey-table-row-shadow-text";


function SurveyTableRowShadow(props) {
    let className = 'survey-item-shadow-menu ';
    className += props.opened && props.opened === true ? '' : 'd-none';
    return (
        <div className={className}>
            <div className="shadow-content">
                <div className="row justify-content-center">
                    <SurveyTableTowShadowText>
                        Activate
                    </SurveyTableTowShadowText>

                    <SurveyTableTowShadowText>
                        Preview
                    </SurveyTableTowShadowText>

                    <SurveyTableTowShadowText>
                        Edit
                    </SurveyTableTowShadowText>

                    <SurveyTableTowShadowText>
                        Stats
                    </SurveyTableTowShadowText>

                    <SurveyTableTowShadowText>
                        Delete
                    </SurveyTableTowShadowText>
                </div>
            </div>
        </div>
    );
}

export default SurveyTableRowShadow