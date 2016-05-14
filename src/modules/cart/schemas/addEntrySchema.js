module.exports = {
  payload: {
    type: 'object',
    properties: {
      cartId: {
        type: 'string'
      },
      product: {
        type: 'object',
        properties: {
          code: {
            type: 'string'
          },
          quantity: {
            type: 'integer',
            minimum: 1
          }
        },
        required: [
          'code',
          'quantity'
        ]
      }
    },
    required: [
      'cartId',
      'product'
    ],
    additionalProperties: true
  }
};

