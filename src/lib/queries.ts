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
						entity {
							rich_text
						}
						link_to_code {
							url
						}
						link_to_site {
							url
						}
						start_date {
							date {
								start(formatString: "")
								end(formatString: "")
							}
						}
						title {
							title {
								plain_text
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
