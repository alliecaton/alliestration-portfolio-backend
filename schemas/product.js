export default {
	name: 'product',
	title: 'Product',
	type: 'document',
	fields: [
		{
			name: 'title',
			type: 'string',
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
		},
		{
			name: 'body',
			title: 'Body',
			type: 'text',
		},
		{
			name: 'twitter',
			title: 'Twitter',
			type: 'url',
		},
		{
			name: 'store',
			title: 'Store Link',
			type: 'url',
		},
		{
			name: 'images',
			title: 'Images',
			type: 'array',
			of: [
				{
					type: 'image',
				},
			],
		},
	],
}
