import initialState from "../initialState";

const samples = (state = initialState.samples, action: any) => {
  switch (action.type) {
    case "ADD_SAMPLE":
      return [...state, action.data.sample];
    default:
      return state;
  }
};

export default samples;
