const proxy = [
    {
      context: '/api',
      target: 'https://apirest-departments.herokuapp.com',
      pathRewrite: {'^/api' : ''}
    }
  ];
  
  module.exports = proxy;