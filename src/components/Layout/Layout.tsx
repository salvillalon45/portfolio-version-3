import React, { ReactNode } from 'react';
import Sidebar from '../Sidebar';

// Styling
// import '../../styles/global.css';

type LayoutProps = {
	children: ReactNode;
	id: string;
};

function Layout({ children, id }: LayoutProps): React.ReactElement {
	return (
		<>
			<Sidebar />

			<main id={id}> {children} </main>
		</>
	);
}

export default Layout;
