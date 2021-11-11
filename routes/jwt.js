const secrect = "gufeng";
const jwt = require("jsonwebtoken");

//颁发jwt
exports.publish = (res,maxAge = 3600 * 24 * 7,info = {}) => {
  const token = jwt.sign(info,secrect,{
    expiresIn: maxAge
  });
  //添加其他传输
  res.header("authorization",token);
  return token;
};

exports.verify = (req) => {
  let token = req.headers.authorization;
  if(!token){ //不存在token
    return null;
  }
  token = token.split(" ");
  token = token.length === 1 ? token[0] : token[1];

  try {
    return jwt.verify(token, secrect);
  }catch (e) {
    return  null;
  }
}
