import type { StrapiApp } from '@strapi/strapi/admin';

export default {
  config: {
    locales: [
      'sv',
    ],
  },
  bootstrap(app: StrapiApp) {
    // console.log(app);
  },
};
