import React from 'react';
import {
	PersonIcon,
	HomeIcon,
	GearIcon,
	FileTextIcon,
	LinkedInLogoIcon,
	GitHubLogoIcon,
	ChatBubbleIcon
} from '@radix-ui/react-icons';

export function setMenuItemIcon(
	value: string,
	isHorizontal: boolean = false
): React.ReactNode {
	const addedClassName = isHorizontal ? 'horizontalIcon' : '';

	switch (value) {
		case '':
			return <HomeIcon className={addedClassName} />;
		case 'about':
			return <PersonIcon className={addedClassName} />;
		case 'projects':
			return <GearIcon className={addedClassName} />;
		case 'experience':
			return <FileTextIcon className={addedClassName} />;
		case 'linkedin':
			return <LinkedInLogoIcon className={addedClassName} />;
		case 'github':
			return <GitHubLogoIcon className={addedClassName} />;
		case 'contact':
			return <ChatBubbleIcon className={addedClassName} />;
	}
}

export function setMenuItemLink(value: string): string {
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
