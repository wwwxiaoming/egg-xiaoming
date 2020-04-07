'use strict';
const BaseController = require('../core/base_result');
const fs = require('fs');
const path = require('path');
class HomeController extends BaseController {
  async index() {
    await this.ctx.render('index_html.html');
  }
}

module.exports = HomeController;
