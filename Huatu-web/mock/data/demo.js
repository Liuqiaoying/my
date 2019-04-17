// 引入mockjs文件
let Mock  = require('mockjs')
let Random = Mock.Random

let data = {
    list: [], // 定义接口名称为news
    type: {
        a: 'a',
        b: 'b'
    }
}
let images = [1, 2, 3].map(x => Random.image('200x100', Random.color(), Random.word(2, 6)))
// 动态生成10条新闻数据
for (let i = 0; i < 10; i++) {
    let content = Random.cparagraph(0, 10)
    data.list.push({
        'id': i,
        'title': Random.cword(8, 20),
        'desc': content.substr(0, 40),
        'tag': Random.cword(2, 6),
        'views': Random.integer(100, 5000),
        'images': images.slice(0, Random.integer(1, 3))
    })
}
module.exports = data
