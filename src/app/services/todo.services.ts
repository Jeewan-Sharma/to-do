import { ITodoResponse } from "@/app/types";
import axios from "axios";

const API_BASE_URL = 'https://dummyjson.com';


export const getAllTodo = async (limit: number, skip: number): Promise<ITodoResponse> => {
    try {
        const response = await axios.get<ITodoResponse>(`${API_BASE_URL}/todos?limit=${limit}&skip=${skip}`, {
        });
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            throw new Error(error.response.data?.message || 'get all todo failed');
        }
        throw new Error('An unknown error occurred');
    }
}