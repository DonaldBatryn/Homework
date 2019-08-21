const initialState = {
  city: "Please Select", 
  jobs: []
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SWITCH_LOCATION':
      return {
        city: state.city,
        jobs: state.jobs
      }
    default:
      return state;
  }
};

export default reducer;
