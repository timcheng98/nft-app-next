// log
import store from '../store';
import _ from 'lodash';
import axios from 'axios';

const fetchDataRequest = () => {
	return {
		type: 'CHECK_DATA_REQUEST',
	};
};

const fetchDataSuccess = (payload) => {
	return {
		type: 'CHECK_DATA_SUCCESS',
		payload: payload,
	};
};

const fetchAccountDataSuccess = (payload) => {
	return {
		type: 'CHECK_ACCOUNT_DATA_SUCCESS',
		payload: payload,
	};
};

const fetchDataFailed = (payload) => {
	return {
		type: 'CHECK_DATA_FAILED',
		payload: payload,
	};
};
export const fetchAccountData = () => {
	return async (dispatch) => {
		dispatch(fetchDataRequest());
		try {
			const totalNfts = await store
				.getState()
				.blockchain.smartContract.methods.walletOfOwner(
					store.getState().blockchain.account
				)
				.call();

			const baseURI = await store
				.getState()
				.blockchain.smartContract.methods._baseTokenURI.call()
				.call();

			const nfts = [];
			// _.map(totalNfts, async (item) => {
			// 	// const resp = await axios.get(`${baseURI}/${item + 1}`);
			// 	nfts.push(item);
			// });

			dispatch(
				fetchAccountDataSuccess({
					accountTokens: totalNfts,
				})
			);
		} catch (err) {
			console.log(err);
			dispatch(fetchDataFailed('Could not load data from contract.'));
		}
	};
};

export const fetchData = (account) => {
	return async (dispatch) => {
		dispatch(fetchDataRequest());
		try {
			let name = await store
				.getState()
				.blockchain.smartContract.methods.name()
				.call();
			let price = await store
				.getState()
				.blockchain.smartContract.methods.getPrice()
				.call();

			const total = await store
				.getState()
				.blockchain.smartContract.methods.totalSupply()
				.call();

			const baseURI = await store
				.getState()
				.blockchain.smartContract.methods._baseTokenURI.call()
				.call();



			let nfts = [];
			if (total <= 9) {
				for (let i = total; i >= 0; i -= 1) {
					nfts.push(_.toInteger(i))
					// nfts.push(axios.get(`https://wallstreetbets-nft.com/api/creature/${i}`));
				}
			}

			if (total > 9) {
				let limit = total - 8;
				for (let i = total - 1; i >= limit; i -= 1) {
					nfts.push(_.toInteger(i))
					// nfts.push(axios.get(`https://wallstreetbets-nft.com/api/creature/${i}`));
				}
			}

			// console.log('total', total)
			// let result = await Promise.all(nfts);
			dispatch(
				fetchDataSuccess({
					name,
					allTokens: nfts,
					total: total,
					price,
				})
			);
		} catch (err) {
			console.log(err);
			dispatch(fetchDataFailed('Could not load data from contract.'));
		}
	};
};
