import React from 'react';
import {
	sideBarMenuItemsIntro,
	sideBarMenuItemsStayInTouch
} from '../../../lib/Constants';
import { HorizontalSidebarStyled } from '../../Reusable/StyledComponents';
import HorizontalSidebarMenu from './HorizontalSidebarMenu';

type HorizontalSidebarProps = {
	pageId: string;
};

function HorizontalSidebar({ pageId }: HorizontalSidebarProps) {
	return (
		<HorizontalSidebarStyled className='horizontalSidebarStyled'>
			<HorizontalSidebarMenu
				pageId={pageId}
				menuItems={sideBarMenuItemsIntro.concat(
					sideBarMenuItemsStayInTouch
				)}
			/>
		</HorizontalSidebarStyled>
	);
}

export default HorizontalSidebar;
