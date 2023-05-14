const ValidInfoContact = {
  MIN_AGE: 1,
  MAX_AGE: 105,
};

const Gender = {
  MALE: 'male',
  FEMALE: 'female',
  NONE: 'none',
};

const HttpCode = {
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
};

const Limit = {
  JSON: 10000,
  WINDOW_MS: 15 * 60 * 1000,
  MAX_LIMITER: 3,
};

module.exports = {
  ValidInfoContact,
  Gender,
  HttpCode,
  Limit,
};
