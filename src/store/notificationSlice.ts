import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type Notification = {
  id: string;
  message: string;
  type: "info" | "success" | "warning" | "error";
};

type NotificationState = {
  items: Notification[];
};

const initialState: NotificationState = {
  items: [],
};

const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    pushNotification: (state, action: PayloadAction<Notification>) => {
      state.items.push(action.payload);
    },
    removeNotification: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (notification) => notification.id !== action.payload,
      );
    },
    clearNotifications: (state) => {
      state.items = [];
    },
  },
});

export const { pushNotification, removeNotification, clearNotifications } =
  notificationSlice.actions;
export default notificationSlice.reducer;
