import auth from './auth';
import SERVER_URI from './server';

const BUCKET_NAME = process.env.REACT_APP_BUCKET_NAME;

const config = {};

//* Auth
config.google = auth.google;
config.facebook = auth.facebook;

export { SERVER_URI, BUCKET_NAME };
export { config };
