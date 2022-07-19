import { globalCss, styled } from '@stitches/react';
import { styled as styledConfig } from '../../../stitches.config.js';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import * as TogglePrimitive from '@radix-ui/react-toggle';

export const GridWrapper = styled('div', {
	display: 'grid',
	padding: '0.5rem',
	gridTemplateAreas: `'sidebar main main'`,
	height: '100vh',
	backgroundColor: '$gray2',
	fontFamily: '$openSans',
	color: '$gray3'
});

export const MobileGridWrapper = styled('div', {
	display: 'grid',
	padding: '0.5rem',
	gridTemplateAreas: `'main'
	'sidebar'`,
	height: '100vh',
	backgroundColor: '$gray2',
	fontFamily: '$openSans',
	color: '$gray3'
});

export const LayoutSection = styled('section', {
	display: 'grid',
	gap: '1.2rem',
	margin: 'auto',
	maxWidth: '50rem',
	paddingTop: '4rem'
});

export const SidebarStyled = styledConfig('div', {
	gridArea: 'sidebar',
	display: 'flex',
	flexDirection: 'column',
	gap: '1rem',
	paddingTop: '1rem',
	paddingLeft: '1rem',
	paddingRight: '2rem'
});

export const HorizontalSidebarStyled = styled('div', {
	gridArea: 'sidebar',
	paddingTop: '1rem'
});

export const HorizontalSidebarMenuStyled = styled('div', {
	display: 'flex',
	justifyContent: 'space-around'
});

export const MainStyled = styled('main', {
	gridArea: 'main',
	borderRadius: '10px',
	padding: '2rem',
	overflow: 'auto',
	backgroundColor: '$gray1'
});

export const PageHeaderContainerStyled = styled('div', {
	display: 'grid',
	gap: '2.5rem'
});

export const SeparatorStyled = styled(SeparatorPrimitive.Root, {
	'&[data-orientation=horizontal]': { height: 1, width: '100%' },
	backgroundColor: '$gray4'
});

export const HomePageImage = styled('img', {
	height: 'auto',
	width: '32%',
	borderRadius: '1rem'
});

export const ProjectImage = styled('img', {
	height: 'auto',
	width: '80%'
});

export const ProjectItemStyled = styled('div', {
	display: 'grid',
	gridTemplateColumns: `repeat(auto-fit, minmax(200px, 1fr))`,
	gap: '2rem'
});

export const ProjectsContainerStyled = styled('div', {
	display: 'grid',
	gap: '2rem'
});

export const ExperienceContainerStyled = styled('div', {
	display: 'grid',
	gap: '2rem'
});

export const ExperienceItemStyled = styled('div', {
	display: 'flex',
	flexWrap: 'wrap',
	gap: '2rem'
});

export const AboutDataStyled = styled('div', {
	display: 'grid',
	gap: '0.5rem'
});

export const TextBold700Styled = styled('p', {
	fontWeight: '$bold700'
});

export const TitleStyled = styledConfig('h2', {
	fontFamily: '$openSans',
	fontWeight: '$bold700',
	fontSize: '$title'
});

export const SubtitleStyled = styledConfig('h3', {
	fontFamily: '$openSans',
	fontWeight: '$medium500',
	fontSize: '$subtitle',
	color: '$gray4'
});

export const SidebarMenuItemStyled = styled('li', {
	display: 'flex',
	alignItems: 'center',
	gap: '0.5rem',
	position: 'static',
	paddingLeft: '0.4rem',
	height: '2.25rem',
	boxSizing: 'border-box',
	borderRadius: '6px',
	marginTop: '2px',
	border: '0.5px solid transparent',
	transition: 'all .1s ease',

	'&:hover': {
		borderRadius: '6px',
		backgroundColor: 'hsla(0,0%,100%,.5)'
	},

	'& a': {
		textDecoration: 'none',
		color: '$gray3'
	},

	'& .horizontalIcon': {
		width: 23,
		height: 23
	}
});

export const SidebarMenuStyled = styled('ul', {
	display: 'grid',
	gap: '0.5rem'
});

export const SidebarLogoStyled = styled('div', {
	display: 'flex',
	gap: '0.5rem'
});

export const Logo = styledConfig('p', {
	fontFamily: '$openSans',
	fontWeight: '$bold700',
	fontSize: '1.5rem'
});

export const StyledAvatar = styled(AvatarPrimitive.Root, {
	display: 'inline-flex',
	alignItems: 'center',
	justifyContent: 'center',
	verticalAlign: 'middle',
	overflow: 'hidden',
	userSelect: 'none',
	width: 45,
	height: 45,
	borderRadius: '100%'
});

export const StyledImage = styled(AvatarPrimitive.Image, {
	width: '100%',
	height: '100%',
	objectFit: 'cover',
	borderRadius: 'inherit'
});

export const BodyTextStyled = styled('p', {
	lineHeight: '1.68'
});

export const DarkThemeToggleStyled = styled(TogglePrimitive.Root, {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	height: 35,
	width: 35,
	color: '$gray3',
	backgroundColor: 'transparent',
	borderRadius: 4,
	placeSelf: 'center'
});

export const IconButton = styled('button', {
	display: 'inline-flex',
	alignItems: 'center',
	justifyContent: 'center',
	position: 'relative',
	boxSizing: 'border-box',
	outline: 0,
	border: 0,
	margin: 0,
	cursor: 'pointer',
	userSelect: 'none',
	verticalAlign: 'middle',
	textDecoration: 'none',
	textAlign: 'center',
	flex: '0 0 auto',
	fontSize: '1.5rem',
	padding: '8px',
	borderRadius: '50%',
	overflow: 'visible',
	color: '$grey3',
	backgroundColor: 'transparent',
	transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
});

const globalStyles = globalCss({
	'*': { margin: 0, padding: 0 }
});
