module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/chessexp'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }
};
