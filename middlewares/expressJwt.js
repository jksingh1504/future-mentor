const { expressjwt } = require("express-jwt");
// jwt config for token based authorization
function jwtAuth(secret) {
  return expressjwt({ secret, algorithms: ["HS256"], onExpired }).unless({
    path: [
      //public routes that don't require authentication
      "/api/user/auth/verify",
      "/api/user/auth/login"
    ],
  });
}

async function onExpired(req, err) {
  if (new Date() - err.inner.expiredAt < 10000) return;
  throw err;
}

module.exports = { jwtAuth };
