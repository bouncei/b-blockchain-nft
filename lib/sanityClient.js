import sanityClient from "@sanity/client";


export const client = sanityClient({     // Creating client funtion for sanity.io
    projectId: '9caiy36k',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'sk0ezozlc7yXnJI6YDx37RpsoJuu2M7fTDwGnf8Wi5zQRPNiWPKgKqjFMvxLYhjGEEOiSdRp0mGoDQV0qy6bNMEEBZ6Yj6B28LFQVGNjr1vEJONCrBxiWC5Kjey3zRNw0QCby2fvfSR2qo2xtuK6CH57Ffe26RO9g9xh5H7i2EM5iQM23FAV',
    useCdn: false,
 
})