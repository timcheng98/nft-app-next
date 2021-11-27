const initialState = {
  loading: false,
  name: "",
  allTokens: [],
  price: 0,
  accountTokens: [],
  error: false,
  errorMsg: "",
  total: 0
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHECK_DATA_REQUEST":
      return {
        ...initialState,
        loading: true,
      };
    case "CHECK_DATA_SUCCESS":
      return {
        ...initialState,
        loading: false,
        ...action.payload,
        // name: action.payload.name,
        // allTokens: action.payload.allTokens,
        // price: action.payload.price,
        // total: action.payload.total
      };
    case "CHECK_DATA_FAILED":
      return {
        ...initialState,
        loading: false,
        error: true,
        errorMsg: action.payload,
      };
    case "CHECK_ACCOUNT_DATA_SUCCESS":
      return {
        ...initialState,
        loading: false,
        name: action.payload.name,
        accountTokens: action.payload.accountTokens,
      };
    default:
      return state;
  }
};

export default dataReducer;
