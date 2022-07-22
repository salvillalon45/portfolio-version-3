import { Link } from 'gatsby';
import React from 'react';
import { SidebarMenuStyled } from '../../Reusable/StyledComponents';
import SidebarMenuItem from './SidebarMenuItem';

type SidebarMenuProps = {
	menuItems: Array<{ value: string; label: string }>;
	pageId: string | null | undefined;
};

function SidebarMenu({ menuItems, pageId }: SidebarMenuProps) {
	function renderMenuItems() {
		return menuItems.map((item) => (
			<SidebarMenuItem
				pageId={pageId}
				label={item.label}
				value={item.value}
			/>
		));
	}

	return <SidebarMenuStyled>{renderMenuItems()}</SidebarMenuStyled>;
}

export default SidebarMenu;
