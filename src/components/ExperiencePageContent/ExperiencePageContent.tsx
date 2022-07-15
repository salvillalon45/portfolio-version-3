import React from 'react';
import { experiencePageHeaderItems } from '../../lib/Constants';
import PageHeader from '../Reusable/PageHeader';
import Experience from './Experience';

function ExperiencePageContent() {
	const { title, subtitle } = experiencePageHeaderItems;

	return (
		<>
			<PageHeader title={title} subtitle={subtitle} />

			<Experience />
		</>
	);
}

export default ExperiencePageContent;
