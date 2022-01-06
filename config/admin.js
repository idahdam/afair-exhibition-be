module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3c6b58cc7cb14de0f220a5debba43e22'),
  },
});
