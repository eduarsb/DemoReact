import { combineReducers, configureStore } from "@reduxjs/toolkit";
import appReducer from "@features/app/appSlice"
// Create the root reducer independently to obtain the RootState type



const rootReducer = combineReducers({
	app: appReducer,
});


export const store = configureStore({
	reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
