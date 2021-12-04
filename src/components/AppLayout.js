import AppTabBar from './AppTabBar';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import { Row, Col, Affix } from 'antd';
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { connect, init } from '../redux/blockchain/blockchainActions';
import { fetchData } from '../redux/data/dataActions';
import WalletModal from './WalletModal';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const AppLayout = ({ children, fullWidth = false, color = '#fff', footer = true }) => {
// 	useEffect(() => {
// 		let tl = gsap.timeline();

// 		tl.addLabel("start")
// 		tl.to('.section', { opacity: 0 })
// 		// tl.to('.status-bar', { opacity: 0 })
// 		tl.from('.section', { opacity: 0, y: -200, duration: 1, delay: 3 })
// 		// tl.from('.status-bar', { opacity: 0, y: 200, duration: 1 }, 1)
// 		// tl.to('.status-bar', { opacity: 1 })
// }, []);

	const dispatch = useDispatch()
	const state = useSelector(state=> state)
	useEffect(() => {
		dispatch(init())
	}, [dispatch])

	useEffect(() => {
		if (!localStorage.getItem('account')) return;
		dispatch(connect(false))
	}, [dispatch])

	useEffect(() => {
    if (!state.blockchain.smartContract) return;
    dispatch(fetchData());
  }, [state.blockchain.smartContract, dispatch]);
	

	return (
		<div style={{ backgroundColor: color }}>
			{/* <Affix style={{ backgroundColor: '#fff', zIndex: 9999 }}> */}
			<div className="section">
			<AppHeader />
			</div>
			{/* </Affix> */}

			<Row justify='center'>
				<Col span={fullWidth ? 24 : 22}>
					<div style={{ minHeight: '100vh' }}>{children}</div>
				</Col>
			</Row>

			{footer && <AppFooter />}
			{/* <div className="status-bar"> */}
			<AppTabBar />
			{/* </div> */}
			<WalletModal />
		</div>
	);
};

export default AppLayout;
