import React, { useState } from 'react';
import type { MenuProps, MenuTheme } from 'antd';
import { ConfigProvider, Layout, Menu, theme } from 'antd';
import styled from 'styled-components';
import {
	HomeOutlined,
	SearchOutlined,
	CompassOutlined,
	HeartOutlined,
	PlusCircleOutlined,
	UserOutlined,
	MenuOutlined,
	SunOutlined,
	MoonOutlined,
	LogoutOutlined,
	SettingOutlined,
	InstagramOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

const notToBeSelectedKeys = ['theme', 'settings', 'logout'];

const App: React.FC = () => {
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();

	const [themeMode, setThemeMode] = useState<MenuTheme>('light');
	const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

	const sideBarItems: MenuProps['items'] = [
		{
			key: 'home',
			icon: React.createElement(HomeOutlined),
			label: 'Home',
		},
		{
			key: 'search',
			icon: React.createElement(SearchOutlined),
			label: 'Search',
		},
		{
			key: 'explore',
			icon: React.createElement(CompassOutlined),
			label: 'Explore',
		},
		{
			key: 'notifications',
			icon: React.createElement(HeartOutlined),
			label: 'Notifications',
		},
		{
			key: 'addPost',
			icon: React.createElement(PlusCircleOutlined),
			label: 'Create',
		},
		{
			key: 'profile',
			icon: React.createElement(UserOutlined),
			label: 'Profile',
		},
		{
			key: 'userMenu',
			icon: React.createElement(MenuOutlined),
			label: 'Menu',
			children: [
				{
					key: 'theme',
					icon: themeMode === 'light' ? React.createElement(MoonOutlined) : React.createElement(SunOutlined),
					label: 'Switch appearance',
				},
				{
					key: 'settings',
					icon: React.createElement(SettingOutlined),
					label: 'Settings',
				},
				{
					key: 'logout',
					icon: React.createElement(LogoutOutlined),
					label: 'Logout',
				},
			],
		},
	];

	const handleMenuItemSelect: MenuProps['onClick'] = e => {
		switch (e.key) {
			case 'home':
				console.log('home');
				break;
			case 'search':
				console.log('search');
				break;
			case 'explore':
				console.log('explore');
				break;
			case 'notifications':
				console.log('notifications');
				break;
			case 'addPost':
				console.log('addPost');
				break;
			case 'profile':
				console.log('profile');
				break;
			case 'theme':
				setThemeMode(prev => (prev === 'light' ? 'dark' : 'light'));
				break;
			case 'settings':
				console.log('settings');
				break;
			case 'logout':
				console.log('logout');
				break;
			default:
				break;
		}
		// Adding selected keys
		if (notToBeSelectedKeys.includes(e.key)) return;
		setSelectedKeys([e.key]);
	};

	const just = (
		<Layout hasSider>
			<StyledSideBar collapsed collapsible={false} collapsedWidth={60} theme={themeMode}>
				<StyledLogo />
				<StyledMenu
					selectedKeys={selectedKeys}
					theme={themeMode}
					mode="inline"
					defaultSelectedKeys={['profile']}
					items={sideBarItems}
					onClick={handleMenuItemSelect}
				/>
			</StyledSideBar>
			<Layout style={{ marginLeft: 200 }}>
				{/* Hiding header as not needed for now */}
				<Header style={{ padding: 0, background: colorBgContainer }} hidden />
				<Content style={{ margin: '24px 16px 0', overflow: 'initial', height: '100vh' }}>
					<div>HELLO WORLD</div>
				</Content>
				<Footer style={{ textAlign: 'center' }} hidden>
					Wardrobe ©{new Date().getFullYear()} Created with ❤️ by Wardrobe Team
				</Footer>
			</Layout>
		</Layout>
	);

	return (
		<ConfigProvider
			theme={{
				// Algorithm
				algorithm: themeMode === 'light' ? theme.defaultAlgorithm : theme.darkAlgorithm,
				token: {
					// Seed Token
					colorPrimary: '#8a3ffc',
					colorInfo: '#8a3ffc',
				},
			}}
		>
			{just}
		</ConfigProvider>
	);
};

const StyledSideBar = styled(Sider)`
	overflow: hidden;
	// overflow-y: auto;
	// overflow-x: hidden;

	// hide scrollbar
	-ms-overflow-style: none;
	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none;
	}

	height: 100vh;
	position: fixed !important;
	top: 0;
	left: 0;
	bottom: 0;
`;

const StyledMenu = styled(Menu)`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const StyledLogo = styled(InstagramOutlined)`
	font-size: 24px;
	color: white;
	margin: 16px;
`;

export default App;
