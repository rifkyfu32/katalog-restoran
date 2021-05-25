const CONFIG = {
  KEY: '12345',
  BASE_URL: 'https://restaurant-api.dicoding.dev/',
  BASE_IMAGE_URL_SMALL: 'https://restaurant-api.dicoding.dev/images/small/',
  BASE_IMAGE_URL_MEDIUM: 'https://restaurant-api.dicoding.dev/images/medium/',
  BASE_IMAGE_URL_LARGE: 'https://restaurant-api.dicoding.dev/images/large/',
  CACHE_NAME: process.env.NODE_ENV !== 'production' ? new Date().toISOString() : 'DeliziaApp-V1',
  DATABASE_NAME: 'delizia-app-db',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'restaurant',
};

export default CONFIG;
