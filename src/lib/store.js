import { configureStore, createSlice } from "@reduxjs/toolkit";
import generateOrder from "./generateorder";
const slice = createSlice({
	name: "kvs",
	initialState: {
		sideOn: false,
		orders: [
			generateOrder(),
			generateOrder(),
			generateOrder(),
			generateOrder(),
			generateOrder(),
			generateOrder(),
		],
		mfyTime: 120,
	},
	reducers: {
		toggleSide(state, action) {
			state.sideOn = !state.sideOn;
		},
		pushOrder(state, action) {
			if (!state.sideOn) {
				console.log("Side not on. Aborting...");
				return;
			}
			state.orders.push(generateOrder());
		},
		serveOrder(state, action) {
			state.orders.shift();
		},
		setMfy(state, action) {
			state.mfyTime = action.payload;
		},
	},
});
export const actions = slice.actions;
const store = configureStore({
	reducer: slice.reducer,
});
export default store;
