import React from 'react';
import { sampleExperiencesData } from '../../lib/Constants';
import { ExperienceContainerStyled } from '../Reusable/StyledComponents';
import ExperienceItem from './ExperienceItem';

function Experiences() {
	function renderExperienceItems() {
		return sampleExperiencesData.map((experienceData) => {
			return <ExperienceItem {...experienceData} />;
		});
	}

	return (
		<ExperienceContainerStyled>
			{renderExperienceItems()}
		</ExperienceContainerStyled>
	);
}

export default Experiences;
