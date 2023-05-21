export const schemaTypes = [
    {
        name: 'state',
        type: 'document',
        title: 'State',
        fields: [
            {
                name: 'state',
                type: 'string',
                title: 'State',
                validation: (Rule) => { return Rule.required()}
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
                title: 'Slug',
                validation: (Rule) => { return Rule.required()}
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
                title: 'City',
                validation: (Rule) => { return Rule.required()}
            },
            {
                name: 'coverImage',
                type: 'image',
                title: 'Cover Image'
            },
            {
                name: 'slug',
                type: 'slug',
                title: 'Slug',
                validation: (Rule) => { return Rule.required()}
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
                title: 'Street',
                validation: (Rule) => { return Rule.required()}
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
                title: 'Cover Image',
                options: {
                  hotspot: true
                }
            },
            {
                name: 'slug',
                type: 'slug',
                title: 'Slug',
                validation: (Rule) => { return Rule.required()}
            }

        ]
    },
    {
        name: 'blog',
        type: 'document',
        title: 'Blog',
        fields: [
          {
            name: 'title',
            type: 'string',
            title: 'Title'
          },
          {
            name: 'subtitle',
            type: 'string',
            title: 'Subtitle'
          },
          {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            validation: (Rule) => { return Rule.required()}
          },
          {
            name: 'coverImage',
            type: 'image',
            title: 'Cover Image',
            fields: [
                {
                  type: 'text',
                  name: 'alt',
                  title: 'Description'
                }
              ]
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
              {
                type: 'block'
              },
              {
                type: 'image',
                fields: [
                  {
                    type: 'text',
                    name: 'alt',
                    title: 'Description',
                    options: {
                      isHighlighted: true
                    }
                  }
                ],
                options: {
                  hotspot: true
                }
              }
            ]
          }
          
        ]
      }
]
