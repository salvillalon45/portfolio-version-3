import React from 'react';
import { navigate } from 'gatsby';
import ButtonGroup from '@mui/material/ButtonGroup';
import { IconButton } from '../../Reusable/StyledComponents';
import { setMenuItemIcon, setMenuItemLink } from '../utils/SidebarUtils';
import ContactDialog from '../../ContactDialog';

type HorizontalSidebarMenuItemProps = {
	label: string;
	value: string;
};

function HorizontalSidebarMenuItem({
	value,
	label
}: HorizontalSidebarMenuItemProps) {
	function createLinkTag() {
		switch (value) {
			case 'linkedin':
			case 'github':
			case 'contact':
				return navigate(setMenuItemLink(value));
			default:
				return navigate(setMenuItemLink(value));
		}
	}

	function createButton() {
		if (value === 'contact') {
			return <ContactDialog label={label} isHorizontal={true} />;
		} else {
			return (
				<IconButton onClick={() => createLinkTag()}>
					{setMenuItemIcon(value)}
				</IconButton>
			);
		}
	}

	return (
		<ButtonGroup
			variant='contained'
			aria-label='outlined primary button group'
		>
			{createButton()}
		</ButtonGroup>
	);
}

export default HorizontalSidebarMenuItem;
