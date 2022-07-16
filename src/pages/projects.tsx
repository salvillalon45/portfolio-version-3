import React from 'react';
import ProjectsPageContent from '../components/ProjectsPageContent';
import Layout from '../components/Layout';
import { LayoutSection } from '../components/Reusable/StyledComponents';

function ProjectsPage() {
	return (
		<Layout id={'projectsPageContainer'}>
			<LayoutSection>
				<ProjectsPageContent />
			</LayoutSection>
		</Layout>
	);
}

export default ProjectsPage;
