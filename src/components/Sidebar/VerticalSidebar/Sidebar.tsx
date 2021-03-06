import React from 'react';
import {
	sideBarMenuItemsIntro,
	sideBarMenuItemsStayInTouch
} from '../../../lib/Constants';
import {
	Logo,
	SidebarLogoStyled,
	SidebarStyled,
	TextBold700Styled
} from '../../Reusable/StyledComponents';
import SidebarMenu from './SidebarMenu';
import DarkThemeToggle from '../../Reusable/DarkThemeToggle';

type SidebarProps = {
	pageId: string;
};

function Sidebar({ pageId }: SidebarProps) {
	return (
		<SidebarStyled className='sidebarStyled'>
			<SidebarLogoStyled>
				<Logo>
					Salvador <br /> Villalon Jr
				</Logo>
				<p>💻</p>
			</SidebarLogoStyled>

			<SidebarMenu pageId={pageId} menuItems={sideBarMenuItemsIntro} />

			<TextBold700Styled>Stay In Touch</TextBold700Styled>

			<SidebarMenu menuItems={sideBarMenuItemsStayInTouch} />

			<DarkThemeToggle />
		</SidebarStyled>
	);
}

export default Sidebar;
