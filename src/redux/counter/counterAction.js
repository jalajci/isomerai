import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "./counterTypes";

export const increment = () => {
  return {
    type: INCREMENT_COUNTER,
    payload: 5,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT_COUNTER,
  };
};
