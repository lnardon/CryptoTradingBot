module.exports = {
  baseUrl: process.env.BASE_URL,
  apiAuth: {
    key: process.env.KC_KEY, // KC-API-KEY
    secret: process.env.KC_SECRET, // API-Secret
    passphrase: process.env.KC_PASSWORD, // KC-API-PASSPHRASE
  },
  authVersion: 2, // KC-API-KEY-VERSION. Notice: for v2 API-KEY, not required for v1 version.
};
