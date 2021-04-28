'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/redirect', controller.home.redirect)
  router.get('/cache', controller.home.cacheControl)
};
