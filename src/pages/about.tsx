import React from 'react';
import AboutPageContent from '../components/AboutPageContent';
import Layout from '../components/Layout';

function AboutPage() {
	return (
		<Layout id={'aboutPageContainer'}>
			<section>
				<AboutPageContent />
			</section>
		</Layout>
	);
}

export default AboutPage;
