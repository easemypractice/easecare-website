// export default {
//   title: 'Clarity Method',
//   name: 'clarity',
//   type: 'document',
//   fields: [
//     {
//       title: 'Categories',
//       name: 'categories',
//       type: 'array',
//       of: [{type: 'reference', to: [{type: 'category'}]}],
//     },
//   ],
// }
export default {
  name: 'clarityMethod',
  title: 'Clarity Method',
  type: 'document',
  fields: [
    {
      name: 'parentCategories',
      title: 'Parent Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'parentCategory'}],
        },
      ],
    },
  ],
}