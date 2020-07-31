export default {
  $schema: 'http://json-schema.org/draft-07/schema',
  $id: 'http://example.com/example.json',
  type: 'object',
  title: 'The root schema',
  description: 'The root schema comprises the entire JSON document.',
  default: {},
  examples: [
    {
      comments: ['This is comment #1', 'This is comment #2'],
      auth: {
        isAuthenticated: true,
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWYyNDZmODY3ZDI0NjcwOTYxZTY3MTRkIn0sImlhdCI6MTU5NjIyNDI2NiwiZXhwIjoxNTk2MjI3ODY2fQ.kUKq-Ptc-guzCyWDr2WgE1R9w71Vn8vwEjO2OJFwiuY',
        loading: false
      },
      alerts: [
        {
          type: 'success',
          message: 'You can now post a comment!'
        }
      ]
    }
  ],
  required: ['comments', 'auth', 'alerts'],
  properties: {
    comments: {
      $id: '#/properties/comments',
      type: 'array',
      title: 'The comments schema',
      description: 'An explanation about the purpose of this instance.',
      default: [],
      examples: [['This is comment #1', 'This is comment #2']],
      additionalItems: true,
      items: {
        $id: '#/properties/comments/items',
        anyOf: [
          {
            $id: '#/properties/comments/items/anyOf/0',
            type: 'string',
            title: 'The first anyOf schema',
            description: 'An explanation about the purpose of this instance.',
            default: '',
            examples: ['This is comment #1', 'This is comment #2']
          }
        ]
      }
    },
    auth: {
      $id: '#/properties/auth',
      type: 'object',
      title: 'The auth schema',
      description: 'An explanation about the purpose of this instance.',
      default: {},
      examples: [
        {
          isAuthenticated: true,
          token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWYyNDZmODY3ZDI0NjcwOTYxZTY3MTRkIn0sImlhdCI6MTU5NjIyNDI2NiwiZXhwIjoxNTk2MjI3ODY2fQ.kUKq-Ptc-guzCyWDr2WgE1R9w71Vn8vwEjO2OJFwiuY',
          loading: false
        }
      ],
      required: ['isAuthenticated', 'token', 'loading'],
      properties: {
        isAuthenticated: {
          $id: '#/properties/auth/properties/isAuthenticated',
          type: 'boolean',
          title: 'The isAuthenticated schema',
          description: 'An explanation about the purpose of this instance.',
          default: false,
          examples: [true]
        },
        token: {
          $id: '#/properties/auth/properties/token',
          type: 'string',
          title: 'The token schema',
          description: 'An explanation about the purpose of this instance.',
          default: '',
          examples: [
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWYyNDZmODY3ZDI0NjcwOTYxZTY3MTRkIn0sImlhdCI6MTU5NjIyNDI2NiwiZXhwIjoxNTk2MjI3ODY2fQ.kUKq-Ptc-guzCyWDr2WgE1R9w71Vn8vwEjO2OJFwiuY'
          ]
        },
        loading: {
          $id: '#/properties/auth/properties/loading',
          type: 'boolean',
          title: 'The loading schema',
          description: 'An explanation about the purpose of this instance.',
          default: false,
          examples: [false]
        }
      },
      additionalProperties: true
    },
    alerts: {
      $id: '#/properties/alerts',
      type: 'array',
      title: 'The alerts schema',
      description: 'An explanation about the purpose of this instance.',
      default: [],
      examples: [
        [
          {
            type: 'success',
            message: 'You can now post a comment!'
          }
        ]
      ],
      additionalItems: true,
      items: {
        $id: '#/properties/alerts/items',
        anyOf: [
          {
            $id: '#/properties/alerts/items/anyOf/0',
            type: 'object',
            title: 'The first anyOf schema',
            description: 'An explanation about the purpose of this instance.',
            default: {},
            examples: [
              {
                type: 'success',
                message: 'You can now post a comment!'
              }
            ],
            required: ['type', 'message'],
            properties: {
              type: {
                $id: '#/properties/alerts/items/anyOf/0/properties/type',
                type: 'string',
                title: 'The type schema',
                description:
                  'An explanation about the purpose of this instance.',
                default: '',
                examples: ['success']
              },
              message: {
                $id: '#/properties/alerts/items/anyOf/0/properties/message',
                type: 'string',
                title: 'The message schema',
                description:
                  'An explanation about the purpose of this instance.',
                default: '',
                examples: ['You can now post a comment!']
              }
            },
            additionalProperties: true
          }
        ]
      }
    }
  },
  additionalProperties: true
}
