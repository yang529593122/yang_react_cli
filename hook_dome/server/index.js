/**
 * Time: 2021/6/24.
 * Author: Yang PengFei
 */
const Koa = require ('koa');
const Router = require ('koa-router');
const configuration = require('./config/default.js');
const cors = require('koa-cors');
const bodyParser = require('koa-bodyparser');
const app = new Koa();
app.use(cors());
app.use(bodyParser());
// 引入 路由模版
const home=require('./routers/home.js');
const router = new Router();
app.use(router.routes());
app.use(router.allowedMethods());
app.use(home.routes());

app.listen(configuration.port);