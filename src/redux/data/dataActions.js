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
    payload: payload,
  };
};

const fetchAccountDataSuccess = (payload) => {
  return {
    type: "CHECK_ACCOUNT_DATA_SUCCESS",
    payload: payload,
  };
};

const fetchDataFailed = (payload) => {
  return {
    type: "CHECK_DATA_FAILED",
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
        .blockchain.smartContract.methods.aidrop_amount()
        .call();
      const total_airdrop = await store
        .getState()
        .blockchain.smartContract.methods.AIRDROP_AMOUNT()
        .call();

        const baseURI = await store
        .getState()
        .blockchain.smartContract.methods.baseURI().call()

      let nfts = [];
      if (total <= 9) {
        for (let i = total; i >= 0; i -= 1) {
          nfts.push(_.toInteger(i));
        }
      }

      if (total > 9) {
        let limit = total - 8;
        for (let i = total - 1; i >= limit; i -= 1) {
          nfts.push(_.toInteger(i));
        }
      }

      dispatch(
        fetchDataSuccess({
          name,
          allTokens: nfts,
          total: _.toInteger(total),
          price: _.toInteger(amountToSend),
          airdrop: _.toInteger(total_airdrop) - _.toInteger(airdrop),
          total_airdrop: _.toInteger(total_airdrop)
        })
      );
    } catch (err) {
      console.log(err);
      dispatch(fetchDataFailed("Could not load data from contract."));
    }
  };
};
