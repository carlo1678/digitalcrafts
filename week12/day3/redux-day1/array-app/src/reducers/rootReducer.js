import { SWITCH_VAR_ONE } from "../action-types/action-types";

const initialState = {
  varOne: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SWITCH_VAR_ONE:
      return {
        ...state,
        varOne: [...state.varOne, { name: "Joe" }, { name2: "Mikael" }],
      };
    default:
      return state;
  }
}

export default rootReducer;
