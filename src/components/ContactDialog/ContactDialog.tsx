import { ChatBubbleIcon, Cross2Icon } from '@radix-ui/react-icons';
import React from 'react';
import { TextBold700Styled } from '../Reusable/StyledComponents';
import {
	Dialog,
	DialogClose,
	DialogContactActions,
	DialogContactDescription,
	DialogContactRow,
	DialogContent,
	DialogDescription,
	DialogTitle,
	DialogTrigger,
	IconButton
} from './ContactDialogStyledComponents';
import { IconButton as NavBarIconButton } from '../Reusable/StyledComponents';
import ClipboardCopyButton from '../ClipboardCopyButton';
import useDarkMode from 'use-dark-mode';
import { darkTheme } from '../../../stitches.config.js';
import { setMenuItemIcon } from '../Sidebar/utils/SidebarUtils';

type ContactDialogProps = {
	label: string;
	isHorizontal: boolean;
};

export default function ContactDialog({
	label,
	isHorizontal
}: ContactDialogProps) {
	const darkMode = useDarkMode(false);
	return (
		<Dialog>
			<DialogTrigger asChild>
				{isHorizontal ? (
					<NavBarIconButton>
						<ChatBubbleIcon />
					</NavBarIconButton>
				) : (
					<a href='#'>
						{setMenuItemIcon('contact', true)}
						{label}
					</a>
				)}
			</DialogTrigger>
			<DialogContent className={darkMode.value ? darkTheme : ''}>
				<DialogTitle>Contact</DialogTitle>
				<DialogDescription>Let's Stay In Touch!</DialogDescription>
				<DialogContactRow>
					<DialogContactDescription>
						<TextBold700Styled>Email</TextBold700Styled>
						<p>salvadorvillalon54[@]gmail.com</p>
					</DialogContactDescription>

					<DialogContactActions>
						<ClipboardCopyButton copyText='salvadorvillalon54@gmail.com' />
					</DialogContactActions>
				</DialogContactRow>
				<DialogClose asChild>
					<IconButton aria-label='Close'>
						<Cross2Icon />
					</IconButton>
				</DialogClose>
			</DialogContent>
		</Dialog>
	);
}
