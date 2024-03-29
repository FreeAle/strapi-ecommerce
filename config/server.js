module.exports = ( { env } ) => ( {
  host: "${process.env.HOST || '0.0.0.0'}",
  port: "${process.env.PORT || 3000}",
  admin: {
    auth: {
      secret: env( 'ADMIN_JWT_SECRET', '64b03cce75d9ff8a77a1e40fc1441b73' ),
    },
  },
} );
