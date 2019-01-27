import logo from "../../assets/images/logo.jpg";
import {
    CHECK_ALL_SURVEY_TABLE_ROWS,
    CHECK_SURVEY_TABLE_ROW,
    OPEN_SURVEY_TABLE_ROW,
    SORT_SURVEYS
} from "../constants/action-types";

const initialState = {
    sorted: {
        index: 0,
        reverse: false
    },
    headers: [
        {key: 'title', value: 'Title'},
        {key: 'state', value: 'State'},
        {key: 'viewed', value: 'Viewed'},
        {key: 'answered', value: 'Answered'},
        {key: 'folder', value: 'Folder'},
        {key: 'created', value: 'Created'},
        {key: 'valid_until', value: 'Valid until'},
        {key: 'created_by', value: 'Created by'}
    ],
    surveys: [
        {
            unique: 1,
            data: [
                {key: 'title', value: 'Some title'},
                {key: 'state', value: 'Some state'},
                {key: 'viewed', value: 1488},
                {key: 'answered', value: 228},
                {key: 'folder', value: 'root'},
                {key: 'created', value: new Date(2017, 12, 25).toLocaleDateString()},
                {key: 'valid_until', value: new Date(2018, 1, 27).toLocaleDateString()},
            ],
            created_by: logo,
            checked: false,
            opened: false
        },
        {
            unique: 3,
            data: [
                {key: 'title', value: 'Another title'},
                {key: 'state', value: 'No state'},
                {key: 'viewed', value: 503},
                {key: 'answered', value: 207},
                {key: 'folder', value: 'folder'},
                {key: 'created', value: new Date(2017, 12, 21).toLocaleDateString()},
                {key: 'valid_until', value: new Date(2018, 1, 24).toLocaleDateString()},
            ],
            created_by: logo,
            checked: false,
            opened: false
        },
        {
            unique: 4,
            data: [
                {key: 'title', value: 'Title'},
                {key: 'state', value: 'State'},
                {key: 'viewed', value: 803},
                {key: 'answered', value: 112},
                {key: 'folder', value: 'folder'},
                {key: 'created', value: new Date(2017, 12, 26).toLocaleDateString()},
                {key: 'valid_until', value: new Date(2018, 1, 30).toLocaleDateString()},
            ],
            created_by: logo,
            checked: false,
            opened: false
        },
        {
            unique: 5,
            data: [
                {key: 'title', value: 'Title'},
                {key: 'state', value: 'State'},
                {key: 'viewed', value: 1121},
                {key: 'answered', value: 14},
                {key: 'folder', value: 'folder'},
                {key: 'created', value: new Date(2017, 12, 12).toLocaleDateString()},
                {key: 'valid_until', value: new Date(2018, 1, 19).toLocaleDateString()},
            ],
            created_by: logo,
            checked: false,
            opened: false
        },
        {
            unique: 6,
            data: [
                {key: 'title', value: 'Title'},
                {key: 'state', value: 'State'},
                {key: 'viewed', value: 312000},
                {key: 'answered', value: 165153},
                {key: 'folder', value: 'folder'},
                {key: 'created', value: new Date(2017, 12, 9).toLocaleDateString()},
                {key: 'valid_until', value: new Date(2018, 1, 28).toLocaleDateString()},
            ],
            created_by: logo,
            checked: false,
            opened: false
        },
        {
            unique: 7,
            data: [
                {key: 'title', value: 'Title'},
                {key: 'state', value: 'State'},
                {key: 'viewed', value: 20633},
                {key: 'answered', value: 1180},
                {key: 'folder', value: 'folder'},
                {key: 'created', value: new Date(2017, 12, 30).toLocaleDateString()},
                {key: 'valid_until', value: new Date(2018, 1, 29).toLocaleDateString()},
            ],
            created_by: logo,
            checked: false,
            opened: false
        }
    ]
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case CHECK_ALL_SURVEY_TABLE_ROWS:
            const checkedAllSurveys = state.surveys.map(s => ({...s}));
            const allTrue = checkedAllSurveys.find(s => s.checked === false) === undefined;
            if (allTrue) {
                checkedAllSurveys.forEach(s => s.checked = false)
            } else {
                checkedAllSurveys.forEach(s => s.checked = true)
            }
            return {
                ...state,
                surveys: checkedAllSurveys
            };

        case CHECK_SURVEY_TABLE_ROW:
            const checkedSurveys = state.surveys.map(s => ({...s}));
            checkedSurveys.find(s => s.unique === action.payload.unique).checked
                = !checkedSurveys.find(s => s.unique === action.payload.unique).checked;
            return {
                ...state,
                surveys: checkedSurveys
            };

        case SORT_SURVEYS:
            const sortedSurveys = state.surveys.map(s => ({...s}));
            sortedSurveys.sort((a, b) =>
                (a.data[action.payload].value > b.data[action.payload].value)
                    ? 1 : ((b.data[action.payload].value > a.data[action.payload].value) ? -1 : 0));
            const newSorted = {
                index: action.payload,
                reverse: state.sorted.index === action.payload ? !state.sorted.reverse : false
            };
            if (newSorted.reverse)  sortedSurveys.reverse();
            return {
                ...state,
                sorted: newSorted,
                surveys: sortedSurveys
            };

        case OPEN_SURVEY_TABLE_ROW:
            const {unique} = action.payload;
            const newSurveys = state.surveys.map(s => (
                {
                    ...s,
                    opened: s.unique === unique && s.opened === false
                }));
            return {
                ...state,
                surveys: newSurveys
            };

        default:
            const defaultSortedSurveys = state.surveys.sort((a, b) =>
                (a.data[state.sorted.index].value > b.data[state.sorted.index].value)
                    ? 1 : ((b.data[state.sorted.index].value > a.data[state.sorted.index].value) ? -1 : 0));
            return {
                ...state,
                surveys: defaultSortedSurveys
            };
    }
}

export default rootReducer;