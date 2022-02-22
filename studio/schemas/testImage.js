export default {
    name: "testImage",
    title: "Test Image",
    type: "document",
    fields : [
        {
            name: "imageTest",
            title: "Image Test",
            type: "image",
            options: {
                hotspot: true,
            }
        },
        {
            name: 'caption',
            title: 'Caption',
            type: 'string',
            options: {
                isHightLight: true
            }
        },
        {
            name: 'price',
            title: 'Price',
            type: 'string',
        },
    ]
}