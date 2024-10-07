import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		sourcemap: true, // Enable sourcemaps for production builds
	},
	css: {
		devSourcemap: true, // Enable CSS sourcemaps during development
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
