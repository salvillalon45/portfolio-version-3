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

type LayoutProps = {
	children: ReactNode;
	id: string;
};

function Layout({ children, id }: LayoutProps): React.ReactElement {
	console.log(useViewport());

	let content = (
		<>
			{/* {useViewport().width < 426 ? <HorizontalSidebar /> : <Sidebar />} */}
			<Sidebar />

			<MainStyled id={id}> {children} </MainStyled>
		</>
	);

	return useViewport().width < 426 ? (
		<MobileGridWrapper>{content}</MobileGridWrapper>
	) : (
		<GridWrapper>{content}</GridWrapper>
	);
}

export default Layout;
