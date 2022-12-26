import { combineReducers } from "redux"
import { dataReducer } from "./dataReducer"
import { signup } from "./signup"

export const rootReducer =  combineReducers({
   data: dataReducers
})