const Controller = require('egg').Controller;

class baseController extends Controller {
  success(data) {
    this.ctx.body = {
      Status: true,
      Message: '',
      Result: data,
    };
  }
  fail(message) {
    this.ctx.body = {
      Status: false,
      Message: message,
      Result: null,
    };
  }
}

module.exports = baseController;