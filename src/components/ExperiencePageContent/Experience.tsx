import { useStaticQuery } from 'gatsby';
import React from 'react';
import { sampleExperiencesData } from '../../lib/Constants';
import { useExperienceData } from '../../lib/queries';
import {
	ExperienceContainerStyled,
	SeparatorStyled
} from '../Reusable/StyledComponents';
import ExperienceItem from './ExperienceItem';

function Experiences() {
	const experienceFetchData = useExperienceData();
	const experienceDataArray = experienceFetchData.allNotion.nodes;

	console.log({ experienceDataArray });

	function renderExperienceItems() {
		return experienceDataArray.map((experienceData) => {
			const { title, raw } = experienceData;
			const job_title = title;
			let description = '';

			raw.children.forEach((pageChild) => {
				const { paragraph } = pageChild;
				console.log({ paragraph });
				const { text } = paragraph;

				text.forEach((textData) => {
					const { href, plain_text } = textData;
					console.log({ href, plain_text });
					if (href) {
					} else {
					}
				});
			});

			// cons description
			// date,
			// link_to_company
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
