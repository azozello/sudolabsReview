import React from 'react';
import './content.scss';
import SurveyHeader from "./survey-header/survey-header";
import SurveyTable from "./survey-table/survey-table";
import SurveyTableHeader from "./survey-table/survey-table-header/survey-table-header";
import SurveyTableRow from "./survey-table/survey-table-row/survey-table-row";
import store from "../../store";
import SurveyCheckbox from "../shared/survey-checkbox/survey-checkbox";
import {checkAllSurveyTableRows} from "../../store/actions";


class ContentComponent extends React.Component {
    state = {
        headers: [],
        sorted: {},
        surveys: []
    };

    checkAll = false;

    componentDidMount() {
        this.setState(store.getState());
        store.subscribe(
            () => {
                const newState = store.getState();
                this.checkAll = newState.surveys.find(s => s.checked === false) === undefined;
                this.setState(newState);
            }
        )
    }

    onAllCheckboxSelect = () => {
        store.dispatch(checkAllSurveyTableRows());
    };

    render() {
        const {sorted, headers, surveys} = this.state;
        return (
            <div className="col-11 content pb-5">
                <div className="row justify-content-center">
                    <SurveyHeader/>

                    <div className="col-11 mt-4 pl-0 pr-0">
                        <SurveyTable>
                            <SurveyCheckbox checked={this.checkAll} onCheckboxSelect={this.onAllCheckboxSelect}/>
                            <SurveyTableHeader sorted={sorted} headers={headers}/>
                        </SurveyTable>

                        {surveys.map((survey, index) =>
                            <SurveyTable opened={this.state.surveys[index].opened ? 'open' : 'close'} key={survey.unique}>
                                <SurveyTableRow key={survey.unique} survey={survey}/>
                            </SurveyTable>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default ContentComponent