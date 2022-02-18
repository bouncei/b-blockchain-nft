export default {
    name: 'itemImage',
    title: 'Item Image',
    type: 'image',
    fields: [
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
            type: 'float',
        },
    ],
    options: {
        hotspot: true,
    }
}