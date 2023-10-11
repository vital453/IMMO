import { configureStore } from "@reduxjs/toolkit";
import TriggerSlice from "../feature/TriggerSlice";


export default configureStore({
    reducer: {
        trigger: TriggerSlice,
    }
})