import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import React from 'react';
import useDarkMode from 'use-dark-mode';
import { DarkThemeToggleStyled } from './StyledComponents';

function DarkThemeToggle() {
	const darkMode = useDarkMode(false);

	return (
		<DarkThemeToggleStyled
			onPressedChange={() => {
				if (darkMode.value) {
					return darkMode.disable();
				}

				return darkMode.enable();
			}}
		>
			{darkMode.value ? <SunIcon /> : <MoonIcon />}
		</DarkThemeToggleStyled>
	);
}

export default DarkThemeToggle;
