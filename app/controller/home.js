'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async redirect () {
    const { ctx } = this;
    const query = this.ctx.query;
    ctx.unsafeRedirect(query.rtn || 'http://shipin.press')
  }

  async cacheControl() {
    const { ctx } = this;
    ctx.set('Cache-Control', 'no-store')
    ctx.set('Cache-Control', 'no-cache')
    await ctx.render('cache.ejs')
  }
}

module.exports = HomeController;
