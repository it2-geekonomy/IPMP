import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Client } from "@/types/client";

type ClientState = {
  items: Client[];
};

const initialState: ClientState = {
  items: [],
};

const clientSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    setClients: (state, action: PayloadAction<Client[]>) => {
      state.items = action.payload;
    },
    addClient: (state, action: PayloadAction<Client>) => {
      state.items.push(action.payload);
    },
    removeClient: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((client) => client.id !== action.payload);
    },
  },
});

export const { setClients, addClient, removeClient } = clientSlice.actions;
export default clientSlice.reducer;
