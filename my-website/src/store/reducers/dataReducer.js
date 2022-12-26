import { Action_DATA_Types } from "../action-types"

const initialState = {
    loading: false,
    movies: [ ],
    error: null
}

export const movieReducers = (state = initialState, action) => {
    switch (action.type) {
        case Action_DATA_Types.DATA_LOAD:
            return {
                loading: true
            }
        case Action_DATA_Types.DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                movies: action.payload,
                error:null
            }
        case Action_DATA_Types.DATA_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
      
        default: return state
    }
}