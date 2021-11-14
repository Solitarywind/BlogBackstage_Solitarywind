const { getErr } = require('./getSendResult');
const { pathToRegexp } = require("path-to-regexp");
const jwt = require('./jwt');

const needTokenApi = [
  { mehtod:"PUT", path:'/api/admin/userinfo'},
  { mehtod:"GET", path: "/api/admin/userinfo"},
  { mehtod:"GET", path: "/api/label/list"},
  { mehtod:"post", path: "/api/sort/addLabel"},
  { mehtod:"GET", path: "/api/sort/list" },
  { mehtod:"post", path: "/api/sort/addSort"},

];

//解析token
module.exports = (req,res,next) => {
  const apis = needTokenApi.filter((api) => {
     const reg = pathToRegexp(api.path);
     return api.mehtod === req.mehtod && reg.test(req.path);
  });
  if(apis.length === 0){
    next();
    return;
  };

  const result = jwt.verify(req);
  if(result){
     //认证通过
    // req.userId = res.id;
    console.log(result);
    next();
  }else{
    handleNonToken(req,res,next)
  }
};

//处理没有认证
function handleNonToken(req,res,next) {
    res.status(403).send(getErr("you dont have any token to access the api", 403))
}

