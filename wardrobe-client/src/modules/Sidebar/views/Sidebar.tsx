import {
	CompassOutlined,
	HeartOutlined,
	HomeOutlined,
	InstagramOutlined,
	LogoutOutlined,
	MenuOutlined,
	MoonOutlined,
	PlusCircleOutlined,
	SearchOutlined,
	SettingOutlined,
	SunOutlined,
	UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { decrement, increment } from '../../../reducer';
import { NOT_TO_BE_SELECTED_KEYS } from '../constants';

const Sidebar = () => {
	const [selectedKeys, setSelectedKeys] = React.useState<string[]>([]);

	const dispatch = useDispatch();

	const navigate = useNavigate();

	const themeMode = 'light';

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
				navigate('/');
				console.log('home');
				break;
			case 'search':
				navigate('/search');
				console.log('search');
				break;
			case 'explore':
				navigate('/explore');
				console.log('explore');
				break;
			case 'notifications':
				navigate('/profile');
				console.log('notifications');
				break;
			case 'addPost':
				console.log('addPost');
				dispatch(decrement());
				break;
			case 'profile':
				console.log('profile');
				dispatch(increment());
				break;
			case 'theme':
				console.log('Theme');
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
		if (NOT_TO_BE_SELECTED_KEYS.includes(e.key)) return;
		setSelectedKeys([e.key]);
	};

	return (
		<>
			<StyledLogo />
			<StyledMenu
				selectedKeys={selectedKeys}
				theme={themeMode}
				mode="inline"
				defaultSelectedKeys={['home']}
				items={sideBarItems}
				onClick={handleMenuItemSelect}
			/>
		</>
	);
};

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

export default Sidebar;
