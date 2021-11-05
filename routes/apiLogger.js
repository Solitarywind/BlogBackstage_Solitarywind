const { apiLogger } = require('../logger');
const log4js = require('log4js');

module.exports = log4js.connectLogger(apiLogger,{
   level:'auto',
   nolog:'\\.gif|\\.jpg|\\.png$',
})
