require('./configure-env');

const env = {
  PORT: process.env.APP_PORT || 5000,
  JWT_SECRET: process.env.JWT_SECRET || 'secret',
//   SERVICE_1_URL: process.env.SERVICE_1_URL || 'http://localhost:5001',
};

export default env;
