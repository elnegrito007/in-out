import { PayloadAction } from "@reduxjs/toolkit"
import { ActionTypes } from "../action-types/action-types"
import { Fruit } from "@/types/fruits.type";

const initialState: Fruit[] = [{
    "genus": "Malus",
    "name": "Apple",
    "id": 6,
    "family": "Rosaceae",
    "order": "Rosales",
    "nutritions": {
        "carbohydrates": 11.4,
        "protein": 0.3,
        "fat": 0.4,
        "calories": 52,
        "sugar": 10.3
    }
}, {
    "genus": "Prunus",
    "name": "Apricot",
    "id": 35,
    "family": "Rosaceae",
    "order": "Rosales",
    "nutritions": {
        "carbohydrates": 3.9,
        "protein": 0.5,
        "fat": 0.1,
        "calories": 15,
        "sugar": 3.2
    }
}]


export const fruitReducer = (state = initialState, { type, payload }: PayloadAction<Fruit[]>) => {
    switch (type) {
        case ActionTypes.SET_FUITS:
            return payload
        default:
            return state
    }
}