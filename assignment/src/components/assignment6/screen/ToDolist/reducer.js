import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    item: [{title:'Assignmet 3', status:'ongoing'}],
    onging:[{title:'Assignmet 3', status:'ongoing'}, {title:'Assignmet 4', status:'ongoing'}, {title:'Assignmet 5', status:'ongoing'}, {title:'Assignmet 6', status:'ongoing'}],
    completed:[{title:'Assignmet 1', status:'completed'}, {title:'Assignmet 2', status:'completed'}]
},
  reducers: {
    addToDoList: (state, action) => {
        console.log(state, action)
        state.item = [...state.item, {name:'ritesh'}]
    },
    deleteToDoList: (state) => {
        state.item = [...state.item, {name:'ritesh'}]
    },
    finishTask: (state, action) => {
        state.completed = [action.payload, ...state.completed];
        state.onging = state.onging.filter((task)=>{
            return task.title !== action.payload.title
        });
        // console.log(state.onging);
    },
    restoreTask: (state, action) => {
        state.onging = [action.payload, ...state.onging];
        state.completed = state.completed.filter((task)=>{
            return task.title !== action.payload.title
        });
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToDoList, deleteToDoList, finishTask, restoreTask} = todoSlice.actions

export default todoSlice.reducer