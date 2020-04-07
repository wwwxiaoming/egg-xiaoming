'use strict';
const path = require('path');
module.exports = appInfo => {
  const config = {};

  /**
   * some description
   * @member Config#test
   * @property {String} key - some description
   */
  config.test = {
    key: appInfo.name + '_123456',
  };
  config.keys = appInfo.name + '_1528082326883_360';

  // 自定义日志输出的目录
  config.logger = {
    dir: `${appInfo.root}/logs/${appInfo.name}/${new Date().toLocaleDateString()}`,
    appLogName: `${appInfo.name}-app.log`,
    coreLogName: `${appInfo.name}-core.log`,
    agentLogName: `${appInfo.name}-agent.log`,
    errorLogName: `${appInfo.name}-error.log`,
    outputJSON: true,
  };
  // 配置模板
  config.view = {
    cache: true, // 是否开启缓存，开启后，下次渲染同样路径的模板时不会重新查找
    mapping: {
      '.html': 'ejs', // 这个是配置渲染文件的后缀名，我一般都是喜欢html
    },
    root: [
      path.join(appInfo.baseDir, 'app/view'),
      path.join(__dirname, '../app/view/'),
    ].join(','),
  };

  // 配置静态文件的目录
  config.static = {
    dir: [path.join(appInfo.baseDir, 'app/public'),path.join(__dirname, '../app/public/'),], // `String` or `Array:[dir1, dir2, ...]` 静态化目录,可以设置多个静态化目录
    dynamic: true, // 如果当前访问的静态资源没有缓存，则缓存静态文件，和`preload`配合使用；
    preload: false,
    maxAge: 31536000, // in prod env, 0 in other envs
    buffer: true, // in prod env, false in other envs
  };

  // 配置端口和ip
  config.cluster = {
    listen: {
      path: '',
      port: 7000,
      hostname: '127.0.0.1',
    },
  };

  return config;
};
