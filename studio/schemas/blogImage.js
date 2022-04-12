export default {
  name: 'blogImage',
  title: 'BLog Image',
  type: 'image',
  fields: [
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
      options: {
        isHightLight: true,
      },
    },
    {
      name: 'info',
      title: 'Info',
      type: 'string',
    },
  ],
  options: {
    hotspot: true,
  },
}
