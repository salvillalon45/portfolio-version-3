import { createStitches } from '@stitches/react';

export const {
	styled,
	css,
	globalCss,
	keyframes,
	getCssText,
	theme,
	createTheme,
	config
} = createStitches({
	theme: {
		fonts: {
			openSans: `'Open Sans', sans-serif`
		},
		fontSizes: {
			title: '2.5rem',
			subtitle: '1.2rem'
		},
		fontWeights: {
			bold700: '700',
			medium500: '500',
			regular400: '400'
		},
		colors: {
			gray: '#a0a0a0',
			blue: '#0a192f',
			white: '#fff',
			backgroundGray: '#d7d7d7'
		}
	}
});
