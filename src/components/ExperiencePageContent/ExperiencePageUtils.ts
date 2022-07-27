export function retrievePageContent(textArray) {
	textArray.forEach((textData, index) => {
		const { href, plain_text } = textData;
		console.log(plain_text);
	});
}
