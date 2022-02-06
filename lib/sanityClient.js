import sanityClient from "@sanity/client";


export const client = sanityClient({     // Creating client funtion for sanity.io
    projectId: 'nm1pp7pw',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'skhfV0K4zdOkbzQJqoHM6yrj7L6WLsBm4PudItsS5eAlPfeZAYbVYGClJAq85PJc8igowqCZiCHBsLQoyg6m8kqira4cSjjVAYzizuVJGBMRfKlsZNFW0KwknfVixU1kOmdZWsVLUhT2kPqW5amAhloC1b948FBFgVyXzELAVbyVxdc0KCV3',
    useCdn: false,
    // ignoreBrowserTokenWarning: true,
 
})