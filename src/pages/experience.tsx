import React from 'react';
import ExperiencePageContent from '../components/ExperiencePageContent';
import Layout from '../components/Layout';
import { LayoutSection } from '../components/Reusable/StyledComponents';

function ExperiencePage() {
	return (
		<Layout id={'experiencePageContainer'}>
			<LayoutSection>
				<ExperiencePageContent />
			</LayoutSection>
		</Layout>
	);
}

export default ExperiencePage;
