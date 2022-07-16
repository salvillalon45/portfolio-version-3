import React from 'react';
import { sampleExperiencesData } from '../../lib/Constants';
import {
	ExperienceContainerStyled,
	SeparatorStyled
} from '../Reusable/StyledComponents';
import ExperienceItem from './ExperienceItem';

function Experiences() {
	function renderExperienceItems() {
		return sampleExperiencesData.map((experienceData) => {
			return (
				<>
					<ExperienceItem {...experienceData} />
					<SeparatorStyled />
				</>
			);
		});
	}

	return (
		<ExperienceContainerStyled>
			{renderExperienceItems()}
		</ExperienceContainerStyled>
	);
}

export default Experiences;
