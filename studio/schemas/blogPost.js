import { type } from "os";
import { title } from "process";

export default {
  name: 'blogPost',
  title: 'BLog Post',
  type: 'document',
  fields: [
    {
      name: "blogImage",
      title: "Blog Image",
      type: "image",
      options: {
        hotspot: true,
      },


    },
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
    {
      name: "portableText",
      title: "Portable Text",
      type: "array",

      of: [{
        type: "block",
      },
      ]
    },
  ],

}
