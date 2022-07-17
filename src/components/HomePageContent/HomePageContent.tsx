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
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
				varius metus elit, vitae euismod diam dignissim non. Mauris
				vitae est ligula. Quisque sit amet iaculis nisi. Donec congue
				libero sit amet luctus sagittis. Integer vitae ornare elit.
				Fusce id eros non dui molestie tincidunt ut eu tellus. Cras
				dictum ornare maximus. Etiam rhoncus enim augue, et eleifend est
				feugiat venenatis. Phasellus et tristique felis, vel consequat
				nunc.
			</BodyTextStyled>
		</>
	);
}

export default HomePageContent;
