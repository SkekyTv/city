import 'dotenv/config';

const config = {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 3010,
  gmap: {
    url: process.env.GMAP_API_ENDPOINT,
    key: process.env.GMAP_API_KEY,
  },
};

export default config;
