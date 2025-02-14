import { z, defineCollection } from 'astro:content';

const blog = defineCollection({
	schema: {
		title: z.string(),
		description: z.string().max(60, 'For SEO purposes, keep descriptions short!'),
	},
});

export const collections = { blog };
