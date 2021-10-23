import { Badge, TabBar } from 'antd-mobile';
import React, { useState } from 'react';
import {
	AppstoreOutline,
	FireFill,
	GlobalOutline,
	GiftOutline,
} from 'antd-mobile-icons';
import defaultStyles from '../core/theme/styles';

const AppTabBar = () => {
	const tabs = [
		{
			key: 'home',
			title: <span style={defaultStyles.tabBarTitle}>Home</span>,
			icon: <AppstoreOutline />,
		},
		{
			key: 'mint',
			title: <span style={defaultStyles.tabBarTitle}>Mint</span>,
			icon: <FireFill />,
		},
		{
			key: 'airdrop',
			title: <span style={defaultStyles.tabBarTitle}>Airdrop</span>,
			icon: <GiftOutline />,
		},
		{
			key: 'market',
			title: <span style={defaultStyles.tabBarTitle}>Market</span>,
			icon: <GlobalOutline />,
		},
	];
	const [activeKey, setActiveKey] = useState('home');

	return (
		<div style={{ position: 'sticky', bottom: 0, background: '#fff' }}>
			<TabBar activeKey={activeKey} onChange={setActiveKey}>
				{tabs.map((item) => (
					<TabBar.Item key={item.key} icon={item.icon} title={item.title} />
				))}
			</TabBar>
		</div>
	);
};

export default AppTabBar;
