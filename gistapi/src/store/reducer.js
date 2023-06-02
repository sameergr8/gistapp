// store/reducer.js
const initialState = {
    gists: {
      loading: false,
      error: null,
      data: [],
    },
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_GISTS_REQUEST':
        return {
          ...state,
          gists: {
            ...state.gists,
            loading: true,
            error: null,
          },
        };
      case 'FETCH_GISTS_SUCCESS':
        return {
          ...state,
          gists: {
            ...state.gists,
            loading: false,
            data: action.payload,
          },
        };
      case 'FETCH_GISTS_FAILURE':
        return {
          ...state,
          gists: {
            ...state.gists,
            loading: false,
            error: action.payload,
          },
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  