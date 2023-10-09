import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './../../assignment6/screen/ToDolist/reducer'

export default configureStore({
  reducer: {
    todo: todoReducer,
  },
})