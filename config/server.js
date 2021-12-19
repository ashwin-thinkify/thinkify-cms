module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  // url: 'https://thinkify-be.herokuapp.com',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '6009630389cd24561895f3c624933cc4'),
    },
  },
});
