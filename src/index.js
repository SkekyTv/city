import Koa from 'koa';
import router from 'koa-route';
import config from '../config';

import geocode from './routes/geocode';

const app = new Koa();

// basic logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

app.use(router.get('/geocode', geocode.get));

app.listen(
  config.port,
  config.host,
  // eslint-disable-next-line
  () => { console.log(`Server running at ${config.host}:${config.port}`); },
);
