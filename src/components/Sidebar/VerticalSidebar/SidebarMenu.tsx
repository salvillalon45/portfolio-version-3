import { Link } from 'gatsby';
import React from 'react';
import { SidebarMenuStyled } from '../../Reusable/StyledComponents';
import SidebarMenuItem from './SidebarMenuItem';

type SidebarMenuProps = {
	menuItems: Array<{ value: string; label: string }>;
	setShowDialog: (showDialog: boolean) => void;
	showDialog: boolean;
};

function SidebarMenu({
	menuItems,
	setShowDialog,
	showDialog
}: SidebarMenuProps) {
	function renderMenuItems() {
		return menuItems.map((item) => (
			<SidebarMenuItem
				label={item.label}
				value={item.value}
				setShowDialog={setShowDialog}
				showDialog={showDialog}
			/>
		));
	}

	return (
		<nav>
			<SidebarMenuStyled>{renderMenuItems()}</SidebarMenuStyled>
		</nav>
	);
}

export default SidebarMenu;
