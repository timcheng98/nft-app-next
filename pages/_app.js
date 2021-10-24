import "antd-mobile/es/global";
import "antd/dist/antd.css";
import "react-multi-carousel/lib/styles.css";
import "../styles/globals.css";
import store from "../redux/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
