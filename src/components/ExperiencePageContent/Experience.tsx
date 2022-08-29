import { useStaticQuery } from 'gatsby';
import React from 'react';
import { sampleExperiencesData } from '../../lib/Constants';
import { useExperienceData } from '../../lib/queries';
import { ExperienceItemDataType } from '../../lib/Types';
import {
	ExperienceContainerStyled,
	SeparatorStyled
} from '../Reusable/StyledComponents';
import ExperienceItem from './ExperienceItem';

function Experiences() {
	const experienceFetchData = useExperienceData();
	const experienceDataArray = experienceFetchData.allNotion.nodes;
	console.log({ experienceFetchData });
	console.log({ experienceDataArray });

	function renderExperienceItems() {
		const experienceItemContentArray = experienceDataArray.map(
			(experienceData) => {
				const { title, raw } = experienceData;
				const { children, properties } = raw;
				const job_title = title;
				let description = '';
				const {
					about_image,
					content_type,
					entity,
					link_to_code,
					link_to_site,
					start_date
				} = properties;

				const image_url = about_image.files[0].file.url;
				const link_to_company = link_to_site.url;
				const date = start_date.date;

				children.forEach((pageChild: { paragraph: { text: any } }) => {
					const { paragraph } = pageChild;
					const { text } = paragraph;

					text.forEach(
						(textData: { href: any; plain_text: string }) => {
							const { href, plain_text } = textData;
							description = description.concat(plain_text);
							// if (href) {
							// 	a.push([plain_text, <a href={href}>{plain_text}</a>]);
							// } else {
							// }
						}
					);
				});

				return {
					job_title,
					description,
					image_url,
					link_to_company,
					date,
					entity
				};
			}
		);

		const sortedExperienceItemData = experienceItemContentArray.sort(
			(a: ExperienceItemDataType, b: ExperienceItemDataType) => {
				const endDate1 = new Date(a.date.end ?? new Date());
				const endDate2 = new Date(b.date.end ?? new Date());
				return endDate2 - endDate1;
			}
		);

		return sortedExperienceItemData.map(
			(experienceItemData: ExperienceItemDataType) => {
				return (
					<>
						<ExperienceItem {...experienceItemData} />
						<SeparatorStyled />
					</>
				);
			}
		);
	}

	return (
		<ExperienceContainerStyled>
			{renderExperienceItems()}
		</ExperienceContainerStyled>
	);
}

export default Experiences;
