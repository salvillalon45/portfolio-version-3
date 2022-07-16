import { styled } from '@stitches/react';
import { styled as styledConfig } from '../../../stitches.config.js';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

export const GridWrapper = styled('div', {
	display: 'grid',
	padding: '0.5rem',
	gridTemplateAreas: `'sidebar main main'`,
	height: '100vh',
	backgroundColor: '$backgroundGray',
	fontFamily: '$openSans'
});

export const MobileGridWrapper = styled('div', {
	display: 'grid',
	padding: '0.5rem',
	gridTemplateAreas: `'main'
	'sidebar'`,
	height: '100vh',
	backgroundColor: '$backgroundGray',
	fontFamily: '$openSans'
});

export const SidebarStyled = styledConfig('div', {
	gridArea: 'sidebar',
	display: 'flex',
	flexDirection: 'column',
	gap: '1rem',
	paddingTop: '1rem',
	paddingLeft: '1rem',
	paddingRight: '2rem',
	// '@bp1': { backgroundColor: '#000000' },
	// '@bp2': { backgroundColor: '#000000' },
	variants: {
		color: {
			pink: { backgroundColor: '#000000' },
			turq: { backgroundColor: '#FF0000' },
			orange: { backgroundColor: '#00FF00' }
		}
	}
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
	// marginLeft: '0.5rem',
	overflow: 'auto',
	backgroundColor: '$white'
});

export const PageHeaderContainerStyled = styled('div', {
	display: 'grid',
	gap: '0.9rem'
});

export const SeparatorStyled = styled(SeparatorPrimitive.Root, {
	'&[data-orientation=horizontal]': { height: 1, width: '100%' },
	backgroundColor: '$blue'
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
	fontSize: '$subtitle'
});

export const SidebarMenuItemStyled = styled('li', {
	display: 'flex',
	alignItems: 'center',
	gap: '0.5rem',
	'& a': {
		textDecoration: 'none'
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

export const LayoutSection = styled('section', {
	display: 'grid',
	gap: '1.2rem'
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
