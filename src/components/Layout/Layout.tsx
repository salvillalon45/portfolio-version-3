import React, { ReactNode } from 'react';
import Sidebar from '../Sidebar';

import '../../stylesheets/reset.css';
import { MainStyled, Wrapper } from '../Reusable/StyledComponents';

type LayoutProps = {
	children: ReactNode;
	id: string;
};

function Layout({ children, id }: LayoutProps): React.ReactElement {
	return (
		<Wrapper>
			<Sidebar />

			<MainStyled id={id}> {children} </MainStyled>
		</Wrapper>
	);
}

export default Layout;
