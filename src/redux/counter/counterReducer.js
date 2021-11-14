// eslint-disable-next-line import/named
import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "./counterTypes";

const initialState = {
  counter: 10,
};

// eslint-disable-next-line default-param-last
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER: {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }
    case DECREMENT_COUNTER: {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }
    default:
      return state;
  }
};

export default counterReducer;
