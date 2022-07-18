import { Link } from 'gatsby';
import React from 'react';
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
			case 'contact':
				return (
					<a href={setMenuItemLink()} target='_blank'>
						{label}
					</a>
				);
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
