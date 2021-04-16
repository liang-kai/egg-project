'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async redirect () {
    const { ctx } = this;
    ctx.unsafeRedirect('http://e.test.bank.ecitic.com/citiccard/frontend/dev-mgm-sdk/static/hongbo-test-c.html')
  }
}

module.exports = HomeController;
