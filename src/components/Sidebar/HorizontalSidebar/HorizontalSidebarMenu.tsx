import React from 'react';
import DarkThemeToggle from '../../Reusable/DarkThemeToggle';
import { HorizontalSidebarMenuStyled } from '../../Reusable/StyledComponents';
import HorizontalSidebarMenuItem from './HorizontalSidebarMenuItem';

type HorizontalSidebarMenuProps = {
	menuItems: Array<{ value: string; label: string }>;
	pageId: string;
};

function HorizontalSidebarMenu({
	menuItems,
	pageId
}: HorizontalSidebarMenuProps) {
	function renderMenuItems() {
		return menuItems.map((item) => (
			<HorizontalSidebarMenuItem
				pageId={pageId}
				label={item.label}
				value={item.value}
			/>
		));
	}

	return (
		<HorizontalSidebarMenuStyled>
			{renderMenuItems()}

			<DarkThemeToggle />
		</HorizontalSidebarMenuStyled>
	);
}

export default HorizontalSidebarMenu;
