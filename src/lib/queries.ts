import { graphql, useStaticQuery } from 'gatsby';

const EXPERIENCE_DATA_QUERY = graphql`
	query {
		allNotion(
			filter: {
				properties: {
					content_type: { value: { name: { eq: "experience" } } }
				}
			}
		) {
			nodes {
				title
				raw {
					children {
						paragraph {
							text {
								plain_text
								href
							}
						}
					}
					properties {
						content_type {
							select {
								name
							}
							type
						}
						about_image {
							files {
								file {
									url
								}
							}
						}
					}
				}
			}
		}
	}
`;

export function useExperienceData() {
	return useStaticQuery(EXPERIENCE_DATA_QUERY);
}
