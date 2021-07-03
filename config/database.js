const parse = require('pg-connection-string').parse;
module.exports = ({ env }) => {
if(env('NODE_ENV') === 'production') {
  const config = parse(process.env.DATABASE_URL)
  return{
    defaultConnection: 'defoult',
    connections: {
      default: {
        connector: 'bookshelf',
        settings: {
          client: 'postgres',
          host: config.host,
          port: config.port,
          database: config.database,
          username: config.user,
          password: config.password
        },
        options: {
          ssl: false
        }
      }
    }
  }
}

  return{
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'sqlite',
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
}};

//username = doadmin
//password = w9xh7iowhlc3nibw hide
//host = db-mysql-fra1-38555-do-user-8196315-0.b.db.ondigitalocean.com
//port = 25060
//database = defaultdb
//sslmode = REQUIRED