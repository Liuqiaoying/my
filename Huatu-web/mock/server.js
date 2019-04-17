const jsonServer = require('json-server')
const db = require('./db')
// 重写routes 让route能适应我们的接口规则 xxxx.json
const routes = require('./routes')

const port = '9998'

const server = jsonServer.create()
const router = jsonServer.router(db)
const middlewares = jsonServer.defaults()


// delay response
const delay = require('express-delay')
server.use(delay(200, 350))

server.use(jsonServer.bodyParser)
server.use(middlewares)
server.use(jsonServer.rewriter(routes))

// 设置增加一个响应头信息“从server到前端”
server.use((req, res, next) => {
    res.header('X-Hello', 'World')
    res.header('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8')
    next()
})
server.use(function (req, res, next) {
    if (req.method === 'POST') {
        // Converts POST to GET and move payload to query params
        // This way it will make JSON Server that it's GET request
        req.method = 'GET'
        // req.query = req.body
        let body = req.body
        for (const key in body) {
            if (body.hasOwnProperty(key)) {
                const value = body[key]
                if (typeof value === 'number') {
                    body[key] = value.toString()
                }
            }
        }
    }
    // Continue to JSON Server router
    next()
})

// 数据发送到前端之前包一层
router.render = (req, res) => {
    res.status(200)
    let newRes = {
        data: res.locals.data,
        code: 0,
        msg: '',
        pageDto: {
            'count': 66,
            'curPageCount': 3,
            'pageNum': 1,
            'pageSize': 10,
            'totalPageNum': 10
        }
    }
    if ('pageDto' in res.locals.data) {
        let data = res.locals.data
        Object.assign(newRes, {
            data: data.data,
            pageDto: data.pageDto
        })
    }
    // 根据参数返回当对象
    // if (res.locals.data.length === 1) {
    //     newRes.data = res.locals.data[0]
    // }
    // console.log('======================== 返回结果 START ========================')
    // console.log(newRes)
    // console.log('======================== 返回结果 END   ========================')
    res.jsonp(newRes)
}
server.use('/api', router) // 模拟api接口，就是访问api的时候给制定路由规则

server.use(router)
server.listen(port, function () {
    console.log(`JSON Server is running in http://localhost:${port}`)
})
