import * as React from 'react';
import HomePageContent from '../components/HomePageContent';
import Layout from '../components/Layout';

function IndexPage() {
	return (
		<Layout id={'indexPageContainer'}>
			<section>
				<HomePageContent />
			</section>
		</Layout>
	);
}

export default IndexPage;
