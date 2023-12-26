import { configureStore } from "@reduxjs/toolkit";
import TriggerSlice from "../feature/TriggerSlice";
import categorySlice from "../feature/categorySlice";
import AuthReducer from "../feature/AuthSlice";
import PostReducer from "../feature/postSlice";

export default configureStore({
  reducer: {
    trigger: TriggerSlice,
    category: categorySlice,
    auth: AuthReducer,
    post: PostReducer,
  },
});
