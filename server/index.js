const app         = new (require('koa'))()
const path        = require('path')
const config      = require('./config.json')

app.use(require('koa-static')(path.join(__dirname, '/../dist/')))
app.use(async (ctx, next) => {
  await ctx.redirect('https://limeishu.org.tw/error/404')
})
app.listen(config.port)
console.log(`Start server on port ${config.port}.`)
