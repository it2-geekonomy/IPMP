import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Task } from "@/types/task";

type TaskState = {
  items: Task[];
};

const initialState: TaskState = {
  items: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<Task[]>) => {
      state.items = action.payload;
    },
    addTask: (state, action: PayloadAction<Task>) => {
      state.items.push(action.payload);
    },
    toggleTaskComplete: (state, action: PayloadAction<string>) => {
      const task = state.items.find((item) => item.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const { setTasks, addTask, toggleTaskComplete } = taskSlice.actions;
export default taskSlice.reducer;
