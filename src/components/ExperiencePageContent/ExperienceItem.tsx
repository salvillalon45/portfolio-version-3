import React from 'react';
import {
	ExperienceItemStyled,
	TextBold700Styled,
	StyledAvatar,
	StyledImage,
	AboutDataStyled
} from '../Reusable/StyledComponents';

type ExperienceItemProps = {
	job_title: string;
	description: string;
	date: Date;
	link_to_company: string;
};

export const Avatar = StyledAvatar;
export const AvatarImage = StyledImage;

function ExperienceItem({
	job_title,
	description,
	date,
	link_to_company
}: ExperienceItemProps) {
	return (
		<ExperienceItemStyled>
			<div>
				<Avatar>
					<AvatarImage
						src='https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'
						alt='Colm Tuite'
					/>
				</Avatar>
			</div>

			<AboutDataStyled>
				<TextBold700Styled>{job_title}</TextBold700Styled>
				<p>{description}</p>
				<p>{date.toISOString()}</p>
				<p>
					<a href={link_to_company}>Link to Site</a>
				</p>
			</AboutDataStyled>
		</ExperienceItemStyled>
	);
}

export default ExperienceItem;
