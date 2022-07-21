import React from 'react';
import { styled, keyframes } from '@stitches/react';
import { blackA } from '@radix-ui/colors';
import * as DialogPrimitive from '@radix-ui/react-dialog';

const overlayShow = keyframes({
	'0%': { opacity: 0 },
	'100%': { opacity: 1 }
});

const contentShow = keyframes({
	'0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
	'100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' }
});

const StyledOverlay = styled(DialogPrimitive.Overlay, {
	backgroundColor: blackA.blackA9,
	position: 'fixed',
	inset: 0,
	'@media (prefers-reduced-motion: no-preference)': {
		animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`
	}
});

const StyledContent = styled(DialogPrimitive.Content, {
	fontFamily: '$openSans',
	backgroundColor: '$gray2',
	color: '$gray3',
	borderRadius: 6,
	boxShadow:
		'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
	position: 'fixed',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '90vw',
	maxWidth: '450px',
	maxHeight: '85vh',
	padding: 25,
	'@media (prefers-reduced-motion: no-preference)': {
		animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`
	},
	'&:focus': { outline: 'none' }
});

function Content({ children, ...props }) {
	return (
		<DialogPrimitive.Portal>
			<StyledOverlay />
			<StyledContent {...props}>{children}</StyledContent>
		</DialogPrimitive.Portal>
	);
}

const StyledTitle = styled(DialogPrimitive.Title, {
	margin: 0,
	color: '$gray3',
	fontFamily: '$openSans',
	fontWeight: '$bold700',
	fontSize: '$subtitle'
});

const StyledDescription = styled(DialogPrimitive.Description, {
	margin: '10px 0 20px',
	color: '$gray3',
	fontSize: 15,
	lineHeight: 1.5
});

// Exports
export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogContent = Content;
export const DialogTitle = StyledTitle;
export const DialogDescription = StyledDescription;
export const DialogClose = DialogPrimitive.Close;

export const IconButton = styled('button', {
	all: 'unset',
	fontFamily: 'inherit',
	borderRadius: '100%',
	height: 25,
	width: 25,
	display: 'inline-flex',
	alignItems: 'center',
	justifyContent: 'center',
	color: '$gray3',
	position: 'absolute',
	top: 10,
	right: 10,

	'&:hover': { backgroundColor: '$gray1' },
	'&:focus': { boxShadow: `0 0 0 2px $gray1` }
});

export const DialogContactRow = styled('div', {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	flexWrap: 'wrap',
	gap: '1rem'
});

export const DialogContactDescription = styled('div', {
	display: 'flex',
	gap: '0.5rem',
	flexDirection: 'column'
});

export const DialogContactActions = styled('div', {
	display: 'flex'
});
