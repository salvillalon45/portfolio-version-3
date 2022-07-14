import React from 'react';
import ProjectsPageContent from '../components/ProjectsPageContent';
import Layout from '../components/Layout';

function ProjectsPage() {
	return (
		<Layout id={'projectsPageContainer'}>
			<section>
				<ProjectsPageContent />
			</section>
		</Layout>
	);
}

export default ProjectsPage;
