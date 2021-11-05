const log4js = require('log4js');
const path = require('path');

function computh(comppath){
  return  {
    //定义sql日志出口
    type: 'dateFile',
    filename: path.resolve(__dirname, 'logs', comppath, 'logger.log'),
    keepFileExt: 1024 * 1024 * 10,
    daysToKeep:31,
    layout: {
      type: 'pattern',
      pattern: '%c [%d{yyyy-MM-dd hh:mm:ss}] [%p]: %m%n'
    }
  }
}


log4js.configure({
  appenders: {
    sql: computh('sql'),
    default: {
      type: 'stdout'
    },
    api:computh('api')
  },
  categories:{
    //该分类使用出口sql的配置写入日志
    sql:{
      appenders:['sql'],
      level:'all'
    },
    default:{
      appenders:['default'],
      level:'all'
    },
    api:{
      appenders:['default'],
      level:'all'
    }
  }
});

process.on('exit', () => {
  log4js.shutdown();
})


exports.sqlLogger = log4js.getLogger('sql');
exports.logger = log4js.getLogger();
exports.apiLogger = log4js.getLogger('api');
