import AppTabBar from './AppTabBar';
import AppHeader from './AppHeader';

const AppLayout = ({ children }) => {
	return (
		<div>
			<AppHeader />
			<div style={{ minHeight: '100vh', paddingBottom: 100 }}>{children}</div>
			<AppTabBar />
		</div>
	);
};

export default AppLayout;
