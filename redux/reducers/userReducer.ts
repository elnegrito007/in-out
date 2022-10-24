import { PayloadAction } from "@reduxjs/toolkit"
import { ActionTypes } from "../action-types/action-types"
import { User } from "@/types/user.type";

const initialState: User = {
    role: "custom"
}


export const userReducer = (state = initialState, { type, payload }: PayloadAction<User>) => {
    switch (type) {
        case ActionTypes.SELECT_USER:
            return payload
        default:
            return state
    }
}