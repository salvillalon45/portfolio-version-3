import React from 'react';
import {
	PageHeaderContainerStyled,
	SeparatorStyled,
	SubtitleStyled,
	TitleStyled
} from './StyledComponents';

type PageHeaderProps = {
	title: string;
	subtitle: string;
};

function PageHeader({ title, subtitle }: PageHeaderProps) {
	return (
		<PageHeaderContainerStyled>
			<TitleStyled>{title}</TitleStyled>
			<SubtitleStyled>{subtitle}</SubtitleStyled>
			<SeparatorStyled />
		</PageHeaderContainerStyled>
	);
}

export default PageHeader;
