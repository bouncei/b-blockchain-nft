// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import itemImage from './itemImage'
import testImage from './testImage'
import blogPost from './blogPost'
import transactionSchema from './transactionSchema'
import { type } from 'os'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat(
    [
      {
        name: 'users',
        title: 'Users',
        type: 'document',
        fields: [
          {
            name: 'userName',
            title: 'User Name',
            type: 'string',
          },
          {
            name: 'walletAddress',
            title: 'Wallet Address',
            type: 'string',
          },
          {
            name: 'profileImage',
            title: 'Profile Image',
            type: 'image',
          },
          {
            name: 'bannerImage',
            title: 'Banner Image',
            type: 'image',
          },
          {
            name: 'twitterHandle',
            title: 'Twitter Handle',
            type: 'string',
          },
          {
            name: 'igHandle',
            title: 'Instagram Handle',
            type: 'string',
          },
          {
            name: 'transactions',
            title: 'Transactions',
            type: 'array',
            of: [
              {
                type: 'reference',
                to: [{ type: 'transactions' }],
              },
            ],
          },
        ],
      },

      {
        name: 'marketItems',
        title: 'Market Items',
        type: 'document',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string',
          },
          {
            name: 'contractAddress',
            title: 'Contract Address',
            type: 'string',
          },
          {
            name: 'description',
            title: 'Description',
            type: 'string',
          },
          {
            name: 'createdBy',
            title: 'Created By',
            type: 'reference',
            to: [{ type: 'users' }],
          },
          {
            name: 'volumeTraded',
            title: 'Volume Traded',
            type: 'number',
          },
          {
            name: 'floorPrice',
            title: 'Floor Price',
            type: 'number',
          },
          {
            name: 'owners',
            title: 'Owners',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'users' }] }],
          },
          {
            name: 'profileImage',
            title: 'Profile Image',
            type: 'image',
          },
          {
            name: 'bannerImage',
            title: 'Banner Image',
            type: 'image',
          },
          {
            name: 'nftImage',
            title: 'NFT Image',
            type: 'array',
            of: [{ type: 'itemImage' }],
          },
          {
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'testImage' }] }],
          },
        ],
      },
      itemImage,
      testImage,
      transactionSchema,

      {
        name: 'blogs',
        title: 'Blogs',
        type: 'document',

        fields: [
          {
            name: 'blogTitle',
            title: 'Title',
            type: 'string',
          },

          {
            name: 'description',
            title: 'Descripton',
            type: 'string',
          },

          {
            name: 'another',
            title: "Another",
            type: "array",
            of: [{
              type: 'block',
            }]
          },

          {
            name: 'date',
            title: 'Date',
            type: 'string',
          },
          {
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
          },


          {
            name: 'blogDetails',
            title: 'Blog Details',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: "blogPost" }] }],
          },

          // {
          //   name: "refReview",
          //   title: "Reviews",
          //   type: "array",
          //   of: [{ type: "reference", to: [{ type: "reviews" }] }],
          // },

        ],
      },

      blogPost,


      {
        name: "reviews",
        title: "Reviews",
        type: "document",

        fields: [
          {
            name: "name",
            tile: "Name",
            type: "string",

          },

          {
            name: "picture",
            title: "Picture",

            type: "image",
          },

          {
            name: "stars",
            title: "Stars",
            type: "number",
          },

        ],
      }

    ]
    /* Your types here! */
  ),
})
