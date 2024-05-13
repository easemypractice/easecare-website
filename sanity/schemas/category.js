 // Define your categoryType schema
// export default {
//   name: 'category',
//   type: 'document',
//   title: 'Category',
//   fields: [
//     {
//       name: 'title',
//       type: 'string',
//       title: 'Title',
//     },
//     {
//       name: 'subtitle',
//       type: 'string',
//       title: 'Sub Title',
//     },
//     // {
//     //   name: 'slug',
//     //   title: 'Slug',
//     //   type: 'slug',
//     //   options: {
//     //     source: 'title',
//     //     maxLength: '50',
//     //   },
//     // },
//     // {
//     //   name: 'coveredImage',
//     //   title: 'Covered Image',
//     //   type: 'image',
//     // },
//     {name: 'description', title: 'Description', type: 'string'},
//     // {
//     //   name: 'content',
//     //   type: 'array',
//     //   title: 'Content',
//     //   of: [
//     //     {
//     //       type: 'block',
//     //     },
//     //     {
//     //       type: 'image',
//     //       fields: [
//     //         {
//     //           type: 'text',
//     //           name: 'alt',
//     //           title: 'Alternative text',
//     //           description:
//     //             'some of your visitors cannot see images,be they blind,color-blind,low-sighted',
//     //           option: {
//     //             isHighlighted: true,
//     //           },
//     //         },
//     //       ],
//     //     },
//     //   ],
//     // },
//   ],
//   preview: {
//     select: {
//       title: 'title',
//       subTitle: 'subtitle',
//       //   image: 'coverImage',
//       //   slug: 'slug',
//       //   content: 'content',
//       description: 'description',
//     },
//     prepare({title, subTitle, description}) {
//       return {
//         title,
//         // media: image,
//         // subtitle: slug.current,
//         // content,
//         subTitle,
//         description,
//       }
//     },
//   },
// }

// export default {
//   name: 'category',
//   type: 'document',
//   title: 'Category',
//   fields: [
//     {
//       name: 'title',
//       type: 'string',
//       title: 'Title',
//     },
//     {
//       name: 'subtitle',
//       type: 'string',
//       title: 'Sub Title',
//     },
//     {
//       name: 'description',
//       title: 'Description',
//       type: 'string',
//     },
//     {
//       name: 'subcategories',
//       title: 'Subcategories',
//       type: 'array',
//       of: [
//         {
//           type: 'reference',
//           to: [{type: 'subcategory'}],
//         },
//       ],
//     },
//   ],
// }
export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    // {
    //   name: 'description',
    //   title: 'Description',
    //   type: 'text',
    // },
    {
      name: 'subcategories',
      title: 'Subcategories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'subcategory'}],
        },
      ],
    },
  ],
}