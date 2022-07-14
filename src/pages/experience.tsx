import React from 'react';
import ExperiencePageContent from '../components/ExperiencePageContent';
import Layout from '../components/Layout';

function ExperiencePage() {
	return (
		<Layout id={'experiencePageContainer'}>
			<section>
				<ExperiencePageContent />
			</section>
		</Layout>
	);
}

export default ExperiencePage;
