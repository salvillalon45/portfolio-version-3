import React from 'react';
import {
	aboutMeSectionItems,
	aboutPageHeaderItems,
	careerSectionItems,
	currentlyIAmSectionItems,
	educationSkillsPersonalProjecsSectionItems,
	intoCSAndSWESectionItems,
	longTermSectionItems,
	myGoalsSectionItems,
	shortTermSectionItems
} from '../../lib/Constants';
import PageHeader from '../Reusable/PageHeader';
import {
	BodyTextStyled,
	Emoji,
	ListMenu,
	TextBold700Styled
} from '../Reusable/StyledComponents';
import AboutPageSection from './AboutPageSection';
import AboutPageSubSection from './AboutPageSubSection';

function AboutPageContent() {
	const { title, subtitle } = aboutPageHeaderItems;

	return (
		<>
			<PageHeader title={title} subtitle={subtitle} />
			<AboutPageSection {...aboutMeSectionItems} />

			<AboutPageSection {...intoCSAndSWESectionItems} />

			<AboutPageSection {...currentlyIAmSectionItems} />
			<AboutPageSubSection {...careerSectionItems} />
			<AboutPageSubSection
				{...educationSkillsPersonalProjecsSectionItems}
			/>

			<AboutPageSection {...myGoalsSectionItems} />
			<AboutPageSubSection {...shortTermSectionItems} />
			<AboutPageSubSection {...longTermSectionItems} />
		</>
	);
}

export default AboutPageContent;
