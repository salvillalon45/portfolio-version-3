import { styled } from '@stitches/react';
import { styled as styledConfig } from '../../../stitches.config.js';
import * as SeparatorPrimitive from '@radix-ui/react-separator';

export const Wrapper = styled('div', {
	display: 'grid',
	gridTemplateAreas: `'sidebar main main'`,
	height: '100vh',
	padding: '0.5rem',
	backgroundColor: '$backgroundGray'
});

export const SidebarStyled = styled('div', {
	gridArea: 'sidebar',
	display: 'flex',
	flexDirection: 'column',
	gap: '1rem',
	paddingTop: '1rem',
	paddingLeft: '1rem',
	paddingRight: '2rem'
});

export const MainStyled = styled('main', {
	gridArea: 'main',
	borderRadius: '10px',
	padding: '2rem',
	marginLeft: '0.5rem',
	overflow: 'auto',
	backgroundColor: '$white'
});

export const PageHeaderContainerStyled = styled('div', {});

export const SeparatorStyled = styled(SeparatorPrimitive.Root, {
	'&[data-orientation=horizontal]': { height: 1, width: '100%' },
	backgroundColor: '$blue'
});

export const HomePageImage = styled('img', {
	height: 'auto',
	width: '50%'
});

export const ProjectImage = styled('img', {
	height: 'auto',
	width: '50%'
});

export const ProjectItemStyled = styled('div', {
	display: 'grid',
	gridTemplateColumns: `repeat(auto-fit, minmax(300px, 1fr))`,
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
	display: 'grid',
	gridTemplateColumns: `repeat(auto-fit, minmax(300px, 1fr))`,
	gap: '2rem'
});

export const TitleStyled = styledConfig('h2', {
	fontFamily: '$openSans',
	fontWeight: '$bold700',
	fontSize: '$title'
});

export const SubtitleStyled = styledConfig('h3', {
	fontFamily: '$openSans',
	fontWeight: '$medium500',
	fontSize: '$subtitle'
});

export const SidebarMenuItemStyled = styled('li', {
	display: 'flex',
	alignItems: 'center',
	gap: '0.5rem'
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
