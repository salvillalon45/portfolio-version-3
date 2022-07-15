import React from 'react';
import { ExperienceItemStyled } from '../Reusable/StyledComponents';

type ExperienceItemProps = {
	job_title: string;
	description: string;
	date: Date;
	link_to_company: string;
};

function ExperienceItem({
	job_title,
	description,
	date,
	link_to_company
}: ExperienceItemProps) {
	return (
		<ExperienceItemStyled>
			<div>
				<p>{job_title}</p>
				<p>{description}</p>
				<p>{date.toISOString()}</p>
				<p>
					<a href={link_to_company}>Link to Site</a>
				</p>
			</div>
		</ExperienceItemStyled>
	);
}

export default ExperienceItem;
