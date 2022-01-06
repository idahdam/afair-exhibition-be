module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3bc07101f54b937b73588622b6e5fe0b'),
  },
  // url: 'http://example.com/dashboard',
});