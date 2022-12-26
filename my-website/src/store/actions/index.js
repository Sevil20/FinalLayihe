import axios from "axios"
import { Action_DATA_Types } from "../action-types"



export const getDatas = (search)=>{
    return async (dispatch)=>{
        try {
            

            dispatch({
                type: Action_DATA_Types.DATA_LOAD
            })

const {data} =  await axios.get('https://newsapi.org/v2/everything?q=Apple&from=2022-12-25&sortBy=popularity&apiKey=942fdb0f5c9249b59d7fd21aac6f695c')

            dispatch({
                type:Action_DATA_Types.DATA_SUCCESS,
                payload:data.Search
            })

        } catch (error) {
            dispatch({
                type:Action_DATA_Types.DATA_ERROR,
                payload:error.message
            })
        }
    }
}

export const addMovieToList = (data)=>{

    return {
        type:Action_DATA_Types.DATA_ADD_LIST,
        payload:data
    }

}

export const removeMovieFromList=(id)=>{
    return {
        type:Action_DATA_Types.REMOVE_FROM_LIST,
        payload:id
    }
}