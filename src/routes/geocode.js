import axios from 'axios';
import config from '../../config';

const geocode = {
  get: async (ctx) => {
    const { city } = ctx.query;
    let response;
    try {
      response = await axios.get(config.gmap.url, {
        params: {
          address: city,
          key: config.gmap.key,
        },
      });
    } catch (e) {
      ctx.throw(e);
    }
    ctx.body = {
      geocode: response.data,
    };
  },
};

export default geocode;
