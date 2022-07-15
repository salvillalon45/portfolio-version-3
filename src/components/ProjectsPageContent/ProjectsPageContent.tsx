import React from 'react';
import { projectsPageHeaderItems } from '../../lib/Constants';
import PageHeader from '../Reusable/PageHeader';
import Projects from './Projects';

function ProjectsPageContent() {
	const { title, subtitle } = projectsPageHeaderItems;

	return (
		<>
			<PageHeader title={title} subtitle={subtitle} />

			<Projects />
		</>
	);
}

export default ProjectsPageContent;
