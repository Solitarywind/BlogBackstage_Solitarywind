let express = require('express');
let app = express();

//引入静态文件
const path = require('path');
const staticRoot = path.resolve(__dirname,'../public');
app.use(express.static(staticRoot));


const port = 1026;

app.listen(port, () => {
  console.log(`server lister on ${port}`);
})
