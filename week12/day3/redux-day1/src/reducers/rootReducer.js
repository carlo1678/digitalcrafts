const initialState = {
  counter: 0,
  userName: "",
  address: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD":
      return { counter: state.counter + 1 };

    case "SUBTRACT":
      return { counter: state.counter - 1 };

    default:
      return state;
  }
}
// Assigning default values to a function parameter.
// Actions are typically all caps and

export default rootReducer;
