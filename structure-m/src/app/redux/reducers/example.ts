import initialState from "../initialState";

const example = (state = initialState.examples, action: any) => {
  switch (action.type) {
    case "ADD_EXAMPLE":
      return [...state, action.data.example];
    default:
      return state;
  }
};

export default example;
