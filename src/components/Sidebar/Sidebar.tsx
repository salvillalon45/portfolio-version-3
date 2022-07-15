import React from 'react';
import {
	sideBarMenuItemsIntro,
	sideBarMenuItemsStayInTouch
} from '../../lib/Constants';
import {
	Logo,
	SidebarLogoStyled,
	SidebarStyled
} from '../Reusable/StyledComponents';
import SidebarMenu from './SidebarMenu';

function Sidebar() {
	return (
		<SidebarStyled>
			<SidebarLogoStyled>
				<Logo>
					Salvador <br /> Villalon Jr
				</Logo>
				<p>💻</p>
			</SidebarLogoStyled>

			<SidebarMenu menuItems={sideBarMenuItemsIntro} />

			<p>Stay In Touch</p>

			<SidebarMenu menuItems={sideBarMenuItemsStayInTouch} />
		</SidebarStyled>
	);
}

export default Sidebar;
