const initialState = {
  loading: false,
  name: "",
  allTokens: [],
  price: 0,
  accountTokens: [],
  error: false,
  errorMsg: "",
  total: 0,
  airdrop: 0,
  total_airdrop: 0,
  showAnimation: true
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHECK_DATA_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "CHECK_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        ...action.payload,
        // name: action.payload.name,
        // allTokens: action.payload.allTokens,
        // price: action.payload.price,
        // total: action.payload.total
      };
    case "CHECK_DATA_FAILED":
      return {
        ...state,
        loading: false,
        error: true,
        errorMsg: action.payload,
      };
    case "CHECK_ACCOUNT_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        ...action.payload
        // accountTokens: action.payload.accountTokens,
      };
    case "SHOW_ANIMATION":
      return {
        ...state,
        showAnimation: action.payload,
        // accountTokens: action.payload.accountTokens,
      };
    default:
      return state;
  }
};

export default dataReducer;
