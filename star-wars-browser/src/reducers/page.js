const pageReducer = (state = 1, action) => {
  switch (action.type) {
    case 'CHANGE':
      return action.payload;
    default: return state;
  }
};

export default pageReducer;
