const CONFIG = {
  KEY: '12345',
  BASE_URL: 'https://restaurant-api.dicoding.dev/',
  IMAGE_SMALL: 'images/small/',
  IMAGE_MEDIUM: 'images/medium/',
  IMAGE_LARGE: 'images/large/',
  CACHE_NAME: process.env.NODE_ENV !== 'production' ? new Date().toISOString() : 'DeliziaApp-V1',
  DATABASE_NAME: 'delizia-app-db',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'restaurant',
};

export default CONFIG;
