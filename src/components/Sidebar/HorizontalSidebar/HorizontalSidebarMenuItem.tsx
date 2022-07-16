import { navigate } from 'gatsby';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import BookIcon from '@mui/icons-material/Book';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ForumIcon from '@mui/icons-material/Forum';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';

type HorizontalSidebarMenuItemProps = {
	label: string;
	value: string;
};

function HorizontalSidebarMenuItem({
	value,
	label
}: HorizontalSidebarMenuItemProps) {
	function setMenuItemIcon(): React.ReactNode {
		switch (value) {
			case '':
				return <HomeIcon />;
			case 'about':
				return <PersonIcon />;
			case 'projects':
				return <SettingsIcon />;
			case 'experience':
				return <BookIcon />;
			case 'linkedin':
				return <LinkedInIcon />;
			case 'github':
				return <GitHubIcon />;
			case 'contact':
				return <ForumIcon />;
		}
	}

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

	function createLinkTag() {
		switch (value) {
			case 'linkedin':
			case 'github':
			case 'contact':
				return navigate(setMenuItemLink());
			default:
				return navigate(setMenuItemLink());
		}
	}

	function createButton() {
		return (
			<IconButton
				color='primary'
				aria-label={`navigate to ${label}`}
				onClick={() => createLinkTag()}
			>
				{setMenuItemIcon()}
			</IconButton>
		);
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