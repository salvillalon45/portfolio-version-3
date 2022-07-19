import { CopyIcon, Cross2Icon, Pencil2Icon } from '@radix-ui/react-icons';
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
	Fieldset,
	IconButton,
	Input,
	Label
} from './ContactDialogStyledComponents';

type ContactDialogProps = {
	label: string;
};

export default function ContactDialog({ label }: ContactDialogProps) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<a href='#'>{label}</a>
			</DialogTrigger>
			<DialogContent>
				<DialogTitle>Contact</DialogTitle>
				<DialogDescription>Let's Stay In Touch!</DialogDescription>
				<DialogContactRow>
					<DialogContactDescription>
						<TextBold700Styled>Email</TextBold700Styled>
						<p>salvadorvillalon54[@]gmail.com</p>
					</DialogContactDescription>

					<DialogContactActions>
						<a
							href='mailto:salvadorvillalon54@gmail.com'
							target='_blank'
							rel='noopener noreferrer'
						>
							<Pencil2Icon />
							<span>Compose</span>
						</a>
						<button>
							<CopyIcon />
							<span id='copy-text'>Copy</span>
						</button>
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
