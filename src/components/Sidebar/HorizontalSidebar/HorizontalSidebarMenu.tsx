import React from 'react';
import { HorizontalSidebarMenuStyled } from '../../Reusable/StyledComponents';
import HorizontalSidebarMenuItem from './HorizontalSidebarMenuItem';

type HorizontalSidebarMenuProps = {
	menuItems: Array<{ value: string; label: string }>;
};

function HorizontalSidebarMenu({ menuItems }: HorizontalSidebarMenuProps) {
	function renderMenuItems() {
		return menuItems.map((item) => (
			<HorizontalSidebarMenuItem label={item.label} value={item.value} />
		));
	}

	return (
		<HorizontalSidebarMenuStyled>
			{renderMenuItems()}
		</HorizontalSidebarMenuStyled>
	);
}

export default HorizontalSidebarMenu;
