import Web3 from "web3";
import SmartContract from "./abi.json";
import _ from "lodash";
import { fetchData } from "../data/dataActions";

const ID = {
  TEST_NET: 80001,
  MAIN_NET: 137
}
const NETWORK_ID = process.env.NEXT_PUBLIC_NETWORK_ID
const CONTRACT_ADDRESS = process.env.NETX_PUBLIC_CONTRACT_ADDRESS;

const connectRequest = () => {
  return {
    type: "CONNECTION_REQUEST",
  };
};

export const setModalVisible = (data) => {
  return {
    type: "SET_MODAL_VISIBLE",
    payload: data
  };
};

const disconnectRequest = (payload) => {
  return {
    type: "DISCONNECTION_REQUEST",
		payload
  };
};

const connectSuccess = (payload) => {
  return {
    type: "CONNECTION_SUCCESS",
    payload: payload,
  };
};

export const clearErrorMsg = (payload) => {
  return {
    type: "CLEAR_ERROR_MSG",
    payload: payload,
  };
};

const connectInit = (payload) => {
  return {
    type: "CONNECTION_INIT",
    payload: payload,
  };
};

const connectFailed = (payload) => {
  return {
    type: "CONNECTION_FAILED",
    payload: payload,
  };
};

const updateAccountRequest = (payload) => {
  return {
    type: "UPDATE_ACCOUNT",
    payload: payload,
  };
};

export const disconnect = () => {
  return async (dispatch) => {
    dispatch(updateAccountRequest({account: null, balance: 0}))
    localStorage.setItem('account', null)
  };
};

export const connect = ({
  showError = true
}) => {
  return async (dispatch) => {
    dispatch(connectRequest());
    if (window.ethereum && window.ethereum.isMetaMask) {
      let web3 = new Web3(window.ethereum);

      try {
        let currentAccount = localStorage.getItem('account') || null;

        window.ethereum
          .request({ method: "eth_requestAccounts" })
          .then(async (accounts) => {
            if (accounts.length === 0) {
              dispatch(connectFailed("Please connect to MetaMask."));
            } else if (accounts[0] !== currentAccount) {
              currentAccount = accounts[0];
              localStorage.setItem('account', currentAccount)
              const SmartContractObj = new web3.eth.Contract(
                SmartContract.abi,
                '0x5355b496F09bE260779a4E7CA6BC631D30bbAd96'
              );
              const balance = await web3.eth.getBalance(
                currentAccount
              );
              dispatch(
                connectSuccess({
                  account: currentAccount,
                  smartContract: SmartContractObj,
                  web3: web3,
                  balance: _.round(web3.utils.fromWei(balance), 3),
                })
              );
            }
          })
          
          .catch((err) => {
            if (err.code === 4001) {
              // EIP-1193 userRejectedRequest error
              // If this happens, the user rejected the connection request.

              dispatch(connectFailed("Please connect to MetaMask."));
              localStorage.setItem('account', null)
            } else {
              console.error(err);
            }
          });

        const networkId = await window.ethereum.request({
          method: "net_version",
        });

        const NetworkData = await SmartContract.networks[networkId];
        if (networkId == 80001) {
          const SmartContractObj = new web3.eth.Contract(
            SmartContract.abi,
            '0x5355b496F09bE260779a4E7CA6BC631D30bbAd96'
          );

          // console.log(currentAccount);
          // console.log(SmartContractObj);
          // console.log(web3);

          const balance = await web3.eth.getBalance(
            currentAccount
          );

          let aidrop_claimed = await SmartContractObj.methods.airdroppedList(currentAccount)
          .call();
          dispatch(
            connectSuccess({
              aidrop_claimed,
              account: currentAccount,
              smartContract: SmartContractObj,
              web3: web3,
              balance: _.round(web3.utils.fromWei(balance), 3),
            })
          );

          // Add listeners start
          window.ethereum.on("accountsChanged", (accounts) => {
            if (accounts.length === 0) {
              localStorage.setItem('account', null)
              dispatch(connectFailed("Please connect to MetaMask."));
            } else if (accounts[0] !== currentAccount) {
              currentAccount = accounts[0];
            }
            dispatch(updateAccount(currentAccount));
          });
          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });
          // Add listeners end
        } else {
          // dispatch(connectFailed('Change network to Polygon.'));
          await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            // params: [{ chainId: "0x89" }], // chainId must be in hexadecimal numbers - 137
            params: [{ chainId: "13881" }], // chainId must be in hexadecimal numbers - 80001
          });
        }
      } catch (err) {
        localStorage.setItem('account', null)
        if (showError) {
          dispatch(connectFailed("Something went wrong."));
        }
      }
    } else {
      localStorage.setItem('account', null)
      if (showError) {
        dispatch(connectFailed("Install Metamask."));
      }
    }
  };
};

export const init = () => {
  return async (dispatch) => {
    if (window.ethereum) {
      let web3 = new Web3(window.ethereum);

      try {
        const SmartContractObj = new web3.eth.Contract(
          SmartContract.abi,
          '0x5355b496F09bE260779a4E7CA6BC631D30bbAd96'
        );
        dispatch(
          connectInit({
            smartContract: SmartContractObj,
            web3: web3,
          })
        );
      } catch (err) {
        // dispatch(connectFailed("Something went wrong."));
      }
    } else {
      // dispatch(connectFailed("Install Metamask."));
    }
  };
};

export const updateAccount = (account) => {
  return async (dispatch) => {
    dispatch(updateAccountRequest({ account: account }));
    dispatch(fetchData(account));
  };
};
