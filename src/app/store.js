import { configureStore } from "@reduxjs/toolkit";
import {tasksSlice} from "../features/tasks/tasksSlice"; // Import the default export (the reducer)

export default configureStore({
  reducer: {
    tasks: tasksSlice.reducer, // Use the imported reducer directly
  },
});
