import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [
      {
        id: "T001",
        name: "Get Groceries from the market.",
        status: "Pending",
        date: "15/07/2024",
      },
      {
        id: "T002",
        name: "Go to Gym.",
        status: "Completed",
        date: "15/07/2024",
      },
      {
        id: "T003",
        name: "Water the plants.",
        status: "Completed",
        date: "15/07/2024",
      },
      {
        id: "T004",
        name: "Go to the park.",
        status: "Completed",
        date: "16/07/2024",
      },
      {
        id: "T005",
        name: "Get my room cleaned.",
        status: "Pending",
        date: "16/07/2024",
      },
    ],
  },
  reducers:{}
});

export default tasksSlice.reducer;

