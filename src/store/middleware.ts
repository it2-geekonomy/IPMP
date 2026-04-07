import { type Middleware, isPlain } from "@reduxjs/toolkit";

export const serializableCheckMiddleware = {
  serializableCheck: {
    isSerializable: isPlain,
  },
};

export const extraMiddleware: Middleware[] = [];

