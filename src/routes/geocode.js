import axios from 'axios';
import config from '../../config';

const geocode = {
  city: async (ctx) => {
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

    // Keep only city
    const filteredGeocode = response.data.results.find((result) => result.types.includes('locality'));
    ctx.body = filteredGeocode;
  },
};

export default geocode;
