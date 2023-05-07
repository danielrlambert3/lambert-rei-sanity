export const schemaTypes = [
    {
        name: 'state',
        type: 'document',
        title: 'State',
        fields: [
            {
                name: 'state',
                type: 'string',
                title: 'State'
            },
            {
                name: 'stateAbbreviation',
                type: 'string',
                title: 'State Abbreviation'
            },
            {
                name: 'coverImage',
                type: 'image',
                title: 'Cover Image'
            },
            {
                name: 'slug',
                type: 'slug',
                title: 'Slug'
            }
        ]
    },
    {
        name: 'city',
        type: 'document',
        title: 'City',
        fields: [
            {
                name: 'city',
                type: 'string',
                title: 'City'
            },
            {
                name: 'coverImage',
                type: 'image',
                title: 'Cover Image'
            },
            {
                name: 'slug',
                type: 'slug',
                title: 'Slug'
            }
        ]
    },
    {
        name: 'property',
        type: 'document',
        title: 'Property',
        fields: [
            {
                name: 'street',
                type: 'string',
                title: 'Street'
            },
            {
                name: 'city',
                type: 'reference',
                title: 'City',
                to: [{type: 'city'}]
            },
            {
                name: 'state',
                type: 'reference',
                title: 'State',
                to: [{type: 'state'}]
            },
            {
                name: 'zip',
                type: 'string',
                title: 'Zip'
            },
            {
                name: 'country',
                type: 'string',
                title: 'Country'
            },
            {
                name: 'coverImage',
                type: 'image',
                title: 'Cover Image'
            },
            {
                name: 'slug',
                type: 'slug',
                title: 'Slug'
            }

        ]
    }

]
