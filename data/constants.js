const API_HOST = 'http://localhost';
const API_VERSION = 1;
const API_PORT = 3000;

const prepareUrl = (...urls) => `${API_HOST}:${API_PORT}/api/v${API_VERSION}/${urls.join('/')}`;

// Leave this unchanged, if you haven't modified anything in API route configuration.
const ROUTES = {
    GET_RESOURCE: (id) => prepareUrl('resource', id),
    STATUS: prepareUrl('status')
}