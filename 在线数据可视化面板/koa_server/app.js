
const koa = require('koa');
const app = new koa();

// 绑定中间件
// 1.绑定第一层中间件
const respDurationMiddleware =
    require('./middleware/koa_response_duration');
app.use(respDurationMiddleware);

// 2.绑定第二层中间件
const respHeaderMiddleware = require('./middleware/koa_response_header')
app.use(respHeaderMiddleware);

//3. 绑定第三层中间件
const respDataMiddleware = require('./middleware/koa_response_data')
app.use(respDataMiddleware);


app.use(async (ctx,next) => {
    ctx.set("Access-Control-Allow-Origin", "*");
    ctx.set("Access-Control-Allow-Origin", "*");
    await next();
})



// 监听端口号
app.listen(8888);