import React from 'react';
import {
	sideBarMenuItemsIntro,
	sideBarMenuItemsStayInTouch
} from '../../../lib/Constants';
import { HorizontalSidebarStyled } from '../../Reusable/StyledComponents';
import HorizontalSidebarMenu from './HorizontalSidebarMenu';

function HorizontalSidebar() {
	return (
		<HorizontalSidebarStyled className='horizontalSidebarStyled'>
			<HorizontalSidebarMenu
				menuItems={sideBarMenuItemsIntro.concat(
					sideBarMenuItemsStayInTouch
				)}
			/>
		</HorizontalSidebarStyled>
	);
}

export default HorizontalSidebar;
