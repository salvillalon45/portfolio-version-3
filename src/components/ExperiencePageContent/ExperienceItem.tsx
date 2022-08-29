import React from 'react';
import {
	ExperienceItemStyled,
	TextBold700Styled,
	StyledAvatar,
	StyledImage,
	AboutDataStyled,
	BodyTextStyled,
	ProjectImage
} from '../Reusable/StyledComponents';

type ExperienceItemProps = {
	job_title: string;
	description: string;
	date: { start: string; end: string | null };
	link_to_company: string;
	image_url: string;
	entity: { rich_text: string };
};

export const Avatar = StyledAvatar;
export const AvatarImage = StyledImage;

function ExperienceItem({
	job_title,
	description,
	date,
	link_to_company,
	image_url,
	entity
}: ExperienceItemProps) {
	console.log(date);
	const options = { month: 'long', year: 'numeric' };
	const startDate = new Date(date.start).toLocaleDateString('en-US', options);
	const endDate = date.end
		? new Date(date?.end).toLocaleDateString('en-US', options)
		: 'Present';

	return (
		<ExperienceItemStyled>
			{/* <div>
				<Avatar>
					<AvatarImage src={image_url} alt='Colm Tuite' />
				</Avatar>
			</div> */}

			<AboutDataStyled>
				<TextBold700Styled>{job_title}</TextBold700Styled>
				<BodyTextStyled>
					<b>Organization:</b>{' '}
					<a href={link_to_company}>{entity.rich_text}</a>
				</BodyTextStyled>
				<BodyTextStyled>
					<b>Start:</b> {startDate} - <b>End:</b> {endDate}
				</BodyTextStyled>
				<BodyTextStyled>{description}</BodyTextStyled>
			</AboutDataStyled>
		</ExperienceItemStyled>
	);
}

export default ExperienceItem;
