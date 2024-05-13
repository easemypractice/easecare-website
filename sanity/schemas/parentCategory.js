// export default {
// //   name: 'parentCategory',
// //   title: 'Parent Category',
// //   type: 'document',
// //   fields: [
// //     {
// //       name: 'title',
// //       title: 'Title',
// //       type: 'string',
// //     },
// //     {
// //       name: 'description',
// //       title: 'Description',
// //       type: 'text',
// //     },
// //     {
// //       name: 'categories',
// //       title: 'Categories',
// //       type: 'array',
// //       of: [
// //         {
// //           type: 'reference',
// //           to: [{type: 'category'}],
// //         },
// //       ],
// //     },
// //   ],
// // }
export default {
  name: 'parentCategory',
  title: 'Parent Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    // {
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'category' },
            { type: 'subcategory' }
          ]
        }
      ]
    }
  ]
}