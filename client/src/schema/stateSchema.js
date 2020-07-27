export default {
  $schema: 'http://json-schema.org/draft-07/schema',
  $id: 'http://example.com/example.json',
  type: 'object',
  title: 'The root schema',
  description: 'The root schema comprises the entire JSON document.',
  default: {},
  examples: [
    {
      comments: ['Comment 1', 'Comment 2'],
      isAuthenticated: true,
      alerts: ['Please sign in to access this page!']
    }
  ],
  required: ['comments', 'isAuthenticated', 'alerts'],
  additionalProperties: true,
  properties: {
    comments: {
      $id: '#/properties/comments',
      type: 'array',
      title: 'The comments schema',
      description: 'An explanation about the purpose of this instance.',
      default: [],
      examples: [['Comment 1', 'Comment 2']],
      additionalItems: true,
      items: {
        anyOf: [
          {
            $id: '#/properties/comments/items/anyOf/0',
            type: 'string',
            title: 'The first anyOf schema',
            description: 'An explanation about the purpose of this instance.',
            default: '',
            examples: ['Comment 1', 'Comment 2']
          }
        ],
        $id: '#/properties/comments/items'
      }
    },
    isAuthenticated: {
      $id: '#/properties/isAuthenticated',
      type: 'boolean',
      title: 'The isAuthenticated schema',
      description: 'An explanation about the purpose of this instance.',
      default: false,
      examples: [true]
    },
    alerts: {
      $id: '#/properties/alerts',
      type: 'array',
      title: 'The alerts schema',
      description: 'An explanation about the purpose of this instance.',
      default: [],
      examples: [['Please sign in to access this page!']],
      additionalItems: true,
      items: {
        anyOf: [
          {
            $id: '#/properties/alerts/items/anyOf/0',
            type: 'string',
            title: 'The first anyOf schema',
            description: 'An explanation about the purpose of this instance.',
            default: '',
            examples: ['Please sign in to access this page!']
          }
        ],
        $id: '#/properties/alerts/items'
      }
    }
  }
}
