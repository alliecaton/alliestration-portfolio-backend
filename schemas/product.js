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
