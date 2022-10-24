import axios from "axios";
import { Fruit } from "@/types/fruits.type";

export const getAllfruits = async (): Promise<Fruit[]> => {
    return await axios.get("https://catfact.ninja/breeds")
}