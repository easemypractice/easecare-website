// export default {
//   name: 'subcategory',
//   type: 'document',
//   title: 'Subcategory',
//   fields: [
//     {
//       name: 'title',
//       type: 'string',
//       title: 'Title',
//     },
//     {
//       name: 'shortDescription',
//       title: 'Short Description',
//       type: 'string',
//     },
//     {
//       name: 'content',
//       type: 'array',
//       title: 'Content',
//       of: [
//         {
//           type: 'block',
//         },
//         {
//           type: 'image',
//           fields: [
//             {
//               type: 'text',
//               name: 'alt',
//               title: 'Alternative text',
//               description:
//                 'Some of your visitors cannot see images, be they blind, color-blind, or low-sighted',
//               options: {
//                 isHighlighted: true,
//               },
//             },
//           ],
//         },
//       ],
//     },
//   ],
// }
// export default {
//   name: 'subcategory',
//   type: 'document',
//   title: 'Subcategory',
//   fields: [
//     {
//       name: 'title',
//       type: 'string',
//       title: 'Title',
//     },
//     {
//       name: 'shortDescription',
//       title: 'Short Description',
//       type: 'string',
//     },
//     {
//       name: 'content',
//       type: 'array',
//       title: 'Content',
//       of: [
//         {
//           type: 'block',
//         },
//         {
//           type: 'image',
//           fields: [
//             {
//               type: 'text',
//               name: 'alt',
//               title: 'Alternative text',
//               description:
//                 'Some of your visitors cannot see images, be they blind, color-blind, or low-sighted',
//               options: {
//                 isHighlighted: true,
//               },
//             },
//           ],
//         },
//       ],
//     },
//     {
//       name: 'subsubcategories',
//       title: 'Sub-Subcategories',
//       type: 'array',
//       of: [
//         {
//           type: 'reference',
//           to: [{type: 'subsubcategory'}],
//         },
//       ],
//     },
//   ],
// }
export default  {
  name: 'subcategory',
  title: 'Subcategory',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'string',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Alternative text',
              description:
                'Some of your visitors cannot see images, be they blind, color-blind, or low-sighted',
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
      ],
    },
  ],
}