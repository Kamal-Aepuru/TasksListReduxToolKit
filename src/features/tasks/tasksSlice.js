import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await axios.get(
    "https://task-list-hw-server-Student-neoG-Ca.replit.app/tasks"
  );
  return response.data;
});

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasksList: [],
    status: "idle",
    error: null,
  },
  reducers: {
    tasksButtonPressed: (state, action) => {
      let taskFound = false;
      state.tasksList.forEach((dateGroup) => {
        dateGroup.tasks.forEach((task) => {
          if (task.taskId === action.payload) {
            task.taskStatus =
              task.taskStatus === "Completed" ? "Pending" : "Completed";
            taskFound = true;
          }
        });
      });
      if (!taskFound) {
        console.error("Task not found:", action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.status = "success";
      state.tasksList = action.payload.tasks;
    });
    builder.addCase(fetchTasks.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload.message;
    });
  },
});

export const { tasksButtonPressed } = tasksSlice.actions;
export default tasksSlice.reducer;
