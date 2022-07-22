import { checkPageMatch, createLinkTag } from '../utils/SidebarUtils';

type SidebarMenuItemProps = {
	label: string;
	value: string;
	pageId: string | null | undefined;
};

function SidebarMenuItem({ value, label, pageId }: SidebarMenuItemProps) {
	return createLinkTag(value, label, false, checkPageMatch(pageId, value));
}

export default SidebarMenuItem;
