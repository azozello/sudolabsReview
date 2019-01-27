import React from "react";
import '../survey-table.scss';
import SurveyTableRowItem from "./survey-table-row-item/survey-table-row-item";
import Dots from "../../../shared/dots/dots";
import SurveyTableRowShadow from "./survey-table-row-shadow/survey-table-row-shadow";
import SurveyCheckbox from "../../../shared/survey-checkbox/survey-checkbox";
import store from "../../../../store";
import {checkSurveyTableRow, openSurveyTableRow} from "../../../../store/actions";


class SurveyTableRow extends React.Component{

    survey = {};

    componentDidMount() {
        this.survey = this.props.survey;
    }

    render() {
        const {survey} = this.props;
        return (
            <React.Fragment>
                <SurveyCheckbox onCheckboxSelect={this.onCheckboxSelected} checked={survey.checked} margin={true}/>
                <SurveyTableRowItem survey={survey}/>
                <Dots opened={survey.opened ? 'open' : 'close'} onDotsClick={this.onDotsClicked} selected={survey.opened}/>

                <div></div>
                <SurveyTableRowShadow opened={survey.opened}/>
                <div></div>
            </React.Fragment>
        );
    }

    onDotsClicked = () => {
        store.dispatch(openSurveyTableRow(this.survey));
    };

    onCheckboxSelected = () => {
        store.dispatch(checkSurveyTableRow(this.survey));
    }
}

export default SurveyTableRow