import React from 'react';
import './survey-table-header-item.scss';
import store from "../../../../../store";
import {sortSurveys} from "../../../../../store/actions";
import Arrow from "../../../../shared/arrow/arrow";

class SurveyTableHeaderItem extends React.Component {

    onClicked = () => {
        const {headerItem, index} = this.props;
        if (headerItem.key !== 'created_by') {
            store.dispatch(sortSurveys(index));
        }
    };

    render() {
        return (
            <div onClick={this.onClicked} className={this.props.index === 0 ? 'ml-3' : ''}>
                <p className="survey-table-header-item-text mb-0">
                    {this.props.headerItem.value}
                </p>
                {this.props.index === this.props.sorted.index && <Arrow side={this.props.sorted.reverse}/>}
            </div>
        );
    }
}

export default SurveyTableHeaderItem