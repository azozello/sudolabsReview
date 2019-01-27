import {
    CHECK_ALL_SURVEY_TABLE_ROWS,
    CHECK_SURVEY_TABLE_ROW,
    OPEN_SURVEY_TABLE_ROW,
    SORT_SURVEYS
} from "../constants/action-types";


export function openSurveyTableRow(payload) {
    return { type: OPEN_SURVEY_TABLE_ROW, payload}
}

export function sortSurveys(payload) {
    return { type: SORT_SURVEYS, payload}
}

export function checkSurveyTableRow(payload) {
    return { type: CHECK_SURVEY_TABLE_ROW, payload}
}

export function checkAllSurveyTableRows(payload) {
    return { type: CHECK_ALL_SURVEY_TABLE_ROWS, payload}
}

