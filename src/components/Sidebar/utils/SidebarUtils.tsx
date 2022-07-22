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
import { Link, navigate } from 'gatsby';
import ContactDialog from '../../ContactDialog';

export function setMenuItemIcon(
	value: string,
	isHorizontal: boolean = false
): React.ReactNode {
	const horizontalIcon = isHorizontal ? 'horizontalIcon' : '';

	switch (value) {
		case 'home':
			return <HomeIcon className={horizontalIcon} />;
		case 'about':
			return <PersonIcon className={horizontalIcon} />;
		case 'projects':
			return <GearIcon className={horizontalIcon} />;
		case 'experience':
			return <FileTextIcon className={horizontalIcon} />;
		case 'linkedin':
			return <LinkedInLogoIcon className={horizontalIcon} />;
		case 'github':
			return <GitHubLogoIcon className={horizontalIcon} />;
		case 'contact':
			return <ChatBubbleIcon className={horizontalIcon} />;
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
		case 'home':
			return `/`;
		default:
			return `/${value}`;
	}
}

export function horizontalSidebarMenuCreateLinkTag(value: string) {
	switch (value) {
		case 'linkedin':
		case 'github':
		case 'contact':
			return navigate(setMenuItemLink(value));
		default:
			return navigate(setMenuItemLink(value));
	}
}

export function createLinkTag(
	value: string,
	label: string,
	isHorizontal: boolean,
	pageMatchFlag: boolean
) {
	console.log({ pageMatchFlag });
	switch (value) {
		case 'linkedin':
		case 'github':
			return (
				<a
					className={pageMatchFlag ? 'active-page' : ''}
					href={setMenuItemLink(value)}
					target='_blank'
				>
					{setMenuItemIcon(value, true)}
					{isHorizontal ? '' : label}
				</a>
			);
		case 'contact':
			return <ContactDialog label={label} isHorizontal={isHorizontal} />;

		default:
			return (
				<Link
					className={pageMatchFlag ? 'active-page' : ''}
					to={setMenuItemLink(value)}
				>
					{setMenuItemIcon(value, true)}
					{isHorizontal ? '' : label}
				</Link>
			);
	}
}

export function checkPageMatch(
	pageId: string | null | undefined,
	value: string
) {
	return !!pageId?.includes(value);
}
