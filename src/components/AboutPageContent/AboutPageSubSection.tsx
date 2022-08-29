import React from 'react';
import {
	AboutPageSubSectionContainer,
	Emoji,
	ListMenu,
	TextBold700Styled
} from '../Reusable/StyledComponents';
import { parseHTMLToReactElement } from '../../lib/utils';

type AboutPageSubSectionProps = {
	title: string;
	emoji: string;
	content: Array<string> | null;
};

export default function AboutPageSubSection({
	title,
	emoji,
	content
}: AboutPageSubSectionProps) {
	return (
		<AboutPageSubSectionContainer>
			<TextBold700Styled>
				<Emoji>{emoji}</Emoji> {title}
			</TextBold700Styled>
			<ListMenu>
				{content?.map((value) => {
					return <li>{parseHTMLToReactElement(value)}</li>;
				})}
			</ListMenu>
		</AboutPageSubSectionContainer>
	);
}
