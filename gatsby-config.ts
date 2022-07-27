import type { GatsbyConfig } from 'gatsby';
require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`
});

const config: GatsbyConfig = {
	siteMetadata: {
		title: `Salvador Villalon Portfolio`,
		siteUrl: `https://www.yourdomain.tld`
	},
	// More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
	// If you use VSCode you can also use the GraphQL plugin
	// Learn more at: https://gatsby.dev/graphql-typegen
	graphqlTypegen: true,
	plugins: [
		'gatsby-plugin-image',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-plugin-use-dark-mode',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/'
			},
			__key: 'images'
		},
		{
			resolve: `gatsby-source-notion-api`,
			options: {
				token: process.env.NOTION_SECRET,
				databaseId: process.env.NOTION_DATABASE_ID,
				propsToFrontmatter: true,
				lowerTitleLevel: true
			}
		}
	]
};

export default config;
