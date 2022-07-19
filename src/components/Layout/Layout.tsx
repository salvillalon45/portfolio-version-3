import React, { ReactNode, useState } from 'react';
import Sidebar from '../Sidebar/VerticalSidebar';
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
import ContactDialog from '../ContactDialog';

type LayoutProps = {
	children: ReactNode;
	id: string;
};

function Layout({ children, id }: LayoutProps): React.ReactElement {
	const viewPort = useViewport().width < 426;
	const darkMode = useDarkMode(false);
	const [showDialog, setShowDialog] = useState(false);

	let content = (
		<>
			{viewPort ? (
				<HorizontalSidebar />
			) : (
				<Sidebar
					setShowDialog={setShowDialog}
					showDialog={showDialog}
				/>
			)}

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
