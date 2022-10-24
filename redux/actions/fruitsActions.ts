import { getAllfruits } from "@/services/fruits-services";
import { ActionTypes } from "../action-types/action-types";
import { AppDispatch } from "../store";

export const setFruits = () => {
    return async(dispatch: AppDispatch) => {
        const fruits = await getAllfruits()
        console.log("dsadsad", fruits)

        dispatch({ type: ActionTypes.SET_FUITS, payload: fruits })
    }
}
  
export const selectedFruit = (fruit: any) => {
    return{
        type: ActionTypes.SELECTED_FRUIT,
        payload: fruit
    }
}