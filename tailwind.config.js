// tailwind.config.js
const tailwindMdBase = require('@geoffcodesthings/tailwind-md-base')

module.exports = {
	theme: {
		markdownBase: {
			wrapperClass: 'content',
		},
	},
	plugins: [tailwindMdBase()],
}
