import initialState from "../initialState";

const example = (state = initialState.example, action: any) => {
  switch (action.type) {
    case "ADD_EXAMPLE":
      return [
        ...state,
        {
          id: action.id,
        },
      ];
    default:
      return state;
  }
};

export default example;
