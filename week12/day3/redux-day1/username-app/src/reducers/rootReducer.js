const initialState = {
  username: "Bob",
  username2: "Andrew",
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_USERNAME_TO_JOE":
      return { ...state, username: "Joe" };

    case "CHANGE_USERNAME_TO_CARLO":
      return { ...state, username2: "Carlo" };

    case "CLEAR_DATA":
      return { ...state, initialState };
    default:
      return state;
  }
}

export default rootReducer;
