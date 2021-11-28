const initialState = {
	loading: false,
	account: null,
	smartContract: null,
	web3: null,
	errorMsg: '',
	balance: 0,
	modalVisible: false,
	aidrop_claimed: false
};

const blockchainReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_MODAL_VISIBLE':
			return {
				...state,
				modalVisible: action.payload,
			};
		case 'CONNECTION_REQUEST':
			return {
				...state,
				loading: true,
			};
		case 'CLEAR_ERROR_MSG':
			return {
				...state,
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
				...state,
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
