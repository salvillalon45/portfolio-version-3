import { CopyIcon } from '@radix-ui/react-icons';
import React, { useState } from 'react';
import { ClipboardCopyButtonStyled } from './ClipboardCopyButtonStyles';
import { darkTheme } from '../../../stitches.config.js';
import useDarkMode from 'use-dark-mode';

type ClipboardCopyButtonProps = {
	copyText: string;
};

// Resource to learn about clipboard api and creating the component
// https://blog.logrocket.com/implementing-copy-clipboard-react-clipboard-api/
export default function ClipboardCopyButton({
	copyText
}: ClipboardCopyButtonProps) {
	const darkMode = useDarkMode(false);
	const [isCopied, setIsCopied] = useState(false);

	// This is the function we wrote earlier
	async function copyTextToClipboard(text: string) {
		if ('clipboard' in navigator) {
			return await navigator.clipboard.writeText(text);
		} else {
			return document.execCommand('copy', true, text);
		}
	}

	// onClick handler function for the copy button
	const handleCopyClick = () => {
		// Asynchronously call copyTextToClipboard
		copyTextToClipboard(copyText)
			.then(() => {
				// If successful, update the isCopied state value
				setIsCopied(true);
				setTimeout(() => {
					setIsCopied(false);
				}, 1500);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className={darkMode.value ? darkTheme : ''}>
			{/* Bind our handler function to the onClick button property */}
			<ClipboardCopyButtonStyled onClick={handleCopyClick}>
				<CopyIcon />
				<span>{isCopied ? 'Copied!' : 'Copy'}</span>
			</ClipboardCopyButtonStyled>
		</div>
	);
}
