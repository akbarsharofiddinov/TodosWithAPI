import { createSlice } from "@reduxjs/toolkit";

interface IState {
  todos: ITodo[]
}

const initialState: IState = {
  todos: []
}

const todosSlice = createSlice({
  name: "todosSlice",
  initialState: {},
  reducers: {},
  extraReducers: {}
})

export default todosSlice.reducer;