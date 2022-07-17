// const React = require('react');

// exports.onRenderBody = ({ setHeadComponents }) => {
// 	setHeadComponents([
// 		<script
// 			dangerouslySetInnerHTML={{
// 				__html: `(function () {
// 					// Update the current theme to either 'light' or 'dark'
// 					function setTheme(theme) {
// 						let window = window;
// 						window.__theme = theme;
// 						// TODO: do other logic to update theme here
// 						console.log('Theme updated:', theme);

// 						if (theme === 'dark') {
// 							document.documentElement.className = 'dark';
// 						} else {
// 							document.documentElement.className = '';
// 						}
// 					}

// 					// Save the user's explicit theme preference.
// 					// We're attaching this to window so we can access it anywhere.
// 					// We'll need it later in this post.
// 					window.__setPreferredTheme = function (theme) {
// 						setTheme(theme);
// 						try {
// 							localStorage.setItem('preferred-theme', theme);
// 						} catch (e) {}
// 					};

// 					// Is there a Saved Theme Preference in localStorage?
// 					let preferredTheme;
// 					try {
// 						preferredTheme =
// 							localStorage.getItem('preferred-theme');
// 					} catch (e) {}

// 					// Is there an Operating System Preference?
// 					let darkQuery = window.matchMedia(
// 						'(prefers-color-scheme: dark)'
// 					);

// 					// PICK THE INITIAL THEME
// 					// 1. Use the theme from localStorage, if any
// 					// 2. Use the OS theme, if any
// 					// 3. Default to light
// 					setTheme(
// 						preferredTheme || (darkQuery.matches ? 'dark' : 'light')
// 					);
// 				})()`;
// 			}}
// 		/>
// 	]);
// };

// const MagicScriptTag = () => {
// 	let codeToRunOnClient = `
//   (function() {
//     function getInitialColorMode() {
//         const persistedColorPreference = window.localStorage.getItem('color-mode');
//         const hasPersistedPreference = typeof persistedColorPreference === 'string';

//         // If the user has explicitly chosen light or dark,
//         // let's use it. Otherwise, this value will be null.
//         if (hasPersistedPreference) {
//             return persistedColorPreference;
//         }

//         // If they haven't been explicit, let's check the media
//         // query
//         const mql = window.matchMedia('(prefers-color-scheme: dark)');
//         const hasMediaQueryPreference = typeof mql.matches === 'boolean';
//         if (hasMediaQueryPreference) {
//             return mql.matches ? 'dark' : 'light';
//         }

//         // If they are using a browser/OS that doesn't support
//         // color themes, let's default to 'light'.
//         return 'light';
//     }
//     const colorMode = getInitialColorMode();
//     const root = document.documentElement;
//     root.style.setProperty(
//       '--color-text',
//       colorMode === 'light'
//         ? '${COLORS.light.text}'
//         : '${COLORS.dark.text}'
//     );
//     root.style.setProperty(
//       '--color-background',
//       colorMode === 'light'
//         ? '${COLORS.light.background}'
//         : '${COLORS.dark.background}'
//     );
//     root.style.setProperty(
//       '--color-primary',
//       colorMode === 'light'
//         ? '${COLORS.light.primary}'
//         : '${COLORS.dark.primary}'
//     );
//     root.style.setProperty('--initial-color-mode', colorMode);
//   })()`;
// 	// eslint-disable-next-line react/no-danger
// 	return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
// };
