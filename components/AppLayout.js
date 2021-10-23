import AppTabBar from './AppTabBar';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import { Row, Col } from 'antd'

const AppLayout = ({ children, fullWidth = false }) => {
	return (
		<div>
			<AppHeader />
			<Row justify="center">
				<Col span={fullWidth ? 24 : 22 }>
					<div style={{ minHeight: '100vh' }}>{children}</div>
				</Col>
			</Row>

			<AppFooter />
			<AppTabBar />
		</div>
	);
};

export default AppLayout;
