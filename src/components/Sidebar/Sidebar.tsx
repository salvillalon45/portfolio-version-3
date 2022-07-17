import React from 'react';
import useDarkMode from 'use-dark-mode';
import {
	sideBarMenuItemsIntro,
	sideBarMenuItemsStayInTouch
} from '../../lib/Constants';
import {
	DarkThemeToggleStyled,
	Logo,
	SidebarLogoStyled,
	SidebarStyled,
	TextBold700Styled
} from '../Reusable/StyledComponents';
import SidebarMenu from './SidebarMenu';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';

function Sidebar() {
	const darkMode = useDarkMode(false);

	return (
		<SidebarStyled
			className='sidebarStyled'
			color={{
				'@bp2': 'violet'
			}}
		>
			<SidebarLogoStyled>
				<Logo>
					Salvador <br /> Villalon Jr
				</Logo>
				<p>💻</p>
			</SidebarLogoStyled>

			<SidebarMenu menuItems={sideBarMenuItemsIntro} />

			<TextBold700Styled>Stay In Touch</TextBold700Styled>

			<SidebarMenu menuItems={sideBarMenuItemsStayInTouch} />

			<DarkThemeToggleStyled
				onPressedChange={() => {
					if (darkMode.value) {
						return darkMode.disable();
					}

					return darkMode.enable();
				}}
			>
				{darkMode.value ? <SunIcon /> : <MoonIcon />}
			</DarkThemeToggleStyled>
		</SidebarStyled>
	);
}

export default Sidebar;
