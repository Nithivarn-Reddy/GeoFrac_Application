const initialState = {
    wells: [],
    wellNumber: null,
    stageNumber: null,
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case "SET_WELLS_DATA":
            return {
                ...state,
                wells: action.payload
            }
        case "SET_NUMBERS_DATA":
            return {
                ...state,
                wellNumber: action.payload.wellNumber,
                stageNumber: action.payload.stageNumber,
            }
        default: return state
    }
}

export default reducer