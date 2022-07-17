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
			gray1: '#fff',
			gray2: '#eff5f4',
			gray3: '#101010',
			gray4: '#a0a0a0'
		},
		media: {
			bp1: '(max-width: 426px)',
			bp2: '(max-width: 769px)',
			bp3: '(min-width: 575px)',
			bp4: '(min-width: 750px)'
		}
	}
});

export const darkTheme = createTheme({
	colors: {
		gray1: '#101010',
		gray2: '#1f1c19',
		gray3: '#ededed',
		gray4: '#a0a0a0'
	},
	space: {},
	fonts: {}
});
