// seo.js
export default {
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    {
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'The title that appears in search engine results.',
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      description: 'A brief description of the page content (max 160 characters).',
    },
    {
      name: 'metaKeywords',
      title: 'Meta Keywords',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Keywords relevant to the page content (comma-separated).',
    },
    {
      name: 'openGraph',
      title: 'Open Graph',
      type: 'object',
      fields: [
        {
          name: 'ogTitle',
          title: 'OG Title',
          type: 'string',
          description: 'The title that appears when the content is shared on social media.',
        },
        {
          name: 'ogDescription',
          title: 'OG Description',
          type: 'text',
          description: 'A brief description of the content (max 200 characters).',
        },
        {
          name: 'ogImage',
          title: 'OG Image',
          type: 'image',
          description: 'An image to accompany the shared content on social media.',
        },
      ],
    },
  ],
}