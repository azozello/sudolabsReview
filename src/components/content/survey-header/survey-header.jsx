import React from 'react';
import './survey-header.scss';
import NewSurveyButton from "../../shared/new-survey-button/new-survey-button";


function SurveyHeader() {
    return (
        <div className="col-11 survey-header-container">
            <div className="row justify-content-between">
                <div className="col-auto">
                    <p className="survey-link-header">
                        Surveys
                    </p>
                </div>

                <div className="col-auto">
                    <NewSurveyButton name={'New survey'}/>
                </div>
            </div>
        </div>
    );
}

export default SurveyHeader