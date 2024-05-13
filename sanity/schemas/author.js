import { defineField } from "sanity";

export default {
  name: 'author',
  type: 'document',
  title: 'Author',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'about',
      type: 'string',
      title: 'About',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
    }),
  ],
}