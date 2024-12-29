import fluid, { extract, fontSize, screens } from 'fluid-tailwind'
import type { Config } from 'tailwindcss'
import * as tailwindcssAnimate from 'tailwindcss-animate'

export default {
	darkMode: ['class'],
	content: {
		files: [
			'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
			'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
			'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		],
		extract,
	},
	theme: {
		screens,
		fontSize,
		// /** @type {import('fluid-tailwind').FluidThemeConfig} */
		// fluid: ({ theme }: { theme: PluginAPI['theme'] }) => ({
		// 	defaultScreens: ['20rem', theme('screens.lg')],
		// }),
		container: {
			center: true,
		},
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
		},
	},
	plugins: [fluid, tailwindcssAnimate],
} satisfies Config
