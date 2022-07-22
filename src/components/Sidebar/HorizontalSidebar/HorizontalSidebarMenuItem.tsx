import React from 'react';
import { ButtonGroupStyled } from '../../Reusable/StyledComponents';
import { checkPageMatch, createLinkTag } from '../utils/SidebarUtils';

type HorizontalSidebarMenuItemProps = {
	label: string;
	value: string;
	pageId: string;
};

function HorizontalSidebarMenuItem({
	value,
	label,
	pageId
}: HorizontalSidebarMenuItemProps) {
	return (
		<ButtonGroupStyled
			className={checkPageMatch(pageId, value) ? 'active-page' : ''}
		>
			{createLinkTag(value, label, true, false)}
		</ButtonGroupStyled>
	);
}

export default HorizontalSidebarMenuItem;
