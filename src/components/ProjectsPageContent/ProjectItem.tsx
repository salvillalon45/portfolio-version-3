import React from 'react';
import {
	AboutDataStyled,
	ProjectImage,
	ProjectItemStyled,
	TextBold700Styled
} from '../Reusable/StyledComponents';
import Test from '../../images/test.jpg';

type ProjectItemProps = {
	name: string;
	description: string;
	link_to_code: string;
	link_to_site: string;
};

function ProjectItem(projectData: ProjectItemProps) {
	const { name, description, link_to_code, link_to_site } = projectData;

	return (
		<ProjectItemStyled>
			<AboutDataStyled>
				<TextBold700Styled>{name}</TextBold700Styled>
				<p>{description}</p>
				<p>
					<a href={link_to_code}>Link to Code</a>
				</p>
				<p>
					<a href={link_to_site}>Link to Site</a>
				</p>
			</AboutDataStyled>

			<ProjectImage src={Test} />
		</ProjectItemStyled>
	);
}

export default ProjectItem;
