export interface ITodoResponse {
    "limit": number,
    "skip": number,
    "todos": ITodo[],
    "total": number

}

export interface ITodo {
    userId: number
    id: number
    todo: string
    completed: boolean
}