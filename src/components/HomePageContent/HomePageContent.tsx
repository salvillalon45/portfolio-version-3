import React from 'react';
import { homePageHeaderItems } from '../../lib/Constants';
import PageHeader from '../Reusable/PageHeader';
import HomePagePicture from '../../images/home_pic_1.jpg';
import { BodyTextStyled, HomePageImage } from '../Reusable/StyledComponents';

function HomePageContent() {
	const { title, subtitle } = homePageHeaderItems;

	return (
		<>
			<HomePageImage src={HomePagePicture} />
			<PageHeader title={title} subtitle={subtitle} />

			<BodyTextStyled>
				My name is Salvador Villalon Jr and welcome to my space in the
				internet!
			</BodyTextStyled>

			<BodyTextStyled>
				I am a Software Engineer with an aspiration to work on ideas
				that make a positive impact in the world!
			</BodyTextStyled>

			<BodyTextStyled>
				I am working at Accenture as a Software Engineer. I have worked
				for Code.org and currently creating innovative full-stack
				applications at a Fortune 500 Social Media Company. I am a Lead
				Full Stack engineer collaborating with a team of 3 off-shore
				engineers to deliver a brand new internal tool.
			</BodyTextStyled>

			<BodyTextStyled>
				Feel free to look around and thanks again for visiting!
			</BodyTextStyled>
		</>
	);
}

export default HomePageContent;
