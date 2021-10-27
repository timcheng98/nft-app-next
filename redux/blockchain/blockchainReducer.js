const initialState = {
	loading: false,
	account: null,
	smartContract: null,
	web3: null,
	errorMsg: '',
	balance: 0,
};

const blockchainReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'CONNECTION_REQUEST':
			return {
				...initialState,
				loading: true,
			};
		case 'clearErrorMsg':
			return {
				...initialState,
				errorMsg: '',
			};
		case 'CONNECTION_INIT':
			return {
				...state,
				loading: false,
				...action.payload,
				// smartContract: action.payload.smartContract,
				// web3: action.payload.web3,
			};
		case 'CONNECTION_SUCCESS':
			return {
				...state,
				loading: false,
				...action.payload,

				// account: action.payload.account,
				// smartContract: action.payload.smartContract,
				// web3: action.payload.web3,
			};
		case 'CONNECTION_FAILED':
			return {
				...initialState,
				loading: false,
				errorMsg: action.payload,
			};
		case 'UPDATE_ACCOUNT':
			return {
				...state,
				...action.payload,
				// account: action.payload.account,
			};
		default:
			return state;
	}
};

export default blockchainReducer;
