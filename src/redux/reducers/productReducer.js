import { ActionTypes } from "../constants/action_types.js";

const initalState = {
  products: [
    {
      id: 1,
      title: "aditya",
      category: "developer"
    }
  ]
};
export const productReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
