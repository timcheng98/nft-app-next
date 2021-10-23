import AppTabBar from './AppTabBar';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

const AppLayout = ({ children }) => {
	return (
		<div>
			<AppHeader />
			<div style={{ minHeight: '100vh' }}>{children}</div>
			<AppFooter />
			<AppTabBar />
		</div>
	);
};

export default AppLayout;
