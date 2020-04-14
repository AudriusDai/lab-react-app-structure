const sample = (state = [], action: any) => {
  switch (action.type) {
    case "ADD_SAMPLE":
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

export default sample;
