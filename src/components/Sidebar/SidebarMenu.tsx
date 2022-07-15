import { Link } from 'gatsby';
import React from 'react';
import { SidebarMenuStyled } from '../Reusable/StyledComponents';
import SidebarMenuItem from './SidebarMenuItem';

type SidebarMenuProps = {
	menuItems: Array<{ value: string; label: string }>;
};

function SidebarMenu({ menuItems }: SidebarMenuProps) {
	function renderMenuItems() {
		return menuItems.map((item) => (
			<SidebarMenuItem label={item.label} value={item.value} />
		));
	}

	return (
		<nav>
			<SidebarMenuStyled>{renderMenuItems()}</SidebarMenuStyled>
		</nav>
	);
}

export default SidebarMenu;
