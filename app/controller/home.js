'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async redirect () {
    const { ctx } = this;
    ctx.unsafeRedirect('http://www.baidu.com')
  }
}

module.exports = HomeController;
