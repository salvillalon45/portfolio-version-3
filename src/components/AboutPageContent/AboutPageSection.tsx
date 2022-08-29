import React from 'react';
import { parseHTMLToReactElement } from '../../lib/utils';
import {
	BodyTextStyled,
	Emoji,
	TextBold700Styled
} from '../Reusable/StyledComponents';

type AboutPageSectionProps = {
	title: string;
	emoji: string;
	content: Array<string> | null;
};

export default function AboutPageSection({
	title,
	emoji,
	content
}: AboutPageSectionProps) {
	return (
		<>
			<TextBold700Styled>
				<Emoji>{emoji}</Emoji> {title}
			</TextBold700Styled>
			{content?.map((value) => {
				return (
					<BodyTextStyled>
						{parseHTMLToReactElement(value)}
					</BodyTextStyled>
				);
			})}
		</>
	);
}
