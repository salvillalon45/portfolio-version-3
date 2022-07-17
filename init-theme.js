// This is the code we're inserting at the top of our page

(function () {
	// Update the current theme to either 'light' or 'dark'
	function setTheme(theme) {
		window.__theme = theme;
		// TODO: do other logic to update theme here
		console.log('Theme updated:', theme);

		if (theme === 'dark') {
			document.documentElement.className = 'dark';
		} else {
			document.documentElement.className = '';
		}
	}

	// Save the user's explicit theme preference.
	// We're attaching this to window so we can access it anywhere.
	// We'll need it later in this post.
	window.__setPreferredTheme = function (theme) {
		setTheme(theme);
		try {
			localStorage.setItem('preferred-theme', theme);
		} catch (e) {}
	};

	// Is there a Saved Theme Preference in localStorage?
	let preferredTheme;
	try {
		preferredTheme = localStorage.getItem('preferred-theme');
	} catch (e) {}

	// Is there an Operating System Preference?
	let darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

	// PICK THE INITIAL THEME
	// 1. Use the theme from localStorage, if any
	// 2. Use the OS theme, if any
	// 3. Default to light
	setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
})();
