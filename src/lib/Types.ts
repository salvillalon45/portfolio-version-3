export type ExperienceItemDataType = {
	job_title: string;
	description: string;
	date: { start: string; end: string | null };
	link_to_company: string;
	image_url: string;
	entity: { rich_text: string };
};
