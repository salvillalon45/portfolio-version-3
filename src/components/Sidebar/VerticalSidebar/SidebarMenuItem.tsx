import React from 'react';
import { Link } from 'gatsby';
import ContactDialog from '../../ContactDialog';
import { SidebarMenuItemStyled } from '../../Reusable/StyledComponents';
import { setMenuItemIcon } from '../utils/SidebarUtils';

type SidebarMenuItemProps = {
	label: string;
	value: string;
};

function SidebarMenuItem({ value, label }: SidebarMenuItemProps) {
	function setMenuItemLink(): string {
		switch (value) {
			case 'linkedin':
				return 'https://www.linkedin.com/in/salvadorvillalon/';
			case 'github':
				return 'https://github.com/salvillalon45';
			case 'contact':
				return '';
			default:
				return `/${value}`;
		}
	}

	function createLinkTag(): React.ReactNode {
		switch (value) {
			case 'linkedin':
			case 'github':
				return (
					<a href={setMenuItemLink()} target='_blank'>
						{label}
					</a>
				);
			case 'contact':
				return <ContactDialog label={label} />;

			default:
				return <Link to={setMenuItemLink()}>{label}</Link>;
		}
	}

	return (
		<SidebarMenuItemStyled>
			{setMenuItemIcon(value, true)}
			{createLinkTag()}
		</SidebarMenuItemStyled>
	);
}

export default SidebarMenuItem;
