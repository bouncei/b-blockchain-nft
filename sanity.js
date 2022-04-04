import { createClient, createImageUrlBuilder } from 'next-sanity'

const config = {
  dataset: 'production',
  projectId: 'nm1pp7pw',
  // apiVersion: '2021-03-25',
  // token: 'skhfV0K4zdOkbzQJqoHM6yrj7L6WLsBm4PudItsS5eAlPfeZAYbVYGClJAq85PJc8igowqCZiCHBsLQoyg6m8kqira4cSjjVAYzizuVJGBMRfKlsZNFW0KwknfVixU1kOmdZWsVLUhT2kPqW5amAhloC1b948FBFgVyXzELAVbyVxdc0KCV3',
  useCdn: false,
}

// formating the .jpg from sanity.io into a source attribute in an image tag.
export const urlFor = (source) => createImageUrlBuilder(config).image(source)

export const sanityClient = createClient(config)
