import parse from 'html-react-parser';

export function parseHTMLToReactElement(
	value: string
): string | JSX.Element | JSX.Element[] {
	return parse(value);
}
