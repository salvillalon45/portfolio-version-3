import * as React from 'react';
import HomePageContent from '../components/HomePageContent';
import Layout from '../components/Layout';
import { LayoutSection } from '../components/Reusable/StyledComponents';

function IndexPage() {
	return (
		<Layout id={'indexPageContainer'}>
			<LayoutSection>
				<HomePageContent />
			</LayoutSection>
		</Layout>
	);
}

export default IndexPage;
