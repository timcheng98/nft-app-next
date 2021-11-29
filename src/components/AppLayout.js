import AppTabBar from './AppTabBar';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import { Row, Col, Affix } from 'antd';
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { connect, init } from '../redux/blockchain/blockchainActions';
import { fetchData } from '../redux/data/dataActions';
import WalletModal from './WalletModal';

const AppLayout = ({ children, fullWidth = false, color = '#fff' }) => {
	const dispatch = useDispatch()
	const state = useSelector(state=> state)
	useEffect(() => {
		dispatch(init())
	}, [dispatch])

	useEffect(() => {
		if (!localStorage.getItem('account')) return;
		dispatch(connect({
			showError: false
		}))
	}, [dispatch])

	useEffect(() => {
    if (!state.blockchain.smartContract) return;
    dispatch(fetchData());
  }, [state.blockchain.smartContract, dispatch]);
	

	return (
		<div style={{ backgroundColor: color }}>
			<Affix style={{ backgroundColor: '#fff', zIndex: 9999 }}>
				<AppHeader />
			</Affix>

			<Row justify='center'>
				<Col span={fullWidth ? 24 : 22}>
					<div style={{ minHeight: '100vh' }}>{children}</div>
				</Col>
			</Row>

			<AppFooter />
			<AppTabBar />
			<WalletModal />
		</div>
	);
};

export default AppLayout;
