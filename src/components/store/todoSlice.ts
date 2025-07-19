import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import '../model';
import type { Todo } from "../model";

interface TodoState {
    todos:Todo[];
}

const initialState: TodoState = {
    todos:[],
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<string>){
            const newTodo:Todo = {
                id: Date.now(),
                todo:action.payload,
                isDone:false,
            };
            state.todos.push(newTodo);
        },
        toggleTodo(state, action:PayloadAction<number>) {
            const todo = state.todos.find((t) => t.id === action.payload);
            if (todo){
                 todo.isDone = !todo.isDone;
            }
        },
        deleteTodo(state, action: PayloadAction<number>){
            state.todos = state.todos.filter((t) => t.id !== action.payload);
        },
        editTodo(state, action: PayloadAction<{id:number; newText: string }>) {
            const todo = state.todos.find((t) => t.id === action.payload.id);
            if (todo) todo.todo = action.payload.newText;
        },
    },
});

export const { addTodo, toggleTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;