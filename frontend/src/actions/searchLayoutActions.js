import * as types from "../actions/actionTypes";

export function loadSearchLayout(searchType, title) {
    return {
        type: types.LOAD_SEARCH_LAYOUT,
        searchType,
        title
    };
}
