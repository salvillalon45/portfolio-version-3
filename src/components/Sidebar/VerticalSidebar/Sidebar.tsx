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
import ContactDialog from '../../ContactDialog';
import { CreateCssVarsProviderResult } from '@mui/system';

type SidebarProps = {
	setShowDialog: (showDialog: boolean) => void;
	showDialog: boolean;
};

function Sidebar({ setShowDialog, showDialog }: SidebarProps) {
	return (
		<SidebarStyled className='sidebarStyled'>
			<SidebarLogoStyled>
				<Logo>
					Salvador <br /> Villalon Jr
				</Logo>
				<p>💻</p>
			</SidebarLogoStyled>

			<SidebarMenu
				menuItems={sideBarMenuItemsIntro}
				setShowDialog={setShowDialog}
				showDialog={showDialog}
			/>

			<TextBold700Styled>Stay In Touch</TextBold700Styled>

			<SidebarMenu
				menuItems={sideBarMenuItemsStayInTouch}
				setShowDialog={setShowDialog}
				showDialog={showDialog}
			/>

			<DarkThemeToggle />
		</SidebarStyled>
	);
}

export default Sidebar;
