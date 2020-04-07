'use strict';

const Application = require('./lib/application');
const Agent = require('./lib/agent');
const egg = require('egg');
const Controller = require('./app/controller/home');

// 把egg的API进行合并和覆盖
Object.assign(exports, egg);

// 把自己建立的app和agent进行发布出去，并且合并起来
exports.Application = Application;
exports.Agent = Agent;
// 把controller进行发布出去
exports.Controller = Controller;
