import { getAllfruits } from "@/services/fruits-services";
import { ActionTypes } from "../action-types/action-types";
import { AppDispatch } from "../store";
  
export const selectUser = (user: any) => {
    return{
        type: ActionTypes.SELECT_USER,
        payload: user
    }
}