import 'antd-mobile/es/global';
import 'antd/dist/antd.css';
import 'react-multi-carousel/lib/styles.css';
import '../styles/globals.css';
import store from '../redux/store';
import { Provider } from 'react-redux';
import Script from "next/script";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Script
				strategy='lazyOnload'
				src={`https://www.googletagmanager.com/gtag/js?id=G-M1CBP04W8Y`}
			/>

			<Script strategy='lazyOnload'>
				{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-M1CBP04W8Y');
        `}
			</Script>
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</>
	);
}

export default MyApp;
