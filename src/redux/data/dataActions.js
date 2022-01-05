// log
import store from "../store";
import _ from "lodash";
import axios from "axios";
import Web3 from "web3";

const fetchDataRequest = () => {
  return {
    type: "CHECK_DATA_REQUEST",
  };
};

export const showAnimation = (data) => {
  return {
    payload: data,
    type: "SHOW_ANIMATION",
  };
};

export const fetchDataSuccess = (payload) => {
  return {
    type: "CHECK_DATA_SUCCESS",
    payload,
  };
};

const fetchAccountDataSuccess = (payload) => {
  return {
    type: "CHECK_ACCOUNT_DATA_SUCCESS",
    payload,
  };
};

const fetchDataFailed = (payload) => {
  return {
    type: "CHECK_DATA_FAILED",
    payload,
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

      // const baseURI = await store
      //   .getState()
      //   .blockchain.smartContract.methods._baseTokenURI.call()
      //   .call();

      // const nfts = [];
      // _.map(totalNfts, async (item) => {
      // 	// const resp = await axios.get(`${baseURI}/${item + 1}`);
      // 	nfts.push(item);
      // });

      dispatch(
        fetchAccountDataSuccess({
          accountTokens: _.map(totalNfts, (item) => (_.toInteger(item))),
        })
      );
    } catch (err) {
      console.log(err);
      dispatch(fetchDataFailed("Could not load data from contract."));
    }
  };
};

export const fetchData = (account) => {
  return async (dispatch) => {
    // dispatch(fetchDataRequest());
    try {
      let web3 = new Web3(window.ethereum);
      let name = await store
        .getState()
        .blockchain.smartContract.methods.name()
        .call();

      let whitelisted = false;
      if (account) {
        whitelisted = await store
        .getState()
        .blockchain.smartContract.methods.whitelisted(account)
        .call();
      }
 

      let all_whitelist = await store
        .getState()
        .blockchain.smartContract.methods.all_whitelist()
        .call();
      // console.log('whitelisted', whitelisted)
      // console.log('all_whitelist', all_whitelist)
      let price = await store
        .getState()
        .blockchain.smartContract.methods.cost()
        .call();
      const amountToSend = web3.utils.fromWei(
        _.toString(price),
      ); // Convert to wei value

      const total = await store
        .getState()
        .blockchain.smartContract.methods.totalSupply()
        .call();

      const airdrop = await store
        .getState()
        .blockchain.smartContract.methods.airdrop_claimed()
        .call();
      const total_airdrop = await store
        .getState()
        .blockchain.smartContract.methods.TOTAL_AIRDROP_AMOUNT()
        .call();

      const baseURI = await store
        .getState()
        .blockchain.smartContract.methods.baseURI().call()

      let nfts = [];
      if (total <= 10) {
        for (let i = total; i >= 1; i -= 1) {
          nfts.push(_.toInteger(i));
        }
      }

      if (total > 10) {
        let limit = total - 9;
        for (let i = total - 1; i >= limit; i -= 1) {
          nfts.push(_.toInteger(i));
        }
      }

      dispatch(
        fetchDataSuccess({
          name,
          allTokens: nfts,
          total: _.toInteger(total),
          price: _.toNumber(amountToSend),
          airdrop: _.toInteger(airdrop),
          total_airdrop: _.toInteger(total_airdrop),
          whitelisted,
          all_whitelist
        })
      );
    } catch (err) {
      console.log(err);
      dispatch(fetchDataFailed("Could not load data from contract."));
    }
  };
};
