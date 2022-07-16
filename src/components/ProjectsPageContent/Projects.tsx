import React from 'react';
import { sampleProjectsData } from '../../lib/Constants';
import {
	ProjectsContainerStyled,
	SeparatorStyled
} from '../Reusable/StyledComponents';
import ProjectItem from './ProjectItem';

function Projects() {
	function renderProjectItems() {
		return sampleProjectsData.map((projectData) => (
			<>
				<ProjectItem {...projectData} />
				<SeparatorStyled />
			</>
		));
	}

	return (
		<ProjectsContainerStyled>
			{renderProjectItems()}
		</ProjectsContainerStyled>
	);
}

export default Projects;
