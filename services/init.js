//数据库验证

const validate = require('validate.js');
const moment = require('moment');

validate.extend(validate.validators.datetime,{
  /*
   *  该函数会自动用于日期格式转换
   *  它会在验证时自动触发，它需要将任何数据转换为时间戳返回
   *  如果无法转换，返回NaN
   * */
  parse(value,options){
    let formats = ['YYYY-MM-DD','YYYY/MM/DD','YYYY-M-D','YYYY-MM-DD HH:mm:ss','YYYY-M-D H:m:s','YYYY/MM/DD HH:mm:ss','x'];
    if(options.dateOnly){
      formats = ['YYYY-MM-DD','YYYY/MM/DD','YYYY-M-D','x']
    }
    return +moment.utc(value,formats,true)
  }, 
  /**
   *  用户显示错误信息，显示字符串
   */
  format(value,option){
    let format = 'YYYY-MM-DD';
    if(!option.dateOnly){
      format += ' HH:mm:ss'
    }
    return moment.utc(value).format(format);
  }
})
