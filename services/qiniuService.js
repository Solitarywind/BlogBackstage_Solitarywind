let QN = require('qiniu');
let formidable = require('formidable');
let qnConfig = require('../util/qiniuConfig');
let qndata = {};

let { bucket } = qnConfig;

qndata.upToken = (bucket) => {
   let putPolicy = new QN.rs.PutPolicy({scope:bucket});
   let { accessKey,secretKey } = qnConfig;
   let mac = new QN.auth.digest.Mac(accessKey,secretKey);
  return putPolicy.uploadToken(mac);
}

qndata.upImg = (req,callback) => {
  //创建上传表单
  let form = new formidable.IncomingForm();
  form.encoding = 'utf-8';
  form.keepExtensions = true;
  form.maxFieldsSize = 100 * 1024 * 1024;

  form.parse(req,(err,fields,files) => {
    if(err){
        console.log(err);
        return callback({code:-1,msg:err,data:''})
    }
    let key = new Date.getTime() + files.file.originalFilename;  //文件名以为时间
    let token = qndata.upToken(bucket); //构建上传token
    let filePath = files.file.filepath; //文件本地路径

    let config = new QN.conf.Config();
    config.zone = QN.zone.Zone_z2;
    let formUploader = new QN.form_up.FormUploader();
    let putExtra = new QN.form_up.PutExtra();
    formUploader.putFile(token,key,filePath,putExtra,(err,req,res) => {
      if(err){
        return callback({code:-1,msg:err,data:''})
      }
      if(res.statusCode === 200){ //上传成功
         return callback({
           code:0,
           msg:'图片上传成功',
           data:{
             url:'http://r2o237jm5.hn-bkt.clouddn.com/' + key
           }
         })
      }else{
        return callback({code:-1,msg:req,data:''})
      }
    })
  })
}

module.exports = qndata;
