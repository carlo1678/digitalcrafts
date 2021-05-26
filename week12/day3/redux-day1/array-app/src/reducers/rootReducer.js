const initialState = {
  varOne: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "SWITCH_VAR_ONE":
      return {
        ...state,
        varOne: [...state.varOne, { name: "Joe" }, { name: "Mikael" }],
      };
    default:
      return state;
  }
}

export default rootReducer;
