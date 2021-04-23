exports.creds = {
    identityMetadata: 'https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration',

    clientID: 'cd0d443c-b349-462d-b1e5-8c1c1c21bff9',

    clientSecret: 'w5Q4N8_M860Sb~9win_tzWwlKwp.-6U~8Q',

    responseType: 'code id_token',

    responseMode: 'form_post',

    redirectUrl: 'http://localhost:1356/auth/openid/return',

    allowHttpForRedirectUrl: true,

    validateIssuer: false,

    issuer: null,

    passReqToCallback: false,

    useCookieInsteadOfSession: false,

    cookieEncryptionKeys: [
      { 'key': '12345678901234567890123456789012', 'iv': '123456789012' },
      { 'key': 'abcdefghijklmnopqrstuvwxyzabcdef', 'iv': 'abcdefghijkl' }
    ],

    scope: ['profile', 'offline_access', 'https://graph.microsoft.com/mail.read'],

    loggingLevel: false,

    nonceLifetime: null,

    nonceMaxAmount: 5,

    clockSkew: null,
  };

  exports.destroySessionUrl = 'http://localhost:1356';

  exports.useMongoDBSessionStore = false;

  exports.databaseUri = 'mongodb://localhost/OIDCStrategy';

  exports.mongoDBSessionMaxAge = 24 * 60 * 60;
