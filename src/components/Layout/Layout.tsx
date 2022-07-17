import React, { ReactNode } from 'react';
import Sidebar from '../Sidebar';
import '../../stylesheets/reset.css';
import {
	GridWrapper,
	MainStyled,
	MobileGridWrapper
} from '../Reusable/StyledComponents';
import HorizontalSidebar from '../Sidebar/HorizontalSidebar';
import { useViewport } from '../../lib/Hooks';
import useDarkMode from 'use-dark-mode';
import { darkTheme } from '../../../stitches.config.js';

type LayoutProps = {
	children: ReactNode;
	id: string;
};

function Layout({ children, id }: LayoutProps): React.ReactElement {
	const viewPort = useViewport().width < 426;
	const darkMode = useDarkMode(false);

	let content = (
		<>
			{viewPort ? <HorizontalSidebar /> : <Sidebar />}

			<MainStyled id={id}> {children} </MainStyled>
		</>
	);

	return viewPort ? (
		<MobileGridWrapper className={darkMode.value ? darkTheme : ''}>
			{content}
		</MobileGridWrapper>
	) : (
		<>
			<GridWrapper className={darkMode.value ? darkTheme : ''}>
				{content}
			</GridWrapper>
		</>
	);
}

export default Layout;
